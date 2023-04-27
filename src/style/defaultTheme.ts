export type BaseColor = 'primary' | 'secondary' | 'ternary';

export interface ReactEVDefaultTheme {
	palette: {
		base: Record<BaseColor, string>;
		custom?: Record<string, string>;
	};
}

export const defaultTheme: ReactEVDefaultTheme = {
	palette: {
		base: {
			primary: 'white',
			secondary: 'black',
			ternary: 'grey'
		}
	}
};
