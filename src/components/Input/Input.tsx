import React, { type InputHTMLAttributes } from 'react';

import { type InputVariants } from './Input.types';

import * as Styled from './Input.styled';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	type: InputVariants;
	isValid?: boolean;
}

export const Input = (props: InputProps) => {
	const { type, isValid = true, ...rest } = props;

	return (
		<Styled.Input data-testid='input_test_id' type={type} isValid={isValid} {...rest} />
	);
};
