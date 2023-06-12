import React, { type InputHTMLAttributes } from 'react';

import { type InputVariants } from './input.types';

import * as Styled from './input.styled';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	type: InputVariants;
	isValid?: boolean;
}

/**
 * @description a restricted type text input
 * @param type text types are 'text' | 'email' | 'password'
 * @param htmlAttributes standard html input attributes
 */
export const Input = (props: InputProps) => {
	const { type, isValid = true, ...rest } = props;

	return (
		<Styled.Input data-testid='input_test_id' type={type} isValid={isValid} {...rest} />
	);
};
