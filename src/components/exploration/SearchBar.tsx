'use client';

import React, { useRef, useState } from 'react';
import { Search, X, Mountain, Waves, Trees, Landmark, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExplorerStore } from '@/store/explorerStore';
import { useDestinations } from '@/hooks/useDestinations';
import type { DestinationCategory } from '@/types/destination';

const CATEGORIES: DestinationCategory[] = [
  'Tất cả',
  'Núi rừng',
  'Biển đảo',
  'Thiên nhiên',
  'Văn hóa',
];

const CATEGORY_ICONS: Record<DestinationCategory, React.ReactNode> = {
  'Tất cả': <Compass className="w-3.5 h-3.5" />,
  'Núi rừng': <Mountain className="w-3.5 h-3.5" />,
  'Biển đảo': <Waves className="w-3.5 h-3.5" />,
  'Thiên nhiên': <Trees className="w-3.5 h-3.5" />,
  'Văn hóa': <Landmark className="w-3.5 h-3.5" />,
};

const REGION_LABELS: Record<'north' | 'central' | 'south', string> = {
  north: 'Miền Bắc',
  central: 'Miền Trung',
  south: 'Miền Nam',
};

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const searchQuery = useExplorerStore((s) => s.searchQuery);
  const setSearchQuery = useExplorerStore((s) => s.setSearchQuery);
  const selectedCategory = useExplorerStore((s) => s.selectedCategory);
  const setCategory = useExplorerStore((s) => s.setCategory);
  const selectDestination = useExplorerStore((s) => s.selectDestination);
  const isTerrainExploreMode = useExplorerStore((s) => s.isTerrainExploreMode);
  const isPlayingJourney = useExplorerStore((s) => s.isPlayingJourney);
  const hasStarted = useExplorerStore((s) => s.hasStarted);

  const { searchSuggestions } = useDestinations();

  if (isTerrainExploreMode || isPlayingJourney || !hasStarted) {
    return null;
  }

  return (
    <div className="fixed top-20 left-4 right-4 md:left-6 md:right-auto md:w-[420px] z-20 pointer-events-none flex flex-col gap-2.5">
      {/* Floating Search Bar */}
      <div className="pointer-events-auto relative">
        <div
          className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-terrain-surface/90 dark:bg-[#17221F]/90 backdrop-blur-md border transition-all shadow-atlas ${
            isFocused
              ? 'border-terrain-accent ring-2 ring-terrain-accent/15'
              : 'border-terrain-border dark:border-[#253530]'
          }`}
        >
          <Search className="w-4 h-4 text-terrain-muted shrink-0" />
          <input
            ref={inputRef}
            id="vietnam-terrain-search-input"
            type="text"
            value={searchQuery}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 180)}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Khám phá một địa điểm ở Việt Nam..."
            className="w-full bg-transparent text-xs md:text-sm text-terrain-text dark:text-[#F0F4F1] placeholder:text-terrain-muted focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                inputRef.current?.focus();
              }}
              aria-label="Xóa tìm kiếm"
              className="p-1 rounded-lg text-terrain-muted hover:text-terrain-text dark:hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Instant Suggestions Dropdown */}
        <AnimatePresence>
          {isFocused && searchQuery.trim().length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-terrain-surface/95 dark:bg-[#17221F]/95 backdrop-blur-md border border-terrain-border dark:border-[#253530] shadow-atlas-lg overflow-hidden z-30"
            >
              {searchSuggestions.length > 0 ? (
                <div className="py-1.5 max-h-72 overflow-y-auto">
                  {searchSuggestions.map((dest) => (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => {
                        selectDestination(dest.id);
                        setIsFocused(false);
                      }}
                      className="w-full px-3.5 py-2.5 text-left flex items-center justify-between hover:bg-terrain-bg dark:hover:bg-[#21312C] transition-colors"
                    >
                      <div>
                        <div className="text-xs font-medium text-terrain-text dark:text-[#F0F4F1]">
                          {dest.name}
                        </div>
                        <div className="text-[11px] text-terrain-muted">
                          {dest.province} · {REGION_LABELS[dest.region]}
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-terrain-accent dark:text-[#7BC4AE] bg-terrain-accent/10 px-2 py-0.5 rounded-md">
                        {dest.elevation}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-6 text-center text-xs text-terrain-muted">
                  Không tìm thấy địa điểm phù hợp với &ldquo;{searchQuery}&rdquo;
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Compact Category Filter Pills */}
      <div className="pointer-events-auto flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setCategory(category)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all shadow-atlas-sm border ${
                isActive
                  ? 'bg-terrain-accent text-white border-terrain-accent'
                  : 'bg-terrain-surface/90 dark:bg-[#17221F]/90 text-terrain-text dark:text-[#D5DFDA] border-terrain-border dark:border-[#253530] hover:border-terrain-accent/50'
              }`}
            >
              {CATEGORY_ICONS[category]}
              <span>{category}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
