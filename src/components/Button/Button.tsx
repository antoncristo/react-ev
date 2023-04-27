import React, {
	type ButtonHTMLAttributes,
	type ReactNode,
	type MouseEventHandler
} from 'react';

import * as Styled from './Button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick: MouseEventHandler<HTMLButtonElement>;
	children: ReactNode;
}

export const Button = (props: ButtonProps) => {
	const { children, onClick, ...rest } = props;
	return (
		<Styled.Button onClick={onClick} {...rest}>
			{children}
		</Styled.Button>
	);
};
