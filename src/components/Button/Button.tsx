import React from 'react';

import * as Styled from './Button.styled';

export interface ButtonProps {
	label: string;
}

export const Button = (props: ButtonProps) => (
	<Styled.Button>{props.label}</Styled.Button>
);
