import 'styled-components';

export type BaseColor = 'primary' | 'secondary' | 'ternary';

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			base: Record<BaseColor, string>;
			custom?: Record<string, string>;
		};
	}
}
