import styled from 'styled-components';

export const Checkbox = styled.div<{ borderColor?: string }>`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;

	width: fit-content;
	height: fit-content;
	padding: 1px;
	background-color: transparent;

	border: 1px solid ${({ theme, borderColor }) => borderColor ?? theme.palette.base.black};
	border-radius: 2px;

	:hover {
		filter: drop-shadow(0px 0px 1px ${({ theme }) => theme.palette.base.black});
	}

	:focus {
		outline: none;
		filter: drop-shadow(0px 0px 1px ${({ theme }) => theme.palette.base.black});
	}
`;

export const IconWrapper = styled.label<{
	isVisible: boolean;
	width: string;
	backgroundColor?: string;
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

	width: ${({ width }) => width};
	height: ${({ width }) => width};
	background-color: ${({ theme, backgroundColor }) =>
		backgroundColor ?? theme.palette.base.black};
	border-radius: 2px;

	:hover {
		opacity: 1;
		cursor: pointer;
	}
`;
