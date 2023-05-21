import 'styled-components';
import { type ReactEVDefaultTheme } from './default-theme';

declare module 'styled-components' {
	export interface DefaultTheme extends ReactEVDefaultTheme {}
}
