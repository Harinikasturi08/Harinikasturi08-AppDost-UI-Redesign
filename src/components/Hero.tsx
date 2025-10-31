import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Palette, Cloud, Zap, Code } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'We Build Digital Experiences That Inspire.';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const floatingIcons = [
    { Icon: Smartphone, delay: 0, position: 'top-20 left-10' },
    { Icon: Globe, delay: 0.2, position: 'top-40 right-20' },
    { Icon: Palette, delay: 0.4, position: 'bottom-32 left-20' },
    { Icon: Cloud, delay: 0.6, position: 'bottom-20 right-10' },
    { Icon: Zap, delay: 0.8, position: 'top-1/3 right-1/4' },
    { Icon: Code, delay: 1.0, position: 'bottom-1/3 left-1/4' },
  ];

  return (
    <section className="relative min-h-screen bg-[#FAF7F2] flex items-center justify-center overflow-hidden pt-20">
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.15,
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { delay, duration: 0.5 },
            scale: { delay, duration: 0.5 },
            y: {
              delay: delay + 0.5,
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <Icon size={80} className="text-[#8D6E63]" />
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-[#5D4037] mb-6 min-h-[140px] md:min-h-[180px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity }}
            className="text-[#FFD700]"
          >
            |
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-[#8D6E63] mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Delivering modern, scalable, and creative digital solutions.
        </motion.p>

        <motion.button
          className="px-10 py-4 bg-gradient-to-r from-[#8D6E63] to-[#A0826D] text-white rounded-full text-lg font-semibold hover:shadow-2xl transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 20px 40px rgba(141, 110, 99, 0.4)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Work
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#8D6E63] rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#8D6E63] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
