import 'styled-components';
import { type ReactEVDefaultTheme } from './defaultTheme';

declare module 'styled-components' {
	export interface DefaultTheme extends ReactEVDefaultTheme {}
}
