import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './locales/fr.json';
import en from './locales/en.json';

i18n.use(initReactI18next)
  .init({
  resources: {
    fr: { translation: fr },
    en: { translation: en }
  },
  lng: 'fr', // langue par défaut
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  missingKeyHandler: function(lng, ns, key, fallbackValue) {
    console.warn(`Missing translation key: ${key} for language: ${lng}`);
  }
});
