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
	z-index: 1;

	width: fit-content;

	box-shadow: ${({ theme }) => theme.decorators.boxShadow};
`;
