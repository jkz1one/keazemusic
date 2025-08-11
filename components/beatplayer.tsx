'use client';

import { useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const beats = [
  { id: 'polo1200', title: 'Polo1200' },
  { id: 'TaketheScenic', title: 'Take the Scenic Route Instead' },
  { id: 'Drop-It', title: 'Drop It' },
];

export default function BeatPlayer() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [nowPlaying, setNowPlaying] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    // pause if clicking the one that's already playing
    if (nowPlaying === id && audio) {
      audio.pause();
      setNowPlaying(null);
      return;
    }

    // stop existing
    if (audio) {
      audio.pause();
    }

    // make a new stream
    const stream = new Audio(`/api/beats/${encodeURIComponent(id)}`);
    // when the track ends, clear UI state
    stream.addEventListener('ended', () => setNowPlaying(null), { once: true });
    stream.play();
    setAudio(stream);
    setNowPlaying(id);
  };

  // optional: clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audio) audio.pause();
    };
  }, [audio]);

  // optional: disable right-click (light deterrent only)
  useEffect(() => {
    const disableRightClick = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', disableRightClick);
    return () => document.removeEventListener('contextmenu', disableRightClick);
  }, []);

  return (
    <div className="flex flex-col space-y-6">
      {beats.map((beat) => (
        <div
          key={beat.id}
          className="bg-[#0e0e0e] p-4 rounded-xl shadow-md border border-gray-800 hover:border-gray-600 transition"
        >
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-gray-900 rounded-md overflow-hidden">
              <img
                src={`/images/beats/${encodeURIComponent(beat.id)}.jpg`}
                alt={`${beat.title} Cover`}
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold text-white mb-2">{beat.title}</h2>
              <div className="h-6 bg-gray-700 rounded-sm mb-3" />
              <button
                onClick={() => togglePlay(beat.id)}
                className="text-white border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition text-sm flex items-center space-x-2"
              >
                {nowPlaying === beat.id ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
