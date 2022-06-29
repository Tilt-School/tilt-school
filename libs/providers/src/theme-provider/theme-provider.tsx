import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { theme } from '@tilt-school/styles';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
}
