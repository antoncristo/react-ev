import React, {
	type ButtonHTMLAttributes,
	type ReactNode,
	type MouseEventHandler
} from 'react';

import { BUTTON_TEST_ID } from './Button.test';

import * as Styled from './Button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
}

export const Button = (props: ButtonProps) => {
	const { children, onClick, ...rest } = props;
	return (
		<Styled.Button data-testid={BUTTON_TEST_ID} onClick={onClick} {...rest}>
			{children}
		</Styled.Button>
	);
};
