import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  de: { translation: {} },
  en: { translation: {} },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: process.env.NODE_ENV === 'development',
    detection: { order: ['navigator'] },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
    load: 'languageOnly',
    resources,
  });

export default i18n;
