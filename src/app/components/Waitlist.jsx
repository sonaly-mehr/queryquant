'use client';

import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useState } from 'react';
import { navVariants } from '@/utils/motion';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!consentGiven) {
      toast.error('Please agree to receive emails');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          consent: consentGiven
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('You\'ve been added to the waitlist!');
        setEmail('');
        setConsentGiven(false);
      } else {
        toast.error(data.error || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section className="py-14 md:py-24 bg-gradient-to-b overflow-x-hidden from-black via-[#9D00FF]/10 to-black" initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 variants={navVariants} className="text-3xl sm:text-4xl font-bold mb-6 glow-text">
            Get a Live Demo of QueryQuant
          </motion.h2>
          <p className="text-lg text-[#EDEDED] mb-12 max-w-2xl mx-auto">
            Ask any question in natural language and get real-time market analysis. Register now to secure your spot for the demo
          </p>

          <motion.div
            className="max-w-md mx-auto"

          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
                className="flex-grow px-5 py-3 text-[15px] rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent"
                required
              />
              <motion.div initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}>
                <button
                  type="submit"
                  disabled={!email || !consentGiven || isLoading}

                  className={`${(!email || !consentGiven)
                    ? 'cursor-not-allowed' : 'cursor-pointer'} btn-shine relative px-8 py-3 bg-[#39FF14] text-black font-bold rounded-lg transition-all duration-300 hover:bg-[#2ce70f] hover:scale-105 transform overflow-hidden`}
                >
                  <span className="relative z-10">{isLoading ? 'Joining...' : 'Join the Waitlist'}</span>
                </button>
              </motion.div>
            </form>

            <div className="flex  justify-center w-[90%] mx-auto my-5 ">
              <input
                type="checkbox"
                id="email-consent"
                checked={consentGiven}
                onChange={(e) => setConsentGiven(e.target.checked)}
                className=" w-5 h-5 bg-gray-800 border border-gray-700 rounded focus:ring-neon-green text-neon-green"
                required
              />
              <label htmlFor="email-consent" className="text-xs  text-[#EDEDED] font-inter">
                I agree to receive emails from QueryQuant and understand I
                can unsubscribe at any time.
              </label>
            </div>

            <p className="text-xs text-gray-500 font-inter">
              Your information is subject to our <a href="/privacy-policy" className="text-neon-green hover:underline">Privacy Policy</a> and <a href="/terms-of-use" className="text-neon-green hover:underline">Terms of Use</a>.
            </p>
            <p className="mt-4 text-[#9D00FF] text-sm animate-pulse">
              Free demo – Limited to the first 100 registrants
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}