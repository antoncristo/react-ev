import React, {
	type ButtonHTMLAttributes,
	type ReactNode,
	type MouseEventHandler
} from 'react';

import * as Styled from './button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
}

export const Button = (props: ButtonProps) => {
	const { children, onClick, ...rest } = props;
	return (
		<Styled.Button data-testid='button_test_id' onClick={onClick} {...rest}>
			{children}
		</Styled.Button>
	);
};
