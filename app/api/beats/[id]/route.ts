// app/api/beats/[id]/route.ts
export const runtime = 'nodejs';

export async function GET(req: Request, ctx: unknown) {
  const { id } = (ctx as { params: { id: string } }).params;
  const origin = new URL(req.url).origin;
  const range = req.headers.get('range') ?? undefined;

  const res = await fetch(`${origin}/previews/${encodeURIComponent(id)}.mp3`, {
    headers: range ? { range } : undefined,
  });

  if (res.status === 404) return new Response(null, { status: 204 });

  return new Response(res.body, {
    status: res.status, // 200 or 206
    headers: {
      'Content-Type': 'audio/mp3',
      'Accept-Ranges': 'bytes',
      ...(res.headers.get('content-length') && { 'Content-Length': res.headers.get('content-length')! }),
      ...(res.headers.get('content-range') && { 'Content-Range': res.headers.get('content-range')! }),
      'Cache-Control': 'no-store',
    },
  });
}
