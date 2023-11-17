"use client"
import * as React from 'react';
import { ThemeProvider as NextThemeProvidr } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider ({children, ...props}: ThemeProviderProps){
    return <NextThemeProvidr {...props}>{children}</NextThemeProvidr>
}