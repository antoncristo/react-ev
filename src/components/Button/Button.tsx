import React, { type ButtonHTMLAttributes, type ReactNode } from 'react';

import * as Styled from './Button.styled';

export interface ButtonProps {
	onClick: () => void;
	children: ReactNode;
	htmlAttributes?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Button = (props: ButtonProps) => {
	const { children, onClick, htmlAttributes } = props;
	return (
		<Styled.Button onClick={onClick} {...htmlAttributes}>
			{children}
		</Styled.Button>
	);
};
