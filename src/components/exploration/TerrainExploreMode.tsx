'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mountain, Orbit, ArrowLeft, Compass } from 'lucide-react';
import { useExplorerStore } from '@/store/explorerStore';
import { useDestinations } from '@/hooks/useDestinations';
import { formatCoordinates } from '@/lib/geoUtils';

export function TerrainExploreMode() {
  const isTerrainExploreMode = useExplorerStore((s) => s.isTerrainExploreMode);
  const exitTerrainExploreMode = useExplorerStore((s) => s.exitTerrainExploreMode);
  const isOrbiting = useExplorerStore((s) => s.isOrbiting);
  const toggleOrbiting = useExplorerStore((s) => s.toggleOrbiting);

  const { selectedDestination } = useDestinations();

  return (
    <AnimatePresence>
      {isTerrainExploreMode && selectedDestination && (
        <>
          {/* Top-left Minimalist Location & Elevation Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 left-5 z-30 pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl bg-terrain-surface/90 dark:bg-[#17221F]/90 backdrop-blur-md border border-terrain-border dark:border-[#253530] shadow-atlas"
          >
            <div className="w-9 h-9 rounded-xl bg-terrain-accent text-white flex items-center justify-center shrink-0">
              <Mountain className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-terrain-text dark:text-white">
                  {selectedDestination.name}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-terrain-accent/10 text-terrain-accent dark:text-[#7BC4AE]">
                  {selectedDestination.elevation}
                </span>
              </div>
              <div className="text-[11px] text-terrain-muted font-mono mt-0.5">
                {selectedDestination.province} ·{' '}
                {formatCoordinates(
                  selectedDestination.location.latitude,
                  selectedDestination.location.longitude
                )}
              </div>
            </div>
          </motion.div>

          {/* Bottom Center Controls: Orbit Toggle & Exit Terrain Mode */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto flex items-center gap-2 p-1.5 rounded-2xl bg-terrain-surface/90 dark:bg-[#17221F]/90 backdrop-blur-md border border-terrain-border dark:border-[#253530] shadow-atlas-lg"
          >
            <button
              type="button"
              onClick={toggleOrbiting}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors ${
                isOrbiting
                  ? 'bg-terrain-accent text-white'
                  : 'text-terrain-text dark:text-[#DCE6E1] hover:bg-terrain-bg dark:hover:bg-[#22312C]'
              }`}
            >
              <Orbit className={`w-3.5 h-3.5 ${isOrbiting ? 'animate-spin' : ''}`} />
              <span>{isOrbiting ? 'Đang xoay 360°' : 'Xoay quanh địa hình'}</span>
            </button>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-terrain-muted border-x border-terrain-border dark:border-[#253530]">
              <Compass className="w-3.5 h-3.5 text-terrain-accent" />
              <span>Kéo chuột để nghiêng & xoay góc nhìn</span>
            </div>

            <button
              type="button"
              onClick={exitTerrainExploreMode}
              className="px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 bg-terrain-bg dark:bg-[#22312C] text-terrain-text dark:text-white hover:bg-terrain-border/60 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Thoát chế độ địa hình</span>
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
