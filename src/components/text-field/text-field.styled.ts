import styled from 'styled-components';

export const TextField = styled.p<{
	maxWidth?: string;
	fontSize?: string;
	fontWeight?: string;
	lineHeight?: string;
	numberOfLines?: number;
}>`
	box-sizing: border-box;
	margin: 0;
	width: 100%;
	max-width: ${({ maxWidth }) => maxWidth};
	font-family: ${({ theme }) => theme.typography.fontFamily};
	font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
	font-size: ${({ fontSize, theme }) => fontSize ?? theme.typography.fontSize};
	line-height: ${({ lineHeight, theme }) => lineHeight ?? 1.1};
	text-align: start;

	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: ${({ numberOfLines }) => numberOfLines};
	-webkit-box-orient: vertical;
`;
