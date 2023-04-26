import '@testing-library/jest-dom';
import React, { type ReactNode } from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ReactEVThemeProvider } from '../../src/style';

export const customRender = (ui: ReactNode) =>
	render(<ReactEVThemeProvider>{ui}</ReactEVThemeProvider>);