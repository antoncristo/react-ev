import React, { type Dispatch, type SetStateAction } from 'react';

import { Backdrop } from '../backdrop';
import { TextField, type TextFieldProps } from '../text-field';
import { type AlertVariant } from './alert.types';

import * as Styled from './alert.styled';

export const DEFAULT_MAX_WIDTH = '300px';

export interface AlertProps {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	variant: AlertVariant;
	text: string;
	title?: string;
	backdropColor?: string;
	textConfig?: Omit<TextFieldProps, 'children'>;
}

/**
 * @description
 * Top level, fixed, alert popup
 *
 * @param isOpen represents the visibility state
 * @param setIsOpen a boolean toggler that control the visibility state
 * @param variant alert coloring - success\error\warning\default (depends on theme base
		colors)
 * @param text alert's text, the message that is being rendered
 * @param title (optional) the title of the popup
 * @param textConfig (optional) inner text props, allows a modification of the message text style (see TextField props)
 * @param backdropColor (optional) set the color of the viewport background
 */
export const Alert = (props: AlertProps) => {
	const {
		isOpen,
		setIsOpen,
		variant = 'default',
		text,
		title,
		textConfig = { maxWidth: DEFAULT_MAX_WIDTH, numberOfLines: 30 },
		backdropColor
	} = props;

	const _maxWidth = textConfig.maxWidth ?? DEFAULT_MAX_WIDTH;

	const isOpenHandler = () => {
		setIsOpen(prev => !prev);
	};

	return isOpen ? (
		<>
			<Backdrop bgc={backdropColor} />
			<Styled.Alert data-testid='alert_test_id' borderColor={variant}>
				{title ? (
					<Styled.Title
						data-testid='alert_title_test_id'
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
				<Styled.ClearButton
					data-testid='alert_button_test_id'
					width={_maxWidth}
					onClick={isOpenHandler}
				>
					<TextField fontWeight='bold'>{'OK'.toUpperCase()}</TextField>
				</Styled.ClearButton>
			</Styled.Alert>
		</>
	) : null;
};
