import React, {
	useRef,
	type HTMLAttributes,
	type MouseEventHandler,
	type ReactNode,
	useLayoutEffect,
	useState,
	cloneElement
} from 'react';
import { ChevronCircleIcon } from 'src/assets';

import { Colors } from 'src/style/colors';
import * as Styled from './accordion-item.styled';

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
	const childrenRef = useRef<
		HTMLDivElement & { getClientHeight: () => number | undefined }
	>(null);
	const clonedChildren = cloneElement(children, { ref: childrenRef });
	const [childrenHeight, setChildrenHeight] = useState<number | undefined>(undefined);

	useLayoutEffect(() => {
		if (childrenRef.current) {
			setChildrenHeight(childrenRef.current.clientHeight);
		}
	}, [childrenRef]);

	return (
		<Styled.AccordionItem data-testid='accordion_item_test_id' {...rest}>
			<Styled.AccordionKey onClick={onKeyClick}>
				{accordionKey}
				<Styled.ChevronDirection isCollapsed={isCollapsed}>
					<ChevronCircleIcon fill={chevronColor} width={24} height={24} />
				</Styled.ChevronDirection>
			</Styled.AccordionKey>
			{isCollapsed ? null : (
				<Styled.Children height={childrenHeight}>{clonedChildren}</Styled.Children>
			)}
		</Styled.AccordionItem>
	);
};
