import React, { type ReactNode } from 'react';

import { Backdrop } from '../backdrop';

import * as Styled from './modal.styled';

export interface ModalProps {
	children: ReactNode;
	isOpen: boolean;
	backdropColor?: string;
}

/**
 * @description a top level, fixed container (z-index 201)
 * @param children the content of the modal, any element
 * @param isOpen the state that represents the visibility of the of the modal
 * @param backdropColor (optional) the color of the backdrop behind the modal
 */
export const Modal = (props: ModalProps) => {
	const { isOpen, children, backdropColor } = props;

	return isOpen ? (
		<>
			<Backdrop bgc={backdropColor} />
			<Styled.Modal data-testid='modal_test_id'>{children}</Styled.Modal>
		</>
	) : null;
};
