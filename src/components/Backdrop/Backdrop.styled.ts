import styled from 'styled-components';

export const Backdrop = styled.div<{ color?: string; opacity?: string }>`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 0;

	background-color: ${({ color, theme }) => color ?? theme.palette.base.grey};
	filter: blur(10px) opacity(${({ opacity }) => opacity ?? 0.3});
`;
