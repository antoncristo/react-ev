import styled from 'styled-components';

export const Button = styled.button`
	cursor: pointer;
	font-family: ${({ theme }) => theme.typography.fontFamily};
	margin: 0;

	border: none;
	border-radius: ${({ theme }) => theme.decorators.borderRadius};
	padding: 6px 12px;

	color: ${({ theme }) => theme.palette.base.white};
	background-color: ${({ theme }) => theme.palette.base.black};

	:hover {
		color: ${({ theme }) => theme.palette.base.black};
		background-color: ${({ theme }) => theme.palette.base.white};
	}

	:focus {
		outline: 2px solid ${({ theme }) => theme.palette.base.black};
	}
`;
