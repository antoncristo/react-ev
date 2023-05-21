import React from 'react';

import { Backdrop } from '../backdrop';
import { TextField, type TextFieldProps } from '../text-field';
import { type AlertVariant } from './alert.types';

import * as Styled from './alert.styled';

export const DEFAULT_MAX_WIDTH = '300px';

export interface AlertProps {
	variant: AlertVariant;
	text: string;
	title?: string;
	backdropColor?: string;
	textConfig?: Omit<TextFieldProps, 'children'>;
}

export const Alert = (props: AlertProps) => {
	const {
		backdropColor,
		text,
		title,
		textConfig = { maxWidth: DEFAULT_MAX_WIDTH, numberOfLines: 30 },
		variant = 'default'
	} = props;

	const _maxWidth = textConfig.maxWidth ?? DEFAULT_MAX_WIDTH;

	return (
		<>
			<Backdrop bgc={backdropColor} />
			<Styled.Alert data-testid='alert_test_id' borderColor={variant}>
				{title ? (
					<Styled.Title
						maxWidth={_maxWidth}
						fontWeight='bold'
						fontSize='1.2rem'
						textColor={variant}
					>
						{title}
					</Styled.Title>
				) : null}
				<Styled.AlertTextBox borderColor={variant}>
					<TextField {...textConfig} style={{ boxSizing: 'border-box' }}>
						{text}
					</TextField>
				</Styled.AlertTextBox>
				<Styled.ClearButton width={_maxWidth} onClick={() => null}>
					<TextField fontWeight='bold'>{'OK'.toUpperCase()}</TextField>
				</Styled.ClearButton>
			</Styled.Alert>
		</>
	);
};
