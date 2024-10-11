import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

import { theme } from '@/utils/theme';
type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
