import React, { type ReactNode } from 'react';

import { Backdrop } from '../backdrop';

import * as Styled from './modal.styled';

export interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	backdropColor?: string;
}

export const Modal = (props: ModalProps) => {
	const { isOpen, children, backdropColor } = props;

	return isOpen ? (
		<>
			<Backdrop bgc={backdropColor} />
			<Styled.Modal data-testid='modal_test_id'>{children}</Styled.Modal>
		</>
	) : null;
};
