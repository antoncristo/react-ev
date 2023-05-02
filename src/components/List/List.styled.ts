import styled from 'styled-components';

export const List = styled.ul<{ gap: string; height: string }>`
	list-style: none;
	padding: 0;
	margin: 0;
	padding-inline-end: 10px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: fit-content;
	overflow-y: auto;

	gap: ${({ gap }) => gap};
	height: ${({ height }) => height};

	> li {
		padding: 0;
		margin: 0;
	}
`;

export const EndReachedMarker = styled.div`
	height: 0.5px;
	width: 100%;
`;
