import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Wrench } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const Stats = () => {
  const t = useTranslation();

  const icons = [
    { Icon: Shield, color: 'text-[#10B981]' },
    { Icon: Award, color: 'text-[#10B981]' },
    { Icon: Users, color: 'text-[#10B981]' },
    { Icon: Wrench, color: 'text-[#10B981]' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {t.about.stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-[#10B981]/10 rounded-full">
            {React.createElement(icons[index].Icon, {
              className: `w-8 h-8 ${icons[index].color}`
            })}
          </div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="block text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors
            duration-300"
          >
            {stat.value}
          </motion.span>
          <span className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;