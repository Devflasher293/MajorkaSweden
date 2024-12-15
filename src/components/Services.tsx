import React from 'react';
import { Shield, Wrench, Sun } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Services = () => {
  const t = useTranslation();

  return (
    <section id="services" className="bg-gray-50 dark:bg-black py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{t.services.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Shield className="w-12 h-12" />}
            title={t.services.ppf.title}
            description={t.services.ppf.description}
            features={t.services.ppf.features}
          />
          <ServiceCard
            icon={<Wrench className="w-12 h-12" />}
            title={t.services.chrome.title}
            description={t.services.chrome.description}
            features={t.services.chrome.features}
          />
          <ServiceCard
            icon={<Sun className="w-12 h-12" />}
            title={t.services.tinting.title}
            description={t.services.tinting.description}
            features={t.services.tinting.features}
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description, features }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}) => (
  <div className="bg-white dark:bg-black/50 rounded-lg p-8 hover:bg-gray-50 dark:hover:bg-black/70 transition-colors duration-300 shadow-lg dark:shadow-none">
    <div className="mb-6 text-[#10B981]">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700 dark:text-gray-300 transition-colors duration-300">
          <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full mr-2"></span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default Services;