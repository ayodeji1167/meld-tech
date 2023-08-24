import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { HelmetProvider } from 'react-helmet-async';

type AppProviderProps = {
  children: ReactNode;
};
export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      <HelmetProvider>{children} </HelmetProvider>
    </ThemeProvider>
  );
}
