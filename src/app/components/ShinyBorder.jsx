'use client';

import { motion } from 'framer-motion';

export default function ShinyBorder({ children }) {
  return (
    <div className="relative rounded-lg p-[1px] overflow-hidden h-full">
      {/* Shiny border */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9D00FF] to-transparent animate-shine bg-[length:200%_auto] z-0"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#39FF14] rounded-lg blur-sm opacity-20 animate-pulse z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full rounded-[inherit]">
        {children}
      </div>
    </div>
  );
}