import React, { type ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { type ReactEVDefaultTheme, defaultTheme } from './default-theme';

export interface ReactEVThemeProviderProps {
	children: ReactNode;
	theme?: ReactEVDefaultTheme;
}

export const ReactEVThemeProvider = ({
	children,
	theme = defaultTheme
}: ReactEVThemeProviderProps) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
