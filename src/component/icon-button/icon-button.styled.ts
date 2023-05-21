import styled from 'styled-components';

export const IconButtonContainer = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const Gap = styled.div<{ width: string }>`
	order: 2;
	width: ${({ width }) => width};
`;

export const OrderedItem = styled.div<{ order: number }>`
	order: ${({ order }) => order};
`;
