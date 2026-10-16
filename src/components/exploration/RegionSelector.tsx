'use client';

import React from 'react';
import { useExplorerStore } from '@/store/explorerStore';
import { REGIONS } from '@/data/regions';
import type { RegionId } from '@/types/destination';

export function RegionSelector() {
  const selectedRegion = useExplorerStore((s) => s.selectedRegion);
  const setRegion = useExplorerStore((s) => s.setRegion);
  const isTerrainExploreMode = useExplorerStore((s) => s.isTerrainExploreMode);
  const isPlayingJourney = useExplorerStore((s) => s.isPlayingJourney);
  const hasStarted = useExplorerStore((s) => s.hasStarted);

  if (isTerrainExploreMode || isPlayingJourney || !hasStarted) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto max-w-[92vw]">
      <div className="flex items-center gap-1 p-1.5 rounded-2xl bg-terrain-surface/90 dark:bg-[#17221F]/90 backdrop-blur-md border border-terrain-border dark:border-[#253530] shadow-atlas overflow-x-auto no-scrollbar">
        {REGIONS.map((region) => {
          const isActive = selectedRegion === region.id;
          return (
            <button
              key={region.id}
              type="button"
              onClick={() => setRegion(region.id as RegionId)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-terrain-accent text-white shadow-sm'
                  : 'text-terrain-muted hover:text-terrain-text dark:text-[#9CAEA6] dark:hover:text-white hover:bg-terrain-bg/70 dark:hover:bg-[#22312C]'
              }`}
            >
              {region.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
