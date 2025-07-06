"use client" 

import * as React from "react"
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
 
export interface AnimatedTabsProps {
  tabs: { label: string; href?: string; onClick?: () => void }[];
  className?: string;
}
 
export function AnimatedTabs({ tabs, className }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
 
  useEffect(() => {
    const container = containerRef.current;
 
    if (container && activeTab) {
      const activeTabElement = activeTabRef.current;
 
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;
 
        const clipLeft = offsetLeft + 16;
        const clipRight = offsetLeft + offsetWidth + 16;
 
        container.style.clipPath = `inset(0 ${Number(
          100 - (clipRight / container.offsetWidth) * 100,
        ).toFixed()}% 0 ${Number(
          (clipLeft / container.offsetWidth) * 100,
        ).toFixed()}% round 17px)`;
      }
    }
  }, [activeTab]);
 
  return (
    <div className={cn("relative bg-white/10 backdrop-blur-md border border-white/20 mx-auto flex w-fit flex-col items-center rounded-full py-2 px-4", className)}>
      <div
        ref={containerRef}
        className="absolute z-10 w-full overflow-hidden [clip-path:inset(0px_75%_0px_0%_round_17px)] [transition:clip-path_0.25s_ease]"
      >
        <div className="relative flex w-full justify-center bg-gradient-to-r from-blue-600 to-indigo-600">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(tab.label);
                tab.onClick?.();
              }}
              className="flex h-10 items-center rounded-full px-4 py-2 text-sm font-medium text-white"
              tabIndex={-1}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
 
      <div className="relative flex w-full justify-center">
        {tabs.map(({ label, onClick }, index) => {
          const isActive = activeTab === label;
 
          return (
            <button
              key={index}
              ref={isActive ? activeTabRef : null}
              onClick={() => {
                setActiveTab(label);
                onClick?.();
              }}
              className="flex h-10 items-center cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}