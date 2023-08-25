import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { locales, browserLangToLocaleKey } from './i18nLocal'

const customDetector = {
  name: 'customDetector',
  lookup() {
    const detectedLang = navigator.language;
    return browserLangToLocaleKey(detectedLang);
  }
};

const languageDetectorCls = new LanguageDetector();
languageDetectorCls.addDetector(customDetector);

i18next
  .use(XHR)
  .use(languageDetectorCls)
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
      order: ['customDetector', 'querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      // 查找函数映射
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      checkWhitelist: true,
      // 启用相似性检查以处理 zh-CN 和 zh_CN 之间的映射
      checkForSimilarInWhitelist: true,
    }
  })

export default i18next
