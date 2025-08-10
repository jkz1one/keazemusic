// 1️⃣ BACKEND: app/api/beats/[id]/route.ts

import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const filePath = path.join(process.cwd(), 'private_audio', `${id}.mp3`);

  if (!fs.existsSync(filePath)) {
    return new Response(null, {
      status: 204,
      statusText: 'No Content',
    });
  }

  const stream = fs.createReadStream(filePath);
  return new Response(stream as any, {
    headers: {
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'no-store',
    },
  });
}