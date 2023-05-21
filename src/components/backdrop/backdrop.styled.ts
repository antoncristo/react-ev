import styled from 'styled-components';

export const Backdrop = styled.div<{ bgc?: string }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 200;

	background-color: ${({ theme, bgc }) => bgc ?? theme.palette.base.white};
	filter: blur(100px) opacity(0.9);
`;
