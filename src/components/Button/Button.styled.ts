import styled from 'styled-components';

export const Button = styled.button`
	cursor: pointer;
	border: none;
	border-radius: 6px;
	margin: 0;
	padding: 6px 8px;
	font-weight: 600;
	color: ${({ theme }) => theme.palette.base.primary};
	background-color: ${({ theme }) => theme.palette.base.secondary};

	:hover {
		box-shadow: -3px 0px 16px -2px ${({ theme }) => theme.palette.base.ternary};
	}
`;
