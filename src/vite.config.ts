/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({
	test: {
		name: 'ui-unit-tests',
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/tests/setupTests.tsx',
		css: {
			include: /.+/
		}
	}
});
