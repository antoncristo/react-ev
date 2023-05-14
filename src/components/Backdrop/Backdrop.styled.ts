import styled from 'styled-components';

export const Backdrop = styled.div<{ bgc?: string }>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;

	background-color: ${({ theme, bgc }) => bgc ?? theme.palette.base.grey};
	backdrop-filter: blur(10px);
	opacity: 0.6;
`;
