import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { uaMessages, enGBMessages } from './messages';

const supportedLngs = ['uk-UA', 'en-GB'];
const preferredLng = 'uk-UA';
const resources = {
  'uk-UA': {
    translation: uaMessages,
  },
  'en-GB': {
    translation: enGBMessages,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: preferredLng,
  fallbackLng: preferredLng,
  supportedLngs,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
