import React, { useState, useRef, useEffect } from 'react';
import { Settings as SettingsIcon, Sun, Moon, Languages } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Settings"
      >
        <SettingsIcon className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-[#10B981] dark:hover:text-[#10B981] transition-colors" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50"
          >
            {/* Theme Toggle */}
            <div className="px-4 py-2">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Theme</div>
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-gray-700 dark:text-gray-300">
                  {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </span>
                {theme === 'dark' ? (
                  <Moon className="w-4 h-4 text-[#10B981]" />
                ) : (
                  <Sun className="w-4 h-4 text-[#10B981]" />
                )}
              </button>
            </div>

            {/* Language Selection */}
            <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Language</div>
              <div className="space-y-1">
                <button
                  onClick={() => setLanguage('en')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    language === 'en' ? 'text-[#10B981]' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span>English</span>
                  {language === 'en' && <Languages className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setLanguage('sv')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    language === 'sv' ? 'text-[#10B981]' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <span>Svenska</span>
                  {language === 'sv' && <Languages className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Settings;