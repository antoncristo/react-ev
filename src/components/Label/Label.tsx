import React, { type HTMLAttributes } from 'react';

import { TextField, type TextFieldProps } from '../TextField';

import * as Styled from './Label.styled';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
	label: string;
	htmlFor?: string;
	textConfig?: Omit<TextFieldProps, 'children'>;
}

export const Label = (props: LabelProps) => {
	const { label, htmlFor, textConfig } = props;

	return (
		<Styled.Label data-testid='label_test_id' htmlFor={htmlFor}>
			<TextField {...textConfig}>{label}</TextField>
		</Styled.Label>
	);
};