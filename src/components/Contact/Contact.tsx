import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import BookingForm from './BookingForm';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const Contact = () => {
  const t = useTranslation();
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <section id="contact" className="relative bg-gray-50 dark:bg-[#0C0C0C] py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        {/* Centered contact cards */}
        <div className="flex flex-col items-center mb-16 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-[#1C1C1C] p-8 rounded-2xl shadow-lg dark:shadow-[#10B981]/5 transition-all duration-300 border border-transparent dark:border-[#10B981]/10"
            >
              <div className="bg-[#10B981]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Phone className="w-8 h-8 text-[#10B981]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 text-center">{t.contact.phone}</h3>
              <a 
                href="tel:+46739168985" 
                className="text-gray-600 dark:text-gray-400 hover:text-[#10B981] dark:hover:text-[#10B981] transition-colors block text-center"
              >
                +46 73-916 89 85
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-[#1C1C1C] p-8 rounded-2xl shadow-lg dark:shadow-[#10B981]/5 transition-all duration-300 border border-transparent dark:border-[#10B981]/10"
            >
              <div className="bg-[#10B981]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <MapPin className="w-8 h-8 text-[#10B981]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 text-center">{t.contact.address}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Olofström, Sweden
              </p>
            </motion.div>
          </div>

          <motion.button
            onClick={toggleForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#10B981] text-white font-medium text-lg hover:bg-[#0EA975] transition-all"
          >
            {isFormVisible ? (
              <>
                Hide Booking Form
                <ChevronUp className="ml-2 w-5 h-5" />
              </>
            ) : (
              <>
                Book Appointment
                <ChevronDown className="ml-2 w-5 h-5" />
              </>
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {isFormVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: 20 }}
                className="bg-white dark:bg-[#1C1C1C] rounded-2xl shadow-lg dark:shadow-[#10B981]/5 p-8 md:p-12 transition-all duration-300 border border-transparent dark:border-[#10B981]/10"
              >
                <BookingForm />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;