export type PaletteTriangle =
	| 'primary-light'
	| 'primary-dark'
	| 'secondary-light'
	| 'secondary-dark'
	| 'ternary';

export const triadicPalette: Record<PaletteTriangle, string> = {
	'primary-light': 'rgba(255, 255, 255, 1)',
	'primary-dark': 'rgba(0, 0, 0, 0.86)',
	'secondary-light': 'rgba(0, 0, 0, 0.86)',
	'secondary-dark': 'rgba(255, 255, 255, 1)',
	ternary: 'rgba(0, 0, 0, 0.3)'
};
