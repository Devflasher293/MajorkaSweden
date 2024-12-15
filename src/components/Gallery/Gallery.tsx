import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { galleryData } from './galleryData';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const t = useTranslation();

  return (
    <section id="gallery" className="bg-gray-100 dark:bg-[#1C1C1C] py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{t.gallery.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item, index) => (
            <GalleryItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;