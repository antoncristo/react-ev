import React, { type ButtonHTMLAttributes, type MouseEventHandler } from 'react';
import { Button } from 'src/components/button';

import * as Styled from './icon-button.styled';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: JSX.Element;
	onClick: MouseEventHandler<HTMLButtonElement>;
	text?: string;
	gap?: string;
	iconPosition?: 'start' | 'end';
}

/**
 * @description a button component with a text (optional) and and an icon
 * @param icon an icon element ogf the button
 * @param onClick MouseEventHandler
 * @param text (optional) the text of the button
 * @param iconPosition (optional) allows to place the icon at the start or at the end of the text
 * @param gap (optional) defines the spacing between the text and the icon
 */
export const IconButton = (props: IconButtonProps) => {
	const { text, icon, onClick, iconPosition = 'end', gap, ...rest } = props;

	return (
		<Button data-testid='icon_button_test_id' onClick={onClick} {...rest}>
			<Styled.IconButtonContainer>
				<Styled.OrderedItem order={iconPosition === 'start' ? 3 : 1}>
					{text}
				</Styled.OrderedItem>
				<Styled.Gap width={gap ?? '0'} />
				<Styled.OrderedItem order={iconPosition === 'start' ? 1 : 3}>
					{icon}
				</Styled.OrderedItem>
			</Styled.IconButtonContainer>
		</Button>
	);
};
