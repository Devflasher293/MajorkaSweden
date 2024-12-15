import React from 'react';
import { Car } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const t = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Car className="h-6 w-6 text-[#10B981]" />
            <span className="ml-2 text-white font-bold">MajorkaSweden</span>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© {currentYear} Laurent Gashi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;