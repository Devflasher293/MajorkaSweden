import React, { useState, useEffect } from 'react';
import { Car, Menu, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import Settings from './Settings/Settings';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Car className="h-8 w-8 text-[#10B981]" />
            <span className={`ml-2 text-xl font-bold transition-colors ${
              scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`}>
              MajorkaSweden
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-baseline space-x-8">
              {['home', 'services', 'gallery', 'about', 'contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  variants={linkVariants}
                  whileHover="hover"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-gray-600 dark:text-gray-300 hover:text-[#10B981] dark:hover:text-[#10B981]'
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {t.nav[item]}
                </motion.a>
              ))}
            </div>
            <Settings />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Settings />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors ${
                scrolled
                  ? 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-black/95 backdrop-blur-md">
              {['home', 'services', 'gallery', 'about', 'contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  variants={linkVariants}
                  whileHover="hover"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-[#10B981] dark:hover:text-[#10B981] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav[item]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;