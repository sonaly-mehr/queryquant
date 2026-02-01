'use client';

import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import logo from '../../../public/assets/logo.webp'
import Image from 'next/image';

const Particle = ({ color, size, position, delay }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0.1, 0.6, 0.1],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 3 + Math.random() * 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`absolute rounded-full ${color === 'green' ? 'bg-neon-green' : 'bg-neon-purple'}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position.x}%`,
        top: `${position.y}%`,
        filter: 'blur(2px)',
        boxShadow: `0 0 ${size * 2}px ${size}px ${color === 'green' ? 'rgba(57, 255, 20, 0.2)' : 'rgba(157, 0, 255, 0.2)'}`
      }}
      variants={variants}
      initial="hidden"
      animate="visible"
    />
  );
};


export default function Hero() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState([]);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const newParticles = [];
    const particleCount = 30;
    const colors = ['green', 'purple'];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2, // Between 2-6px
        position: {
          x: Math.random() * 100,
          y: Math.random() * 100
        },
        delay: Math.random() * 2
      });
    }

    setParticles(newParticles);
  }, []);

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
    <header className='relative'>
      <motion.div
        className="absolute -top-4 md:-top-3.5 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <Image
            src={logo}
            alt="QueryQuant Logo"
            width={170}
            height={40}
            className="filter w-[130px] md:w-[170px] h-auto drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]"
          />
          {/* Subtle glow effect around logo */}
          <div className="absolute inset-0 bg-neon-green rounded-lg blur-md opacity-20 -z-10 animate-pulse"></div>
        </div>
      </motion.div>

      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
          >
            <source src="/assets/hero-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
        </div>

        {/* Particle system */}
        <div className="absolute inset-0 z-10">
          {particles.map((particle) => (
            <Particle
              key={particle.id}
              color={particle.color}
              size={particle.size}
              position={particle.position}
              delay={particle.delay}
            />
          ))}
        </div>

        {/* Large floating elements */}
        <div className="absolute top-16 md:top-20 left-[35%] md:left-[43%] w-5 h-5 md:w-8 md:h-8 rounded-full bg-neon-purple animate-pulse glow-box-purple z-10"></div>
        <div className="absolute bottom-40 right-20 w-6 h-6 rounded-full bg-neon-green animate-pulse glow-box z-10"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-white animate-pulse z-10"></div>

        {/* Additional large floating elements */}
        <div className="absolute top-1/4 left-1/4 w-10 h-10 rounded-full bg-neon-green animate-pulse glow-box z-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 rounded-full bg-neon-purple animate-pulse glow-box-purple z-10"></div>
        <div className="absolute top-2/3 left-2/3 w-6 h-6 rounded-full bg-neon-green animate-pulse glow-box z-10"></div>

        <div className="container mx-auto px-4 z-10 relative pt-0 md:pt-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="block text-neon-green mt-2 animate-pulse">Where Real-Time Market Data Meets AI Intelligence</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#EDEDED] mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Your AI-powered assistant for crypto and stock insights
              — just ask and get real-time, data-driven answers.
            </motion.p>

            <motion.div
              className="max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-grow px-5 py-3 text-[15px] rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#39FF14] focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={!email || !consentGiven || isLoading}
                    className={`relative px-8 py-3 font-bold rounded-lg transition-all duration-300 hover:scale-105 transform overflow-hidden ${(!email || !consentGiven)
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-[#39FF14] text-black cursor-pointer hover:bg-[#2ce70f]'
                      }`}
                  >
                    <span className="relative z-10">
                      {isLoading ? 'Joining...' : 'Join Waitlist'}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine" />
                  </button>
                </div>

                <div className="flex  justify-center w-[90%] mx-auto">
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
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}