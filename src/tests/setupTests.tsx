import '@testing-library/jest-dom';
import React, { type ReactNode } from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { ReactEVThemeProvider } from '../../src/style';

const MockIntersectionObserver = vi.fn(() => ({
	disconnect: vi.fn(),
	observe: vi.fn()
}));
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);

export const customRender = (ui: ReactNode) =>
	render(<ReactEVThemeProvider>{ui}</ReactEVThemeProvider>);
