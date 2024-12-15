import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const testimonials = [
  {
    name: 'Markus Andersson',
    text: 'MajorkaSweden took my car to the next level—flawless finish! The PPF installation was perfect.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100'
  },
  {
    name: 'Isabella Vikström',
    text: 'The chrome delete was perfect. My Tesla looks sleek and sporty. Exceptional service!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100'
  },
  {
    name: 'Johan Lindgren',
    text: 'Top-notch PPF application. The paint still looks brand new after months. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100'
  }
];

const Testimonials = () => {
  const t = useTranslation();

  return (
    <section className="bg-gray-100 dark:bg-black py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{t.testimonials.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1C1C1C] rounded-lg p-8 hover:bg-gray-50 dark:hover:bg-[#242424] transition-colors shadow-lg dark:shadow-none"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-gray-900 dark:text-white font-semibold transition-colors duration-300">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#10B981] fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;