import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { createBooking } from '../../utils/supabase';
import toast, { Toaster } from 'react-hot-toast';
import { Car, Calendar, Clock, Send } from 'lucide-react';

const BookingForm = () => {
  const t = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    carModel: '',
    date: new Date(),
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.carModel) {
        throw new Error('Please fill in all required fields');
      }

      await createBooking(formData);
      
      toast.success(t.contact.successMessage, {
        style: {
          background: '#10B981',
          color: '#fff'
        }
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        carModel: '',
        date: new Date(),
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(t.contact.errorMessage, {
        style: {
          background: '#EF4444',
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-[#10B981]/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] transition-colors";
  const labelClasses = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

  return (
    <div className="max-w-3xl mx-auto">
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelClasses}>{t.contact.form.name}</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>{t.contact.form.email}</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelClasses}>{t.contact.form.phone}</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>{t.contact.form.service}</label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">{t.contact.form.selectService}</option>
              <option value="ppf">Paint Protection Film (PPF)</option>
              <option value="chrome">Chrome Delete</option>
              <option value="tinting">Window Tinting</option>
              <option value="lights">Light Tinting</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelClasses}>{t.contact.form.carModel}</label>
            <div className="relative">
              <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="carModel"
                required
                value={formData.carModel}
                onChange={handleChange}
                className={`${inputClasses} pl-12`}
                placeholder="e.g., Tesla Model 3"
              />
            </div>
          </div>
          <div>
            <label className={labelClasses}>{t.contact.form.preferredDate}</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
              <DatePicker
                selected={formData.date}
                onChange={(date: Date) => setFormData({ ...formData, date })}
                minDate={new Date()}
                className={`${inputClasses} pl-12`}
              />
            </div>
          </div>
        </div>

        <div>
          <label className={labelClasses}>{t.contact.form.message}</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div className="text-center">
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#10B981] text-white font-medium text-lg hover:bg-[#0EA975] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#10B981] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? (
              <>
                <Clock className="animate-spin -ml-1 mr-3 h-5 w-5" />
                {t.contact.form.submitting}
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                {t.contact.form.submit}
              </>
            )}
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;