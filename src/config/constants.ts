export const IS_BROWSER = typeof window !== 'undefined';
export const IS_SERVER = typeof window === 'undefined';

export const IS_DEVELOPMENT =
  process.env.NODE_ENV === 'development' &&
  process.env.APP_ENV === 'development';
export const IS_TEST =
  process.env.NODE_ENV === 'test' || process.env.APP_ENV === 'test';
export const IS_PRODUCTION =
  process.env.NODE_ENV === 'production' && process.env.APP_ENV === 'production';
