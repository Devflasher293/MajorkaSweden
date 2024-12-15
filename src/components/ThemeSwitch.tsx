import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-gray-400 hover:text-[#10B981] transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600 hover:text-[#10B981] transition-colors" />
      )}
    </button>
  );
};

export default ThemeSwitch;