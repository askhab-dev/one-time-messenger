'use client';

import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export const ThemeProvider = (params: ThemeProviderProps) => {
  const { children, ...props } = params;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
