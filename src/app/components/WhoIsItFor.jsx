'use client';

import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';

export default function WhoIsItFor() {
  const targetAudience = [
    "Crypto traders",
    "Stock investors",
    "News-driven researchers",
    "Curious minds who want smarter insights"
  ];

  return (
    <motion.section initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}  className="py-14 md:py-24 bg-gradient-to-b from-black via-[#9D00FF]/10 to-black overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 glow-text-purple font-orbitron">
            Who is it for?
          </h2>
          <div className="w-24 h-1 bg-[#9D00FF] mx-auto mb-6 glow-box-purple"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9D00FF]/10 to-[#39FF14]/10 z-0"></div>
                <div className="absolute inset-0 bg-grid z-0"></div>
                <div className="relative z-10 p-10 h-full flex flex-col justify-center">
                  <div className="text-5xl mb-6">👥</div>
                  <h3 className="text-2xl font-bold mb-4 font-orbitron text-[#9D00FF]">Designed For Market Enthusiasts</h3>
                  <p className="text-[#EDEDED] font-inter">
                    QueryQuant is built for anyone who needs fast, accurate market insights without the complexity.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-5 md:space-y-6">
                {targetAudience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, }}
                                        whileInView={{ opacity: 1, }}
                                        variants={fadeIn("up", "spring", index * 0.5, 1)}
                    className="relative px-4 py-3 md:px-6 md:py-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-neon-purple transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="text-neon-green text-xl mr-4 mt-1">•</div>
                      <p className="text-lg md:text-xl text-[#EDEDED] font-inter">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}