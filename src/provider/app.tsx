import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
