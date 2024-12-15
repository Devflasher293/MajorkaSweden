import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { motion } from 'framer-motion';
import Stats from './Stats';
import Timeline from './Timeline';
import TeamMember from './TeamMember';

const About = () => {
  const t = useTranslation();

  return (
    <section id="about" className="bg-gray-50 dark:bg-black py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
          >
            {t.about.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300"
          >
            {t.about.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Premium Automotive Styling
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
              At MajorkaSweden, we combine passion for automobiles with precision craftsmanship. Our commitment to excellence ensures your vehicle receives the highest quality care and attention to detail.
            </p>
            <Stats />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80"
              alt="Premium Car Service"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>

        <div className="mb-24">
          <Timeline />
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            {t.about.team.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 transition-colors duration-300">
            {t.about.team.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TeamMember
              name="Edik Karimov"
              role={t.about.team.roles.ppfSpecialist}
              expertise={[
                t.about.team.expertise.ppfExpert,
                t.about.team.expertise.advancedInstallation,
                t.about.team.expertise.qualityControl,
                t.about.team.expertise.customerConsultation
              ]}
            />
            <TeamMember
              name="Ansar Karimov"
              role={t.about.team.roles.cofounder}
              expertise={[
                t.about.team.expertise.chromeDelete,
                t.about.team.expertise.windowTinting,
                t.about.team.expertise.technicalOperations,
                t.about.team.expertise.projectManagement
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;