// app/components/WhatIsQueryQuant.jsx
'use client';

import { motion } from 'framer-motion';
import ShinyBorder from './ShinyBorder';
import SoftShinyBorder from './SoftShinyBorder';
import { fadeIn } from '@/utils/motion';

export default function WhatIsQueryQuant() {
  const bulletPoints = [
    {
      icon: '📊',
      title: 'No dashboards, just answers',
      description: 'Get straight to the insights without complex interfaces'
    },
    {
      icon: '💰',
      title: 'Crypto & stock support',
      description: 'Covering both cryptocurrency and traditional markets'
    },
    {
      icon: '🔌',
      title: 'Real API integrations',
      description: 'Connected to live market data sources'
    },
    {
      icon: '🧠',
      title: 'Multi-source smart insights',
      description: 'Combining data from multiple sources for comprehensive analysis'
    }
  ];

  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-black via-[#9D00FF]/5 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 glow-text-purple font-orbitron">
              What is QueryQuant?
            </h2>
            <div className="w-24 h-1 bg-[#9D00FF] mx-auto mb-6 glow-box-purple"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base md:text-xl text-[#EDEDED] mb-8 font-inter">
                QueryQuant is a freeform AI research tool that lets you ask
                anything about the market — from real-time trends, sentiment
                analysis, token metrics, to stock events — in plain language.
              </p>

              <div className="flex flex-col gap-4">
                {bulletPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    variants={fadeIn("up", "spring", index * 0.5, 1)}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.5, type: "spring", duration: 1 }}
                  >
                    <SoftShinyBorder>
                      <div className="flex items-start">
                        <div className="text-xl mr-4 text-neon-green">{point.icon}</div>
                        <div>
                          <h3 className="text-[15px] md:text-base font-medium text-white font-orbitron">{point.title}</h3>

                        </div>
                      </div>
                    </SoftShinyBorder>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 relative z-10">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-neon-green mb-2">$ QueryQuant: analyze ETH performance next month</div>
                    <div className="text-gray-400">Processing natural language query...</div>
                  </div>
                </div>

                <div className="h-48 bg-gradient-to-br from-[#9D00FF]/10 to-[#39FF14]/10 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📊</div>
                    <p className="text-[#EDEDED] font-inter">Real-time market visualization</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-neon-purple/20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-neon-green/20 blur-xl animate-ping"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}