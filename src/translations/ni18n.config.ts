import LanguageDetector from 'i18next-browser-languagedetector';
import ChainedBackend from 'i18next-chained-backend';
import HttpBackend from 'i18next-http-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import type { Ni18nOptions } from 'ni18n';

import { IS_BROWSER, IS_DEVELOPMENT } from '@/config/constants';

export const ni18nConfig: Ni18nOptions = {
  supportedLngs: ['id', 'en'],
  fallbackLng: 'en',
  ns: ['common', 'home', 'notification', 'master', 'menu'],
  use: IS_BROWSER ? [ChainedBackend, LanguageDetector] : undefined,
  interpolation: {
    escapeValue: false,
  },
  debug: IS_DEVELOPMENT,
  backend: IS_BROWSER
    ? {
        backends: [LocalStorageBackend, HttpBackend],
        backendOptions: [
          {
            expirationTime: 12 * 60 * 60 * 1000,
          },
          {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
          },
        ],
      }
    : undefined,
};
