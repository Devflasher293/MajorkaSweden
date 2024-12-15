import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';

const Timeline = () => {
  const t = useTranslation();

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#10B981]/20"></div>
      <div className="space-y-12">
        {t.about.timeline.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="md:w-1/2"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#10B981]"></div>
            </div>
            <div className="md:w-1/2 bg-gray-800/80 dark:bg-black/30 p-6 rounded-lg border border-gray-700/20 dark:border-white/10 shadow-lg">
              <span className="text-[#10B981] font-bold">{event.year}</span>
              <h4 className="text-gray-900 dark:text-white text-xl font-semibold mt-2 transition-colors duration-300">{event.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;