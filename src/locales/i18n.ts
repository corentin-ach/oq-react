import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationFR from './fr/translationFR.json';
import translationEN from './fr/translationEN.json';

const resources = {
  fr: {
    translation: translationFR,
  },
  en: {
    translation: translationEN,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'fr',
  resources,
});

export default i18n;
