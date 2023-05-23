import styled from 'styled-components';

export const AccordionItem = styled.div`
	box-sizing: border-box;

	width: 100%;
	height: fit-content;
`;

export const AccordionKey = styled.div`
	box-sizing: border-box;

	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	width: 100%;
	height: fit-content;
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

export const Children = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: fit-content;
	padding: 6px;

	border-radius: ${({ theme }) => theme.decorators.borderRadius};
	box-shadow: ${({ theme }) => theme.decorators.boxShadow};
`;
