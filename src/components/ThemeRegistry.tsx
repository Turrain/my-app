'use client';
import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import theme from './theme';
import { Button } from '@mui/joy';


export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'joy' }}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
     
        {children}
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
