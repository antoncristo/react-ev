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
	background-color: transparent;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

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

export const AlertBox = styled.div<{ borderColor: AlertVariant }>`
	box-sizing: border-box;
	max-width: 90vw;
	max-height: 90vh;
	background-color: ${({ theme }) => theme.palette.base.white};
	padding: 8px 12px;

	border: 2px solid
		${({ theme, borderColor }) =>
			borderColor === 'default' ? 'transparent' : theme.palette.base[borderColor]};
	border-radius: 6px;
	box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.palette.base.grey};
`;

export const Title = styled(TextField)<{ textColor: AlertVariant }>`
	margin-bottom: 12px;
	color: ${({ theme }) => theme.palette.base.white};
	text-shadow: 1px 1px ${({ theme }) => theme.palette.base.black};
	text-decoration: underline;
	text-decoration-color: ${({ theme, textColor }) =>
		textColor === 'default' ? 'transparent' : theme.palette.base[textColor]};
`;

export const ClearButton = styled(Button)<{ width: string }>`
	display: flex;
	justify-content: center;
	width: ${({ width }) => width};
	margin-top: 12px;

	text-shadow: 1px 1px ${({ theme }) => theme.palette.base.black};
	background-color: transparent;
`;
