/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';
import { type AlertVariant } from './Alert.types';
import { TextField } from '../TextField';
import { Button } from '../Button';

export const Alert = styled.div<{ borderColor: AlertVariant }>`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 201;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	color: ${({ theme }) => theme.palette.base.black};
	background-color: transparent;

	button {
		border: 2px solid transparent;
		:hover {
			background-color: transparent;
			border: 2px solid
				${({ theme, borderColor }) =>
					borderColor === 'default' ? 'transparent' : theme.palette.base[borderColor]};
		}
	}
`;

export const AlertTextBox = styled.div<{ borderColor: AlertVariant }>`
	box-sizing: border-box;

	max-width: 90vw;
	min-width: 300px;
	max-height: 90vh;
	padding: 8px 12px;

	background-color: ${({ theme }) => theme.palette.base.black};
	color: ${({ theme }) => theme.palette.base.white};

	border: 2px solid
		${({ theme, borderColor }) =>
			borderColor === 'default' ? 'transparent' : theme.palette.base[borderColor]};
	border-radius: ${({ theme }) => theme.decorators.borderRadius};
	box-shadow: ${({ theme }) => theme.decorators.boxShadow};

	animation: pop 0.2s ease-in;
	@keyframes pop {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
`;

export const Title = styled(TextField)<{ textColor: AlertVariant }>`
	margin-bottom: 12px;

	text-decoration: underline;
	text-decoration-color: ${({ theme, textColor }) =>
		textColor === 'default' ? 'transparent' : theme.palette.base[textColor]};
`;

export const ClearButton = styled(Button)<{ width: string }>`
	display: flex;
	justify-content: center;

	width: ${({ width }) => width};
	margin-top: 12px;

	background-color: transparent;
	color: ${({ theme }) => theme.palette.base.black};
`;
