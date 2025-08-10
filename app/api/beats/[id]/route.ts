// app/api/beats/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';

export const runtime = 'nodejs';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const filePath = path.join(process.cwd(), 'private_audio', `${params.id}.mp3`);

  if (!fs.existsSync(filePath)) {
    return new NextResponse('Not found', { status: 404 });
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.get('range');

  if (range) {
    const prefix = 'bytes=';
    if (!range.startsWith(prefix)) return new NextResponse(null, { status: 416 });

    const [startStr, endStr] = range.slice(prefix.length).split('-');
    const start = Number(startStr);
    const end = endStr ? Number(endStr) : fileSize - 1;

    if (Number.isNaN(start) || Number.isNaN(end) || start > end || end >= fileSize) {
      return new NextResponse(null, { status: 416 });
    }

    const chunkSize = end - start + 1;
    const nodeStream = fs.createReadStream(filePath, { start, end });
    const webStream = Readable.toWeb(nodeStream) as ReadableStream<Uint8Array>;

    return new NextResponse(webStream, {
      status: 206,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': String(chunkSize),
        'Cache-Control': 'no-store',
      },
    });
  }

  const nodeStream = fs.createReadStream(filePath);
  const webStream = Readable.toWeb(nodeStream) as ReadableStream<Uint8Array>;

  return new NextResponse(webStream, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Accept-Ranges': 'bytes',
      'Content-Length': String(fileSize),
      'Cache-Control': 'no-store',
    },
  });
}
