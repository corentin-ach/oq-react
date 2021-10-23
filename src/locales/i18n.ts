import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './en/translationEN.json';

const resources = {
  en: {
    translation,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['translation'],
  resources,
});

export default resources;
