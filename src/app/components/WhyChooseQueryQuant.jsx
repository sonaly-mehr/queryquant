
'use client';

import { motion } from 'framer-motion';

export default function WhyChooseQueryQuant() {
  const benefits = [
    "Ask in natural language – no charts needed",
    "Real-time market data",
    "AI summarization and recommendations",
    "Built for speed and simplicity",
    "Discover trends & signals you'd miss manually"
  ];

  return (
    <section className="py-14  md:py-24 bg-grid overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 glow-text font-orbitron">
            Why Choose QueryQuant?
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-6 glow-box"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="relative"
              >
                <div className="relative rounded-lg p-[2px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#39FF14] to-transparent animate-shine bg-[length:200%_auto] z-0"></div>
                  <div className="relative z-10 bg-gray-900/80 backdrop-blur-sm rounded-[inherit] p-6 h-full">
                    <div className="flex items-start">
                      <div className="text-[#9D00FF] text-2xl mr-4">✓</div>
                      <p className="text-[#EDEDED] text-[17px] font-inter font-medium">{benefit}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}