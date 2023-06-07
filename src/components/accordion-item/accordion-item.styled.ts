import styled, { css, keyframes } from 'styled-components';

export const AccordionItem = styled.div`
	box-sizing: border-box;
	width: 100%;
`;

export const AccordionKey = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	width: 100%;
	padding: 6px;
	margin-bottom: 12px;

	border-radius: ${({ theme }) => theme.decorators.borderRadius};
	box-shadow: ${({ theme }) => theme.decorators.boxShadow};

	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

export const ChevronDirection = styled.div<{ isCollapsed: boolean }>`
	box-sizing: border-box;
	height: 24px;
	transform: rotateZ(${({ isCollapsed }) => (isCollapsed ? 0 : 180)}deg);
`;

const appear = (height: number | undefined) => keyframes`
	0%{
		opacity: 0;
		height: 0;
	}
	70%{
		height: ${height}px;
	}
	100%{
		opacity: 1;
	}
`;

export const Children = styled.div<{ isVisible: boolean; height: number | undefined }>`
	box-sizing: border-box;

	${({ isVisible }) =>
		isVisible
			? css`
					display: block;
			  `
			: css`
					display: none;
			  `}

	width: 100%;
	padding: 6px;

	border-radius: ${({ theme }) => theme.decorators.borderRadius};
	box-shadow: ${({ theme }) => theme.decorators.boxShadow};

	animation-name: ${({ height }) => height && appear(height)};
	animation-duration: 0.4s;
	animation-timing-function: linear;
`;
