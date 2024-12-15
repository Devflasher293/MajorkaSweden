import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  return translations[language];
};