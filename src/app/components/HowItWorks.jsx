// app/components/HowItWorks.jsx
'use client';

import { motion } from 'framer-motion';
import ShinyBorder from './ShinyBorder';
import { fadeIn } from '@/utils/motion';

export default function HowItWorks() {
  const steps = [
    {
      icon: '💬',
      title: "Ask your question",
      description: "Which altcoins are trending with positive sentiment today?",
      color: "from-[#9D00FF] to-[#39FF14]"
    },
    {
      icon: '🔍',
      title: "AI scans live data",
      description: "GPT + Sentiment + Prices + Events",
      color: "from-[#39FF14] to-[#9D00FF]"
    },
    {
      icon: '🚀',
      title: "You get instant insights",
      description: "Clear, actionable, backed by data",
      color: "from-[#9D00FF] to-[#39FF14]"
    }
  ];

  return (
    <motion.section initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} className="py-14 md:py-24 bg-grid overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 glow-text font-orbitron">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-6 glow-box"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Step indicator line */}
            {/* <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-[#9D00FF] to-[#39FF14] z-0 hidden md:block"></div> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-stretch">
              {steps?.map((step, index) => (
                <motion.div
                  key={index}
                  className="h-full"
                  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                  viewport={{ once: true }}
                >
                  <ShinyBorder>
                    <div className="h-full px-5 py-6 bg-gray-900/80 backdrop-blur-sm rounded-lg flex flex-col items-center  justify-center">
                      <div className="text-[#39FF14] text-3xl mb-4">{step?.icon}</div>
                      <h3 className="text-[19px] lg:text-[21px] relative z-[100] font-[800] mb-3 text-[#9D00FF] ">{step?.title}</h3>
                      <p className="text-[15px] lg:text-base text-center text-[#EDEDED]">{step?.description}</p>
                    </div>
                  </ShinyBorder>

                  {/* Step number */}
                  {/* <div className="mt-4 w-10 h-10 rounded-full bg-neon-green flex items-center justify-center text-black font-bold font-orbitron text-lg">
                    {index + 1}
                  </div> */}

                  {/* Mobile connector */}
                  {/* {index < steps.length - 1 && (
                    <div className="md:hidden w-1 h-10 bg-gradient-to-b from-[#9D00FF] to-[#39FF14] my-4"></div>
                  )} */}
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}