import React, {
	useRef,
	type HTMLAttributes,
	type MouseEventHandler,
	type ReactNode,
	cloneElement
} from 'react';

import * as Styled from './accordion-item.styled';
import { ChevronCircleIcon } from 'src/assets';
import { Colors } from 'src/style/colors';

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
	children: JSX.Element;
	isCollapsed: boolean;
	onKeyClick: MouseEventHandler;
	accordionKey: ReactNode;
	chevronColor?: string;
}

export const AccordionItem = (props: AccordionItemProps) => {
	const {
		children,
		isCollapsed,
		onKeyClick,
		accordionKey,
		chevronColor = Colors.BLACK,
		...rest
	} = props;

	return (
		<Styled.AccordionItem data-testid='accordion_item_test_id' {...rest}>
			<Styled.AccordionKey onClick={onKeyClick}>
				{accordionKey}
				<Styled.ChevronDirection isCollapsed={isCollapsed}>
					<ChevronCircleIcon fill={chevronColor} width={24} height={24} />
				</Styled.ChevronDirection>
			</Styled.AccordionKey>
			{isCollapsed ? null : <Styled.Children>{children}</Styled.Children>}
		</Styled.AccordionItem>
	);
};
