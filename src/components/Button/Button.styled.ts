import styled from 'styled-components';

export const Button = styled.button`
	cursor: pointer;
	border: none;
	border-radius: 6px;
	margin: 0;
	padding: 6px 12px;
	color: ${({ theme }) => theme.palette.base.white};
	background-color: ${({ theme }) => theme.palette.base.black};
	font-family: ${({ theme }) => theme.typography.fontFamily};

	:hover {
		color: ${({ theme }) => theme.palette.base.black};
		background-color: ${({ theme }) => theme.palette.base.white};
	}

	:focus {
		outline: 2px solid ${({ theme }) => theme.palette.base.black};
	}
`;
