import React from 'react';

import * as Styled from './Backdrop.styled';

export interface BackdropProps {
	color?: string;
	opacity: string;
}

export const Backdrop = ({ color, opacity }: BackdropProps) => (
	<Styled.Backdrop color={color} opacity={opacity} />
);
