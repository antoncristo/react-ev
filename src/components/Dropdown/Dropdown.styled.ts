import styled from 'styled-components';

export const Dropdown = styled.div`
	position: relative;
`;

export const Dropper = styled.div`
	cursor: default;
	width: fit-content;

	:hover {
		opacity: 0.8;
	}
`;

export const AbsoluteDropdown = styled.div`
	box-sizing: border-box;
	position: absolute;
	width: fit-content;
	box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.palette.base.grey};
`;
