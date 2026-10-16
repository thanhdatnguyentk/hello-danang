'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Bookmark,
  Compass,
  MapPin,
  Mountain,
  X,
} from 'lucide-react';
import { useExplorerStore } from '@/store/explorerStore';
import { useDestinations } from '@/hooks/useDestinations';

export function FloatingPanel() {
  const hasStarted = useExplorerStore((s) => s.hasStarted);
  const startExploration = useExplorerStore((s) => s.startExploration);
  const activeTab = useExplorerStore((s) => s.activeTab);
  const setActiveTab = useExplorerStore((s) => s.setActiveTab);
  const selectDestination = useExplorerStore((s) => s.selectDestination);
  const selectedDestinationId = useExplorerStore((s) => s.selectedDestinationId);
  const savedDestinationIds = useExplorerStore((s) => s.savedDestinationIds);
  const isTerrainExploreMode = useExplorerStore((s) => s.isTerrainExploreMode);
  const isPlayingJourney = useExplorerStore((s) => s.isPlayingJourney);

  const { allDestinations, filteredDestinations } = useDestinations();

  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const favoriteDestinations = allDestinations.filter((d) =>
    savedDestinationIds.includes(d.id)
  );

  const displayedList = onlyFavorites
    ? favoriteDestinations
    : filteredDestinations;

  const isDestinationsDrawerOpen =
    activeTab === 'destinations' && !isTerrainExploreMode && !isPlayingJourney;

  return (
    <>
      {/* 1. Landing Editorial Introduction Overlay over Live 3D Map */}
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-8 left-4 right-4 md:left-8 md:right-auto md:max-w-[430px] z-30 pointer-events-auto p-6 rounded-3xl bg-terrain-surface/92 dark:bg-[#17221F]/92 backdrop-blur-md border border-terrain-border dark:border-[#253530] shadow-atlas-lg"
          >
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-terrain-accent/10 text-terrain-accent dark:text-[#7BC4AE] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Atlas Địa hình 3D Tương tác</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-terrain-text dark:text-white leading-tight">
              Khám phá Việt Nam.
              <span className="block text-terrain-accent dark:text-[#7BC4AE]">
                Từ một góc nhìn khác.
              </span>
            </h1>

            <p className="text-xs md:text-sm text-terrain-muted dark:text-[#B5C4BC] leading-relaxed mt-2.5">
              Hành trình tương tác qua núi rừng, bờ biển, thung lũng và những kỳ quan thiên nhiên của Việt Nam trên nền địa hình 3D thực tế.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={startExploration}
                className="px-4 py-2.5 rounded-xl bg-terrain-accent hover:bg-terrain-accentHover text-white text-xs md:text-sm font-medium flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>Bắt đầu khám phá</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  startExploration();
                  selectDestination('fansipan');
                }}
                className="px-3.5 py-2.5 rounded-xl bg-terrain-bg dark:bg-[#22312C] hover:bg-terrain-border/60 text-terrain-text dark:text-[#DCE6E1] text-xs font-medium transition-colors"
              >
                Bay tới Đỉnh Fansipan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Compact Destinations Directory Drawer (when 'Địa điểm' tab is active) */}
      <AnimatePresence>
        {isDestinationsDrawerOpen && (
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-30 top-20 right-4 left-4 md:left-auto md:right-16 md:w-[370px] max-h-[calc(100vh-120px)] flex flex-col rounded-2xl bg-terrain-surface/95 dark:bg-[#17221F]/95 backdrop-blur-md border border-terrain-border dark:border-[#253530] shadow-atlas-lg overflow-hidden pointer-events-auto"
          >
            {/* Header */}
            <div className="p-4 border-b border-terrain-border dark:border-[#253530] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-terrain-accent/10 text-terrain-accent dark:text-[#7BC4AE] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-terrain-text dark:text-white">
                    Danh mục Địa điểm
                  </h2>
                  <p className="text-[11px] text-terrain-muted">
                    {displayedList.length} tọa độ địa lý trên bản đồ
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setOnlyFavorites((prev) => !prev)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium flex items-center gap-1 border transition-colors ${
                    onlyFavorites
                      ? 'bg-terrain-accent text-white border-terrain-accent'
                      : 'bg-terrain-bg dark:bg-[#22312C] text-terrain-muted border-terrain-border dark:border-[#2B3E38]'
                  }`}
                >
                  <Bookmark className="w-3 h-3" />
                  <span>Đã lưu ({favoriteDestinations.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('explore')}
                  aria-label="Đóng danh mục"
                  className="p-1.5 rounded-lg text-terrain-muted hover:text-terrain-text dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Compact Destination Items */}
            <div className="p-3 overflow-y-auto space-y-1.5 flex-1">
              {displayedList.length > 0 ? (
                displayedList.map((dest) => {
                  const isSelected = selectedDestinationId === dest.id;
                  return (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => selectDestination(dest.id)}
                      className={`w-full p-2.5 rounded-xl text-left flex items-center gap-3 transition-all border ${
                        isSelected
                          ? 'bg-terrain-accent/10 border-terrain-accent'
                          : 'bg-terrain-bg/60 dark:bg-[#1C2825] hover:bg-terrain-bg dark:hover:bg-[#243430] border-transparent'
                      }`}
                    >
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-12 h-12 rounded-lg object-cover shrink-0 bg-terrain-border"
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-semibold text-terrain-text dark:text-white truncate">
                            {dest.name}
                          </span>
                          <span className="text-[10px] font-mono text-terrain-accent dark:text-[#7BC4AE] shrink-0">
                            {dest.elevation}
                          </span>
                        </div>
                        <div className="text-[11px] text-terrain-muted mt-0.5">
                          {dest.province} · {dest.category}
                        </div>
                        <p className="text-[11px] text-terrain-muted/90 truncate mt-0.5">
                          {dest.description}
                        </p>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="py-10 px-4 text-center">
                  <Mountain className="w-6 h-6 text-terrain-muted mx-auto mb-2 opacity-60" />
                  <p className="text-xs text-terrain-muted">
                    {onlyFavorites
                      ? 'Bạn chưa lưu địa điểm nào.'
                      : 'Không có địa điểm phù hợp với bộ lọc hiện tại.'}
                  </p>
                </div>
              )}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
