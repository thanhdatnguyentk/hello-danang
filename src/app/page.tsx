'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Navigation } from '@/components/layout/Navigation';
import { FloatingPanel } from '@/components/layout/FloatingPanel';
import { SearchBar } from '@/components/exploration/SearchBar';
import { RegionSelector } from '@/components/exploration/RegionSelector';
import { DestinationPanel } from '@/components/exploration/DestinationPanel';
import { TerrainExploreMode } from '@/components/exploration/TerrainExploreMode';
import { JourneyPlanner } from '@/components/journey/JourneyPlanner';
import { JourneyPlayback } from '@/components/journey/JourneyPlayback';

const TerrainMap = dynamic(
  () => import('@/components/map/TerrainMap').then((mod) => mod.TerrainMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-screen h-screen bg-terrain-bg flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-terrain-accent border-t-transparent animate-spin" />
          <span className="text-xs font-medium text-terrain-muted tracking-wide">
            Đang khởi tạo bản đồ địa hình 3D Việt Nam...
          </span>
        </div>
      </div>
    )
  }
);

export default function HomePage() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-terrain-bg">
      {/* Primary Fullscreen 3D WebGL Terrain Map (85-95% visual space) */}
      <TerrainMap />

      {/* Minimalist Floating Atlas Interface */}
      <Navigation />
      <SearchBar />
      <RegionSelector />
      <FloatingPanel />
      <DestinationPanel />
      <TerrainExploreMode />
      <JourneyPlanner />
      <JourneyPlayback />
    </main>
  );
}
