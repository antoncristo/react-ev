import styled from 'styled-components';
import { type Resize } from './text-area.types';

export const TextArea = styled.textarea<{ resize: Resize }>`
	box-sizing: border-box;

	margin: 0;
	padding: 6px 12px;

	border: none;
	border-radius: ${({ theme }) => theme.decorators.borderRadius};

	resize: ${({ resize }) => resize};

	:focus {
		outline: none;
		filter: drop-shadow(0px 0px 1px ${({ theme }) => theme.palette.base.black});
	}
`;
