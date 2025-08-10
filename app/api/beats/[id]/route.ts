// app/api/beats/[id]/route.ts
import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';

export const runtime = 'nodejs';

export async function GET(req: Request, ctx: unknown) {
  const { id } = (ctx as { params: { id: string } }).params;

  const filePath = path.join(process.cwd(), 'private_audio', `${id}.mp3`);

  if (!fs.existsSync(filePath)) {
    return new Response('Not found', { status: 404 });
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.get('range');

  if (range) {
    const prefix = 'bytes=';
    if (!range.startsWith(prefix)) return new Response(null, { status: 416 });

    const [startStr, endStr] = range.slice(prefix.length).split('-');
    const start = Number(startStr);
    const end = endStr ? Number(endStr) : fileSize - 1;

    if (Number.isNaN(start) || Number.isNaN(end) || start > end || end >= fileSize) {
      return new Response(null, { status: 416 });
    }

    const chunkSize = end - start + 1;
    const nodeStream = fs.createReadStream(filePath, { start, end });
    const webStream = Readable.toWeb(nodeStream) as ReadableStream<Uint8Array>;

    return new Response(webStream, {
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

  return new Response(webStream, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Accept-Ranges': 'bytes',
      'Content-Length': String(fileSize),
      'Cache-Control': 'no-store',
    },
  });
}
