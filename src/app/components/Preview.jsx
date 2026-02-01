'use client';

import { motion } from 'framer-motion';
export default function Preview() {
  return (
    <motion.section className="py-16 bg-black overflow-hidden" initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}>
      <div className="container mx-auto px-4">
        <motion.div
          className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Animated Preview Placeholder */}
          {/* <div className="relative aspect-video bg-gradient-to-br from-[#9D00FF]/10 to-[#39FF14]/10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-[#EDEDED] mb-2">Live Market Insights</h3>
              <p className="text-[#9D00FF]">Animated preview coming soon</p>
            </div> */}

          {/* Animated elements */}
          {/* <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-[#9D00FF]/20 animate-pulse blur-xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-[#39FF14]/20 animate-pulse blur-xl"></div>
          </div> */}

          <div className="">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-80 sm:h-full object-cover"
            >
              <source src="/assets/product-vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/70"></div> */}
          </div>

          <div className="p-6">
            <div className="font-mono text-sm">
              <div className="mb-4">
                <span className="text-[#39FF14]">$ </span>
                <span className="text-white">analyze BTC trend next week</span>
              </div>
              <div className="ml-4">
                <div className="text-[#9D00FF] animate-pulse">Analyzing Bitcoin...</div>
                <div className="mt-2">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">▲</span>
                    <span>Based on current patterns, BTC shows 78% bullish sentiment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}