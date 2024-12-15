import React from 'react';
import { ChevronRight, Shield, Car, Wrench, Sun } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { motion } from 'framer-motion';

const Hero = () => {
  const t = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const serviceIconsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8
      }
    }
  };

  const iconVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i < 2 ? -50 : 50
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background video or image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=890dfef3b2ba1e8d509c6b9de4a4b2e7fbcd7d42&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black dark:from-black/80 dark:via-black/90 dark:to-black transition-colors duration-300"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          {t.hero.title}
          <motion.span 
            variants={itemVariants}
            className="block text-[#10B981]"
          >
            {t.hero.subtitle}
          </motion.span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
        >
          {t.hero.description}
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToServices}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 bg-[#10B981] text-white px-8 py-3 rounded-full hover:bg-[#0EA975] transition-all"
          >
            {t.hero.cta}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Service Icons */}
        <motion.div 
          variants={serviceIconsVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { Icon: Shield, title: t.hero.services.ppf.title, description: t.hero.services.ppf.description },
            { Icon: Car, title: t.hero.services.tinting.title, description: t.hero.services.tinting.description },
            { Icon: Wrench, title: t.hero.services.chrome.title, description: t.hero.services.chrome.description },
            { Icon: Sun, title: t.hero.services.lights.title, description: t.hero.services.lights.description }
          ].map((service, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={iconVariants}
              className="flex flex-col items-center text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="p-4 rounded-full bg-white/5 group-hover:bg-[#10B981]/20 transition-colors"
              >
                <service.Icon className="w-8 h-8 text-[#10B981]" />
              </motion.div>
              <h3 className="mt-4 text-white font-semibold">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;