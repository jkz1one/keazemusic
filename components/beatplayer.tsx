'use client';

import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

type Beat = { id: string; title: string };

const beats: Beat[] = [
  { id: 'polo1200', title: 'Polo1200' },
  { id: 'TaketheScenic', title: 'Take the Scenic Route Instead' },
  { id: 'Drop-It', title: 'Drop It' },
];

function Waveform({
  id,
  progress,
  onSeek,
}: {
  id: string;
  progress: number; // 0..1
  onSeek: (p: number) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [peaks, setPeaks] = useState<number[] | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // fetch + decode once to build peaks
  useEffect(() => {
    let aborted = false;
    (async () => {
      // @ts-expect-error - Safari prefix
      const AC: typeof AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = audioCtxRef.current || new AC();

      const res = await fetch(`/api/beats/${encodeURIComponent(id)}`);
      if (!res.ok || aborted) return;

      const arr = await res.arrayBuffer();
      if (aborted) return;

      const buf = await audioCtxRef.current.decodeAudioData(arr);
      const bars = 600;
      const chL = buf.getChannelData(0);
      const chR = buf.numberOfChannels > 1 ? buf.getChannelData(1) : chL;
      const block = Math.max(1, Math.floor(chL.length / bars));

      const pks = new Array(bars).fill(0).map((_, i) => {
        const start = i * block;
        let m = 0;
        for (let j = 0; j < block; j++) {
          const v = Math.max(Math.abs(chL[start + j] || 0), Math.abs(chR[start + j] || 0));
          if (v > m) m = v;
        }
        return m;
      });

      if (!aborted) setPeaks(pks);
    })();

    return () => {
      aborted = true;
    };
  }, [id]);

  // draw waveform + progress
  useEffect(() => {
    if (!canvasRef.current || !peaks) return;

    const c = canvasRef.current;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const w = Math.floor(c.clientWidth * dpr);
    const h = Math.floor(c.clientHeight * dpr);

    if (c.width !== w) c.width = w;
    if (c.height !== h) c.height = h;

    const ctx = c.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, w, h);

    const mid = h / 2;
    const barW = Math.max(1, Math.floor(w / peaks.length));
    const gap = Math.floor(barW * 0.2);
    const usable = barW - gap;

    // base bars
    ctx.fillStyle = 'rgba(156,163,175,0.35)'; // gray-400 @35%
    peaks.forEach((pk, i) => {
      const x = i * barW;
      const amp = Math.max(2, pk * (h * 0.9));
      ctx.fillRect(x, mid - amp / 2, usable, amp);
    });

    // progress overlay + playhead
    const px = Math.floor(w * Math.min(1, Math.max(0, progress)));
    if (px > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, px, h);
      ctx.clip();
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      peaks.forEach((pk, i) => {
        const x = i * barW;
        const amp = Math.max(2, pk * (h * 0.9));
        ctx.fillRect(x, mid - amp / 2, usable, amp);
      });
      ctx.restore();

      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.fillRect(px - 1, 0, 2, h);
    }
  }, [peaks, progress]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const p = (e.clientX - r.left) / r.width;
    onSeek(Math.min(1, Math.max(0, p)));
  };

  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      className="w-full h-16 bg-gray-800/60 rounded-md cursor-pointer"
    />
  );
}

export default function BeatPlayer() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [nowPlaying, setNowPlaying] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0); // 0..1 for active track
  const [isPlaying, setIsPlaying] = useState(false);

  // keep UI in sync with the current audio element
  useEffect(() => {
    if (!audio) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      setNowPlaying(null);
      setProgress(0);
    };
    const onLoaded = () => setDuration(audio.duration || 0);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('loadedmetadata', onLoaded);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('loadedmetadata', onLoaded);
    };
  }, [audio]);

  // update progress smoothly
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      if (audio && !audio.paused && duration > 0) {
        setProgress(audio.currentTime / duration);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [audio, duration]);

  // optional: disable right-click
  useEffect(() => {
    const disable = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', disable);
    return () => document.removeEventListener('contextmenu', disable);
  }, []);

  const playOrPause = (id: string) => {
    // same track toggles pause/resume
    if (nowPlaying === id && audio) {
      if (audio.paused) audio.play();
      else audio.pause();
      return;
    }

    // switching tracks
    if (audio) audio.pause();

    const stream = new Audio(`/api/beats/${encodeURIComponent(id)}`);
    stream.play();
    setAudio(stream);
    setNowPlaying(id);
    setProgress(0);
  };

  const seek = (id: string, p: number) => {
    if (!audio || nowPlaying !== id) {
      if (audio) audio.pause();
      const stream = new Audio(`/api/beats/${encodeURIComponent(id)}`);
      stream.addEventListener(
        'loadedmetadata',
        () => {
          stream.currentTime = (stream.duration || 0) * p;
          stream.play();
        },
        { once: true }
      );
      setAudio(stream);
      setNowPlaying(id);
      setProgress(p);
      return;
    }
    if (duration > 0) {
      audio.currentTime = duration * p;
      setProgress(p);
    }
  };

  // ⬇ cleanup on unmount so audio stops when leaving the page
  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  return (
    <div className="flex flex-col space-y-4">
      {beats.map((beat) => {
        const active = nowPlaying === beat.id;
        const p = active ? progress : 0;

        return (
          <div
            key={beat.id}
            className="bg-[#0e0e0e] p-4 rounded-xl shadow-md border border-gray-800 hover:border-gray-600 transition"
          >
            {/* Title row (flush-left) */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white font-semibold">{beat.title}</h2>
              {active && isPlaying ? (
                <span className="text-xs text-gray-400">now playing</span>
              ) : null}
            </div>

            {/* Controls + waveform */}
            <div className="flex items-center gap-4">
              {/* Button column: same height as waveform, centered */}
              <div className="w-24 shrink-0 h-16 flex items-center justify-center">
                <button
                  onClick={() => playOrPause(beat.id)}
                  className="w-full flex items-center justify-center gap-2 text-white px-3 py-4 rounded-md hover:bg-white hover:text-black transition text-sm"
                >
                  {active && isPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
                  <span>{active && isPlaying ? 'Pause' : 'Play'}</span>
                </button>
              </div>

              <div className="flex-1">
                <Waveform id={beat.id} progress={p} onSeek={(pct) => seek(beat.id, pct)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
