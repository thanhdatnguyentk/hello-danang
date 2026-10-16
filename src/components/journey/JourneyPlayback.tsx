'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  X,
  Mountain,
  MapPin,
} from 'lucide-react';
import { useExplorerStore } from '@/store/explorerStore';
import { useJourney } from '@/hooks/useJourney';
import { formatCoordinates } from '@/lib/geoUtils';

export function JourneyPlayback() {
  const {
    journeyDestinations,
    currentJourneyDestination,
    isPlayingJourney,
    isJourneyPaused,
    currentJourneyIndex,
  } = useJourney();

  const pauseJourneyPlayback = useExplorerStore((s) => s.pauseJourneyPlayback);
  const resumeJourneyPlayback = useExplorerStore((s) => s.resumeJourneyPlayback);
  const nextJourneyStop = useExplorerStore((s) => s.nextJourneyStop);
  const prevJourneyStop = useExplorerStore((s) => s.prevJourneyStop);
  const stopJourneyPlayback = useExplorerStore((s) => s.stopJourneyPlayback);

  const totalStops = journeyDestinations.length;

  // Automatic fly-through timer between stops
  useEffect(() => {
    if (!isPlayingJourney || isJourneyPaused || totalStops <= 1) return;

    const timer = setTimeout(() => {
      if (currentJourneyIndex < totalStops - 1) {
        nextJourneyStop();
      } else {
        pauseJourneyPlayback();
      }
    }, 6500);

    return () => clearTimeout(timer);
  }, [
    isPlayingJourney,
    isJourneyPaused,
    currentJourneyIndex,
    totalStops,
    nextJourneyStop,
    pauseJourneyPlayback,
  ]);

  return (
    <AnimatePresence>
      {isPlayingJourney && currentJourneyDestination && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[540px] z-30 pointer-events-auto rounded-2xl bg-terrain-surface/95 dark:bg-[#17221F]/95 backdrop-blur-md border border-terrain-border dark:border-[#253530] shadow-atlas-lg overflow-hidden"
        >
          {/* Progress Dots */}
          <div className="flex items-center gap-1 px-4 pt-3">
            {journeyDestinations.map((stop, idx) => (
              <div
                key={stop.id}
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  idx <= currentJourneyIndex
                    ? 'bg-terrain-accent'
                    : 'bg-terrain-border dark:bg-[#283B35]'
                }`}
              />
            ))}
          </div>

          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Active Stop Info */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-[11px] font-medium text-terrain-accent dark:text-[#7BC4AE]">
                <span>
                  Điểm dừng {currentJourneyIndex + 1} / {totalStops}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {currentJourneyDestination.province}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 font-mono">
                  <Mountain className="w-3 h-3" />
                  {currentJourneyDestination.elevation}
                </span>
              </div>

              <h3 className="text-base font-semibold text-terrain-text dark:text-white mt-0.5 truncate">
                {currentJourneyDestination.name}
              </h3>

              <p className="text-xs text-terrain-muted dark:text-[#B5C4BC] line-clamp-2 mt-1">
                {currentJourneyDestination.description}
              </p>

              <div className="text-[10px] font-mono text-terrain-muted mt-1.5">
                {formatCoordinates(
                  currentJourneyDestination.location.latitude,
                  currentJourneyDestination.location.longitude
                )}
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-end gap-1.5 shrink-0">
              <button
                type="button"
                onClick={prevJourneyStop}
                disabled={currentJourneyIndex === 0}
                aria-label="Điểm trước"
                className="w-9 h-9 rounded-xl border border-terrain-border dark:border-[#2A3C36] flex items-center justify-center text-terrain-text dark:text-white hover:bg-terrain-bg dark:hover:bg-[#22312C] disabled:opacity-35 transition-colors"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() =>
                  isJourneyPaused
                    ? resumeJourneyPlayback()
                    : pauseJourneyPlayback()
                }
                aria-label={isJourneyPaused ? 'Tiếp tục bay' : 'Tạm dừng'}
                className="w-10 h-10 rounded-xl bg-terrain-accent hover:bg-terrain-accentHover text-white flex items-center justify-center transition-colors shadow-sm"
              >
                {isJourneyPaused ? (
                  <Play className="w-4 h-4 fill-current" />
                ) : (
                  <Pause className="w-4 h-4 fill-current" />
                )}
              </button>

              <button
                type="button"
                onClick={nextJourneyStop}
                disabled={currentJourneyIndex >= totalStops - 1}
                aria-label="Điểm tiếp theo"
                className="w-9 h-9 rounded-xl border border-terrain-border dark:border-[#2A3C36] flex items-center justify-center text-terrain-text dark:text-white hover:bg-terrain-bg dark:hover:bg-[#22312C] disabled:opacity-35 transition-colors"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={stopJourneyPlayback}
                aria-label="Thoát hành trình"
                className="ml-1 px-3 h-9 rounded-xl bg-terrain-bg dark:bg-[#22312C] text-xs font-medium text-terrain-text dark:text-white hover:bg-terrain-border/70 flex items-center gap-1 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                <span>Thoát</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
