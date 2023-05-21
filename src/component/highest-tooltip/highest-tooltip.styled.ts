import styled, { css, keyframes } from 'styled-components';

const MAX_WIDTH = '300px';

export const Tooltip = styled.div<{
	position: 'start' | 'end';
	justifyContent: 'flex-start' | 'center' | 'flex-end';
}>`
	box-sizing: border-box;
	position: fixed;
	z-index: 200;
	top: 0;
	bottom: 0;
	padding: 20px;
	width: fit-content;
	max-width: ${MAX_WIDTH};
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: ${({ justifyContent }) => justifyContent};

	color: ${({ theme }) => theme.palette.base.white};
	background-color: ${({ theme }) => theme.palette.base.black};
	box-shadow: 0 30px 40px ${({ theme }) => theme.palette.base.grey};

	${({ position }) =>
		position === 'start'
			? css`
					left: 0;
					border-radius: 0 6px 6px 0;
					animation-name: ${slideIn(position)};
					animation-duration: 0.23s;
					animation-timing-function: linear;
			  `
			: css`
					right: 0;
					border-radius: 6px 0 0 6px;
					animation-name: ${slideIn(position)};
					animation-duration: 0.6s;
					animation-timing-function: ease-in;
			  `}
`;

const slideIn = (position: 'start' | 'end') =>
	position === 'start'
		? keyframes`
				0%{
					left: -${MAX_WIDTH};
				}
				100%{
					left:0;
				}
			`
		: keyframes`
				0%{
					right: -${MAX_WIDTH};
				}
				100%{
					right:0;
				}
			`;
