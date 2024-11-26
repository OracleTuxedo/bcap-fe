export const IS_BROWSER = typeof window !== 'undefined';
export const IS_SERVER = typeof window === 'undefined';

export const IS_DEVELOPMENT =
  process.env.NODE_ENV === 'development' &&
  process.env.APP_ENV === 'development';

export const IS_TEST =
  process.env.NODE_ENV === 'test' || process.env.APP_ENV === 'test';

export const IS_PRODUCTION =
  process.env.NODE_ENV === 'production' &&
  process.env.APP_ENV === 'production';

export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export const NEXT_PUBLIC_SECRET_KEY = process.env
  .NEXT_PUBLIC_SECRET_KEY as string;
