import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { locales } from './i18nLocal'

i18next
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `./locales/{{lng}}.json`
    },
    whitelist: Object.keys(locales),
    react: {
      useSuspense: false
    },
    // lng: defaultLocale,
    fallbackLng: "en",
    // preload: [defaultLocale],
    keySeparator: false,
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      // 查找函数映射
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      checkWhitelist: true,
      checkForSimilarInWhitelist: true, // 启用相似性检查以处理 zh-CN 和 zh_CN 之间的映射
    }
  })

export default i18next
