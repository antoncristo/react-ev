import { Colors } from './colors';

export type BaseColor =
	| 'primary'
	| 'secondary'
	| 'ternary'
	| 'black'
	| 'white'
	| 'grey'
	| 'error'
	| 'warning'
	| 'success';

export type FontWeight = 'normal' | 'bold';
export interface Typography {
	fontFamily: string;
	fontWeight: FontWeight;
	fontSize: string;
	lineHeight: string;
}

export interface ReactEVDefaultTheme {
	palette: {
		base: Record<BaseColor, string>;
		custom?: Record<string, string>;
	};
	typography: Typography;
}

export const defaultTheme: ReactEVDefaultTheme = {
	palette: {
		base: {
			primary: Colors.PRIMARY,
			secondary: Colors.SECONDARY,
			ternary: Colors.TERNARY,
			black: Colors.BLACK,
			white: Colors.WHITE,
			grey: Colors.GREY,
			error: Colors.ERROR,
			warning: Colors.WARNING,
			success: Colors.SUCCESS
		}
	},
	typography: {
		fontFamily: 'inherit',
		fontWeight: 'bold',
		fontSize: '1rem',
		lineHeight: '1.2rem'
	}
};
