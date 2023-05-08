import styled from 'styled-components';

export const TextField = styled.p<{
	maxWidth?: string;
	fontSize?: string;
	fontWeight?: string;
	lineHeight?: string;
	numberOfLines?: number;
}>`
	margin: 0;
	width: fit-content;
	max-width: ${({ maxWidth }) => maxWidth};
	font-family: ${({ theme }) => theme.typography.fontFamily};
	font-weight: ${({ fontWeight }) => fontWeight};
	font-size: ${({ fontSize, theme }) => fontSize ?? theme.typography.fontSize};
	line-height: ${({ lineHeight, theme }) => lineHeight ?? theme.typography.fontSize};
	text-align: start;

	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: ${({ numberOfLines }) => numberOfLines};
	-webkit-box-orient: vertical;
`;
