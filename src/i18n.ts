import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { defaultLocale } from './lib/i18n'

i18next
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `./locales/{{lng}}.json`
    },
    react: {
      useSuspense: false
    },
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    preload: [defaultLocale],
    keySeparator: false,
    interpolation: { escapeValue: false }
  })

export default i18next
