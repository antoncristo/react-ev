import React, { type CSSProperties, useState, type HTMLAttributes } from 'react';

import { List, type ListProps } from '../list';

import * as Styled from './dropdown.styled';

export interface DropdownProps<T extends object> extends HTMLAttributes<HTMLDivElement> {
	context: JSX.Element;
	listConfig: ListProps<T>;
	position: Pick<CSSProperties, 'top' | 'bottom' | 'left' | 'right'>;
	head?: JSX.Element;
	footer?: JSX.Element;
}

/**
 * @description click on the context, show a dropdown box with any content (list,header/footer elements)
 *
 * @param context the element that triggers the dropdown visibility
 * @param listConfig configure the inner list, see ListProps
 * @param position define the position of the dropdown, relative to the context element
 * @param head (optional) a top component placeholder
 * @param footer (optional) a bottom component placeholder
 */
export const Dropdown = <T extends object>(props: DropdownProps<T>) => {
	const {
		context,
		listConfig,
		position,
		head = null,
		footer = null,
		style,
		className,
		...rest
	} = props;
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const onContextClick = () => {
		setIsDropdownOpen(true);
	};

	const onClickOutside = () => {
		setIsDropdownOpen(false);
	};

	return (
		<Styled.Dropdown {...rest}>
			<Styled.Dropper tabIndex={-1} onFocus={onContextClick} onBlur={onClickOutside}>
				{context}
			</Styled.Dropper>
			{isDropdownOpen ? (
				<Styled.AbsoluteDropdown style={{ ...style, ...position }} className={className}>
					{head}
					<List {...listConfig} />
					{footer}
				</Styled.AbsoluteDropdown>
			) : null}
		</Styled.Dropdown>
	);
};
