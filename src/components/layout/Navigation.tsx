'use client';

import React, { useEffect } from 'react';
import { Compass, MapPin, Route, Search, Moon, Sun, Mountain } from 'lucide-react';
import { useExplorerStore } from '@/store/explorerStore';
import type { NavTab } from '@/types/destination';

export function Navigation() {
  const activeTab = useExplorerStore((s) => s.activeTab);
  const setActiveTab = useExplorerStore((s) => s.setActiveTab);
  const isDarkUI = useExplorerStore((s) => s.isDarkUI);
  const toggleDarkUI = useExplorerStore((s) => s.toggleDarkUI);
  const journeyIds = useExplorerStore((s) => s.journeyIds);
  const isTerrainExploreMode = useExplorerStore((s) => s.isTerrainExploreMode);
  const isPlayingJourney = useExplorerStore((s) => s.isPlayingJourney);
  const setRegion = useExplorerStore((s) => s.setRegion);
  const startExploration = useExplorerStore((s) => s.startExploration);
  const hasStarted = useExplorerStore((s) => s.hasStarted);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkUI) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkUI]);

  if (isTerrainExploreMode || isPlayingJourney) {
    return null;
  }

  const navItems: {
    id: NavTab;
    label: string;
    icon: React.ReactNode;
    badge?: number;
  }[] = [
    {
      id: 'explore',
      label: 'Khám phá',
      icon: <Compass className="w-3.5 h-3.5" />,
    },
    {
      id: 'destinations',
      label: 'Địa điểm',
      icon: <MapPin className="w-3.5 h-3.5" />,
    },
    {
      id: 'journey',
      label: 'Hành trình',
      icon: <Route className="w-3.5 h-3.5" />,
      badge: journeyIds.length,
    },
  ];

  const handleFocusSearch = () => {
    if (!hasStarted) {
      startExploration();
    }
    setActiveTab('explore');
    setTimeout(() => {
      const el = document.getElementById('vietnam-terrain-search-input');
      if (el instanceof HTMLInputElement) {
        el.focus();
      }
    }, 80);
  };

  return (
    <header className="fixed top-4 left-4 right-4 md:left-6 md:right-6 z-30 pointer-events-none flex items-center justify-between gap-3">
      {/* Left: Brand Logo & Subtitle */}
      <button
        type="button"
        onClick={() => {
          if (!hasStarted) startExploration();
          setRegion('all');
        }}
        className="pointer-events-auto flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-terrain-surface/90 dark:bg-[#17221F]/90 backdrop-blur-md border border-terrain-border dark:border-[#253530] shadow-atlas hover:border-terrain-accent/50 transition-all text-left"
      >
        <div className="w-7 h-7 rounded-xl bg-terrain-accent text-white flex items-center justify-center shrink-0">
          <Mountain className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs md:text-sm font-semibold tracking-tight text-terrain-text dark:text-white leading-none">
            Vietnam Terrain
          </div>
          <div className="hidden sm:block text-[10px] text-terrain-muted mt-0.5">
            Khám phá địa hình 3D Việt Nam
          </div>
        </div>
      </button>

      {/* Center / Right Navigation Pill */}
      <nav className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-2xl bg-terrain-surface/90 dark:bg-[#17221F]/90 backdrop-blur-md border border-terrain-border dark:border-[#253530] shadow-atlas">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (!hasStarted) startExploration();
                setActiveTab(item.id);
              }}
              className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                isActive
                  ? 'bg-terrain-accent text-white shadow-sm'
                  : 'text-terrain-muted hover:text-terrain-text dark:text-[#A3B5AD] dark:hover:text-white hover:bg-terrain-bg/70 dark:hover:bg-[#22312C]'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
              {typeof item.badge === 'number' && item.badge > 0 && (
                <span
                  className={`ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-semibold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-terrain-accent/15 text-terrain-accent dark:text-[#7BC4AE]'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        <div className="w-px h-4 bg-terrain-border dark:bg-[#253530] mx-0.5" />

        {/* Search Trigger Button */}
        <button
          type="button"
          onClick={handleFocusSearch}
          aria-label="Tìm kiếm địa điểm"
          title="Tìm kiếm địa điểm"
          className="p-1.5 rounded-xl text-terrain-muted hover:text-terrain-text dark:hover:text-white transition-colors"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Dark / Light Cartographic Theme Toggle */}
        <button
          type="button"
          onClick={toggleDarkUI}
          aria-label={isDarkUI ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
          title={isDarkUI ? 'Giao diện sáng' : 'Giao diện tối'}
          className="p-1.5 rounded-xl text-terrain-muted hover:text-terrain-text dark:hover:text-white transition-colors"
        >
          {isDarkUI ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </nav>
    </header>
  );
}
