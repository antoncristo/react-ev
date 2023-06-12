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

/**
 * @description
 * show and hide sections in an accordion form. Click the accordion key to collapse the content
 * uncontrolled by default. To set as a controlled component, pass a state and a handler
 *
 * @param children any valid JSX component
 * @param accordionKey the clickable key item (collapsing functionality)
 * @param isCollapsed (optional) if passed, then the 'setIsCollapsed' is required to have a controlled state
 * @param setIsCollapsed (optional) if passed, then the 'isCollapsed' state is required to have a controlled state
 * @param chevronColor (optional) set the color of the chevron icon
 */
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
	const isControlledCollapse = isCollapsed !== undefined && setIsCollapsed;

	const childrenRef = useRef<HTMLDivElement>(null);
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

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useLayoutEffect(() => {
		if (childrenRef.current) {
			setChildrenHeight(childrenRef.current.clientHeight);
		}
	});

	return (
		<Styled.AccordionItem data-testid='accordion_item_test_id' {...rest}>
			<Styled.AccordionKey
				data-testid='accordion_item_key_test_id'
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
				data-testid='accordion_item_children_test_id'
				isVisible={!(isControlledCollapse ? isCollapsed : innerIsCollapsed)}
				height={childrenHeight}
			>
				{clonedChildren}
			</Styled.Children>
		</Styled.AccordionItem>
	);
};
