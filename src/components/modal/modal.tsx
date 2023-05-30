import React, { type Dispatch, type SetStateAction, type ReactNode } from 'react';

import { Backdrop } from '../backdrop';

import * as Styled from './modal.styled';

export interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	backdropColor?: string;
}

export const Modal = (props: ModalProps) => {
	const { isOpen, setIsOpen, children, backdropColor } = props;

	return isOpen ? (
		<>
			<Backdrop bgc={backdropColor} />
			<Styled.Modal data-testid='modal_test_id'>{children}</Styled.Modal>
		</>
	) : null;
};
