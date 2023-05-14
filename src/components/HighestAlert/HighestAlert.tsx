import React from 'react';

import * as Styled from './HighestAlert.styled';
import { Backdrop } from '../Backdrop';

export interface HighestAlertProps {
	text: string;
	isVisible: boolean;
	onClearHandler: () => void;
	maxWidth?: string;
}

export const HighestAlert = (props: HighestAlertProps) => (
	<>
		<Styled.AlertBox>
			<Styled.HighestAlert>Alert</Styled.HighestAlert>
		</Styled.AlertBox>
		<Backdrop />
	</>
);
