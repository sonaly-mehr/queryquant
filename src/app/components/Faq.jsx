'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need trading experience to use it?",
      answer: "No. If you can ask a question, you can use QueryQuant."
    },
    {
      question: "Is it free?",
      answer: "Yes. Core version is free — premium features coming soon."
    },
    {
      question: "What markets are supported?",
      answer: "Crypto, US stocks, market news — more on the way"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-14 md:py-24 overflow-x-hidden bg-gradient-to-b from-black via-[#9D00FF]/10 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 glow-text-purple font-orbitron">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#9D00FF] mx-auto mb-6 glow-box-purple"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="border-b border-gray-800 pb-6"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group"
                >
                  <h3 className="text-xl font-bold text-[#EDEDED] group-hover:text-neon-green transition-colors duration-300 font-orbitron">
                    {faq.question}
                  </h3>
                  <div className="ml-4">
                    {activeIndex === index ? (
                      <div className="text-neon-purple text-2xl">−</div>
                    ) : (
                      <div className="text-gray-400 group-hover:text-neon-green text-2xl">+</div>
                    )}
                  </div>
                </button>
                
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pl-2 text-[#EDEDED] font-inter"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}