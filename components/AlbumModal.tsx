import React from 'react';
import type { Album } from '@/data/albumdata';
import { FaSpotify, FaApple, FaYoutube, FaSoundcloud } from 'react-icons/fa';
import { SiBandcamp } from 'react-icons/si';

type Props = {
  album: Album;
  onClose: () => void;
};

export default function AlbumModal({ album, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-black/80 p-6 rounded-md w-full max-w-md text-white relative shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Content Layer */}
        <div className="relative z-30">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-white text-xl hover:opacity-50"
          >
            ×
          </button>

          <h2 className="text-lg font-semibold mb-3 flex items-center justify-center flex-col">
            {album.title}
          </h2>

          <ul className="mb-5 space-y-1 text-sm text-gray-400 flex items-center justify-center flex-col">
            {album.credits.map((credit, i) => (
              <li key={i}>{credit}</li>
            ))}
          </ul>

          <div className="flex flex-row flex-wrap justify-center items-center gap-8 text-5xl mt-6">
            {album.links.spotify && (
              <a
                href={album.links.spotify}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-transform hover:scale-110"
              >
                <FaSpotify />
              </a>
            )}
            {album.links.apple && (
              <a
                href={album.links.apple}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-transform hover:scale-110"
              >
                <FaApple />
              </a>
            )}
            {album.links.bandcamp && (
              <a
                href={album.links.bandcamp}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-transform hover:scale-110"
              >
                <SiBandcamp />
              </a>
            )}
            {album.links.youtube && (
              <a
                href={album.links.youtube}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-transform hover:scale-110"
              >
                <FaYoutube />
              </a>
            )}
            {album.links.soundcloud && (
              <a
                href={album.links.soundcloud}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-transform hover:scale-110"
              >
                <FaSoundcloud />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
