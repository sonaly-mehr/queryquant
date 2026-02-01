'use client';

import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import ShinyBorder from './ShinyBorder';

const features = [
  {
    icon: '🔍',
    title: 'Natural Language Analysis',
    description: 'Analyze tokens, coins, and stocks using simple natural language queries'
  },
  {
    icon: '🧠',
    title: 'AI-Generated Insights',
    description: 'Get intelligent analysis from news, price charts, and trading volume'
  },
  {
    icon: '⚙️',
    title: 'Powerful Technology',
    description: 'Built with GPT and real-time market data for accurate predictions'
  },
  {
    icon: '🚀',
    title: 'Pattern Detection',
    description: 'Scan for technical patterns, candle formations, and market sentiment'
  }
];

export default function ProductOverview() {
  return (
    <motion.section className="py-24 bg-grid overflow-hidden" 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}>
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-20"
        
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text-purple" 
          initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        >
            Your smart AI assistant for the markets.
          </motion.h2>
          <div className="w-24 h-1 bg-[#9D00FF] mx-auto mb-6 glow-box-purple"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                >
                  <ShinyBorder>
                <div className="h-full px-5 py-6 bg-gray-900/80 backdrop-blur-sm rounded-lg">
                  <div className="text-[#39FF14] text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-[19px] lg:text-xl relative z-[100] font-bold mb-3 text-[#9D00FF] glow-text-purple">{feature.title}</h3>
                  <p className="text-[15px] lg:text-base text-[#EDEDED]">{feature.description}</p>
                </div>
              </ShinyBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}