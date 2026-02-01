'use client';

import { motion } from 'framer-motion';

export default function SoftShinyBorder({ children, className = "" }) {
    return (
        <div className={`relative rounded-lg overflow-hidden ${className}`}>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#39FF14]/20 to-transparent animate-soft-shine bg-[length:200%_auto] z-0"></div>

            {/* Content */}
            <div className="relative z-10 bg-gray-900/50 backdrop-blur-sm rounded-[inherit] py-3 px-4">
                {children}
            </div>
        </div>
    );
}