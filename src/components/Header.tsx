import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Services', 'About', 'Contact'];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-[#8D6E63] to-[#FFD700] bg-clip-text text-transparent">
              AppDost 2.0
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#5D4037] hover:text-[#8D6E63] transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          <motion.button
            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-[#8D6E63] to-[#A0826D] text-white rounded-full font-medium hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(141, 110, 99, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>

          <button
            className="md:hidden text-[#5D4037]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#5D4037] hover:text-[#8D6E63] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="px-6 py-2.5 bg-gradient-to-r from-[#8D6E63] to-[#A0826D] text-white rounded-full font-medium w-full">
              Get in Touch
            </button>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
