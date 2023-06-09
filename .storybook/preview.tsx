import React from 'react';
import type { Preview } from '@storybook/react';

import { ReactEVThemeProvider } from '../src/style';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	},
	decorators: [
		Story => (
			<ReactEVThemeProvider>
				<Story />
			</ReactEVThemeProvider>
		)
	]
};

export default preview;
