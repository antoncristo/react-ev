import React, { type CSSProperties, useState, type HTMLAttributes } from 'react';

import { List, type ListProps } from '../List';

import * as Styled from './Dropdown.styled';

export interface DropdownProps<T extends object> extends HTMLAttributes<HTMLDivElement> {
	context: JSX.Element;
	listConfig: ListProps<T>;
	position: Pick<CSSProperties, 'top' | 'bottom' | 'left' | 'right'>;
	head?: JSX.Element;
	footer?: JSX.Element;
}

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
