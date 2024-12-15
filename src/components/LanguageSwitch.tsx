import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${
          language === 'en'
            ? 'bg-[#10B981] text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('sv')}
        className={`px-2 py-1 rounded ${
          language === 'sv'
            ? 'bg-[#10B981] text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        SV
      </button>
    </div>
  );
};

export default LanguageSwitch;