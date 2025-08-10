'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import PageHeader from '@/components/PageHeader';
import albumData from '@/data/albumdata';
import type { Album } from '@/data/albumdata';

// Lazy-load modal for performance
const AlbumModal = dynamic(() => import('@/components/AlbumModal'), { ssr: false });

export default function DiscographyPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Page Header */}
      <PageHeader title="DISCOGRAPHY" image="/images/discography.jpg" />

      {/* Intro */}
      <div className="p-6 text-white text-center">
        <p className="text-gray-400 text-sm">
          Explore full releases, singles, and collaborations.
        </p>
      </div>

      {/* Album Grid */}
      <div className="px-6 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {albumData.map((album: Album, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedAlbum(album)}
              className="relative group"
            >
              <Image
                src={album.imgSrc}
                alt={album.title}
                width={500}
                height={500}
                loading="lazy"
                className="w-full h-auto rounded shadow-lg group-hover:opacity-80 transition"
                // Uncomment if you later add blur placeholders:
                // placeholder="blur"
                // blurDataURL={album.imgBlur}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Album Modal */}
      {selectedAlbum && (
        <AlbumModal album={selectedAlbum} onClose={() => setSelectedAlbum(null)} />
      )}
    </div>
  );
}
