import React, {
	useRef,
	type HTMLAttributes,
	type ReactNode,
	type Dispatch,
	type SetStateAction,
	useLayoutEffect,
	useState,
	cloneElement
} from 'react';
import { ChevronCircleIcon } from 'src/assets';

import { Colors } from 'src/style/colors';
import * as Styled from './accordion-item.styled';

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
	children: JSX.Element;
	accordionKey: ReactNode;
	isCollapsed?: boolean;
	setIsCollapsed?: Dispatch<SetStateAction<boolean>>;
	chevronColor?: string;
}

export const AccordionItem = (props: AccordionItemProps) => {
	const {
		children,
		isCollapsed,
		setIsCollapsed,
		accordionKey,
		chevronColor = Colors.BLACK,
		...rest
	} = props;

	const [innerIsCollapsed, setInnerISCollapsed] = useState(true);
	const isControlledCollapse = isCollapsed && setIsCollapsed;

	const childrenRef = useRef<
		HTMLDivElement & { getClientHeight: () => number | undefined }
	>(null);
	const clonedChildren = cloneElement(children, { ref: childrenRef });
	const [childrenHeight, setChildrenHeight] = useState<number | undefined>(undefined);

	const controlledSetState = () => {
		setIsCollapsed!(prev => {
			return !prev;
		});
	};

	const innerSetState = () => {
		setInnerISCollapsed(prev => {
			return !prev;
		});
	};

	useLayoutEffect(() => {
		if (childrenRef.current) {
			setChildrenHeight(childrenRef.current.clientHeight);
		}
	}, [childrenRef]);

	return (
		<Styled.AccordionItem data-testid='accordion_item_test_id' {...rest}>
			<Styled.AccordionKey
				onClick={isControlledCollapse ? controlledSetState : innerSetState}
			>
				{accordionKey}
				<Styled.ChevronDirection
					isCollapsed={isControlledCollapse ? isCollapsed : innerIsCollapsed}
				>
					<ChevronCircleIcon fill={chevronColor} width={24} height={24} />
				</Styled.ChevronDirection>
			</Styled.AccordionKey>
			<Styled.Children
				isVisible={!(isControlledCollapse ? isCollapsed : innerIsCollapsed)}
				height={childrenHeight}
			>
				{clonedChildren}
			</Styled.Children>
		</Styled.AccordionItem>
	);
};
