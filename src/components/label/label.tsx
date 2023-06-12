import React, { type HTMLAttributes } from 'react';

import { TextField, type TextFieldProps } from '../text-field';

import * as Styled from './label.styled';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
	label: string;
	htmlFor?: string;
	textConfig?: Omit<TextFieldProps, 'children'>;
}

/**
 * @description a label with configurable text style
 * @param label the text of the label
 * @param htmlFor the id of the label to be synced with an input
 * @param textConfig configure the label text style, see TextFieldProps
 *
 */
export const Label = (props: LabelProps) => {
	const { label, htmlFor, textConfig } = props;

	return (
		<Styled.Label data-testid='label_test_id' htmlFor={htmlFor}>
			<TextField {...textConfig}>{label}</TextField>
		</Styled.Label>
	);
};
