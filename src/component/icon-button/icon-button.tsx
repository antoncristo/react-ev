import React, { type ButtonHTMLAttributes, type MouseEventHandler } from 'react';
import { Button } from 'src/components/Button';

import * as Styled from './icon-button.styled';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: JSX.Element;
	onClick: MouseEventHandler<HTMLButtonElement>;
	text?: string;
	gap?: string;
	iconPosition?: 'start' | 'end';
}

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
