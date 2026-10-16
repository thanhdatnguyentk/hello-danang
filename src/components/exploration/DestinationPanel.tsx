'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Bookmark,
  Plus,
  Check,
  Compass,
  Mountain,
  Calendar,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { useExplorerStore } from '@/store/explorerStore';
import { useDestinations } from '@/hooks/useDestinations';
import { formatCoordinates } from '@/lib/geoUtils';

const REGION_LABELS: Record<'north' | 'central' | 'south', string> = {
  north: 'Miền Bắc',
  central: 'Miền Trung',
  south: 'Miền Nam',
};

export function DestinationPanel() {
  const { selectedDestination } = useDestinations();

  const savedDestinationIds = useExplorerStore((s) => s.savedDestinationIds);
  const journeyIds = useExplorerStore((s) => s.journeyIds);
  const selectDestination = useExplorerStore((s) => s.selectDestination);
  const toggleSavedDestination = useExplorerStore((s) => s.toggleSavedDestination);
  const addToJourney = useExplorerStore((s) => s.addToJourney);
  const removeFromJourney = useExplorerStore((s) => s.removeFromJourney);
  const enterTerrainExploreMode = useExplorerStore((s) => s.enterTerrainExploreMode);
  const isTerrainExploreMode = useExplorerStore((s) => s.isTerrainExploreMode);
  const isPlayingJourney = useExplorerStore((s) => s.isPlayingJourney);

  if (isTerrainExploreMode || isPlayingJourney) {
    return null;
  }

  const isSaved = selectedDestination
    ? savedDestinationIds.includes(selectedDestination.id)
    : false;
  const isInJourney = selectedDestination
    ? journeyIds.includes(selectedDestination.id)
    : false;

  return (
    <AnimatePresence>
      {selectedDestination && (
        <motion.aside
          key={selectedDestination.id}
          initial={{ opacity: 0, y: 24, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed z-30 bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:w-[380px] max-h-[82vh] md:max-h-[calc(100vh-140px)] flex flex-col rounded-t-3xl md:rounded-2xl bg-terrain-surface/95 dark:bg-[#17221F]/95 backdrop-blur-md border border-terrain-border dark:border-[#253530] shadow-atlas-lg overflow-hidden pointer-events-auto"
        >
          {/* Hero Cover Image */}
          <div className="relative h-44 w-full overflow-hidden bg-terrain-bg shrink-0">
            <img
              src={selectedDestination.image}
              alt={selectedDestination.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17221F]/80 via-[#17221F]/20 to-transparent" />

            {/* Top badges & Close */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#17221F]/65 text-white backdrop-blur-md border border-white/15">
                {REGION_LABELS[selectedDestination.region]} · {selectedDestination.category}
              </span>
              <button
                type="button"
                onClick={() => selectDestination(null)}
                aria-label="Đóng"
                className="w-8 h-8 rounded-full bg-[#17221F]/65 text-white backdrop-blur-md border border-white/15 flex items-center justify-center hover:bg-[#17221F] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Destination Title Overlay */}
            <div className="absolute bottom-3 left-4 right-4 text-white">
              <div className="flex items-center gap-1.5 text-xs text-white/80 mb-0.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{selectedDestination.province}</span>
              </div>
              <h2 className="text-xl font-semibold tracking-tight leading-snug">
                {selectedDestination.name}
              </h2>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-4 md:p-5 overflow-y-auto space-y-4 text-terrain-text dark:text-[#F0F4F1]">
            {/* Elevation & Best Season Bar */}
            <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-terrain-bg dark:bg-[#111917] border border-terrain-border/70 dark:border-[#253530]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-terrain-accent/10 text-terrain-accent dark:text-[#7BC4AE] flex items-center justify-center">
                  <Mountain className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-terrain-muted">
                    Độ cao địa hình
                  </div>
                  <div className="text-xs font-semibold">
                    {selectedDestination.elevation}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-terrain-accent/10 text-terrain-accent dark:text-[#7BC4AE] flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-terrain-muted">
                    Mùa đẹp nhất
                  </div>
                  <div className="text-xs font-semibold truncate max-w-[115px]">
                    {selectedDestination.bestSeason}
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Description */}
            <p className="text-xs md:text-sm text-terrain-muted dark:text-[#B5C4BC] leading-relaxed">
              {selectedDestination.longDescription || selectedDestination.description}
            </p>

            {/* Geographic Highlights */}
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-terrain-muted mb-2">
                <Sparkles className="w-3.5 h-3.5 text-terrain-accent" />
                <span>Điểm nổi bật địa lý</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedDestination.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-lg text-xs bg-terrain-bg dark:bg-[#202E2A] text-terrain-text dark:text-[#DCE6E1] border border-terrain-border dark:border-[#2B3E38]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Coordinate metadata */}
            <div className="text-[11px] font-mono text-terrain-muted flex items-center justify-between pt-1 border-t border-terrain-border/60 dark:border-[#253530]">
              <span>Tọa độ địa lý</span>
              <span>
                {formatCoordinates(
                  selectedDestination.location.latitude,
                  selectedDestination.location.longitude
                )}
              </span>
            </div>

            {/* Primary CTA: Signature Terrain Exploration Mode */}
            <div className="pt-1 space-y-2">
              <button
                type="button"
                onClick={() => enterTerrainExploreMode(selectedDestination.id)}
                className="w-full py-2.5 px-4 rounded-xl bg-terrain-accent hover:bg-terrain-accentHover text-white font-medium text-xs md:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Compass className="w-4 h-4" />
                <span>Khám phá địa hình</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => toggleSavedDestination(selectedDestination.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 border transition-colors ${
                    isSaved
                      ? 'bg-terrain-accent/10 border-terrain-accent text-terrain-accent dark:text-[#7BC4AE]'
                      : 'bg-terrain-surface dark:bg-[#1E2C28] border-terrain-border dark:border-[#2A3C36] text-terrain-text dark:text-[#DCE6E1] hover:border-terrain-accent/50'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                  <span>{isSaved ? 'Đã lưu' : 'Lưu địa điểm'}</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    isInJourney
                      ? removeFromJourney(selectedDestination.id)
                      : addToJourney(selectedDestination.id)
                  }
                  className={`py-2 px-3 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 border transition-colors ${
                    isInJourney
                      ? 'bg-terrain-accent/10 border-terrain-accent text-terrain-accent dark:text-[#7BC4AE]'
                      : 'bg-terrain-surface dark:bg-[#1E2C28] border-terrain-border dark:border-[#2A3C36] text-terrain-text dark:text-[#DCE6E1] hover:border-terrain-accent/50'
                  }`}
                >
                  {isInJourney ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Trong hành trình</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Thêm vào hành trình</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
