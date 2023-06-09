import styled, { css } from 'styled-components';

export const Input = styled.input<{ isValid: boolean }>`
	box-sizing: border-box;
	width: fit-content;
	height: fit-content;
	min-width: 0;

	margin: 0;
	padding: 6px 12px;

	border: none;
	border-radius: ${({ theme }) => theme.decorators.borderRadius};

	${({ isValid, theme }) => css`
		border: 2px solid ${isValid ? 'transparent' : theme.palette.base.error};
	`}

	:focus {
		outline: none;
		filter: drop-shadow(0px 0px 1px ${({ theme }) => theme.palette.base.black});
	}
`;
