import React, { type ReactNode } from 'react';
import { ThemeProvider, type DefaultTheme } from 'styled-components';

import { defaultTheme } from './defaultTheme';

export interface ReactEVThemeProviderProps {
	children: ReactNode;
	theme?: DefaultTheme;
}

export const ReactEVThemeProvider = ({
	children,
	theme = defaultTheme
}: ReactEVThemeProviderProps) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
