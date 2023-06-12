import React, { useRef, type HTMLAttributes, useEffect, useMemo } from 'react';

import * as Styled from './list.styled';

export interface ListProps<T extends object> extends HTMLAttributes<HTMLUListElement> {
	list: T[];
	itemKey: keyof T;
	renderItem: (item: T) => JSX.Element;
	gap?: string;
	height?: string;
	onEndReachedHandler?: Function;
}

/**
 * @description renders a list with a custom list item
 * @param list the data array to be rendered
 * @param itemKey a key of the data object to be used as reacts key prop in the mapped array
 * @param renderItem a render function, receives the data item and returns it's JSX
 * @param gap (optional) the gap between the list items
 * @param height (optional) the hight of the list (allows a scroll behavior of the list)
 * @param onEndReachedHandler (optional) a function to be fired when the scrolled list reached it's last element (good for infinite scrolling functionality)
 *
 */
export const List = <T extends object>(props: ListProps<T>) => {
	const {
		renderItem,
		list,
		itemKey,
		gap = '0',
		height = 'fit-content',
		onEndReachedHandler,
		...rest
	} = props;
	const endOfListRef = useRef<HTMLLIElement>(null);

	const intersectionObserver = useMemo(
		() =>
			new IntersectionObserver((entry: IntersectionObserverEntry[]) => {
				if (entry[0]?.isIntersecting && !!onEndReachedHandler) {
					onEndReachedHandler();
				}
			}),
		[onEndReachedHandler]
	);

	useEffect(() => {
		if (endOfListRef.current && !!onEndReachedHandler) {
			intersectionObserver.observe(endOfListRef.current);
		}

		return () => {
			intersectionObserver.disconnect();
		};
	}, [intersectionObserver, endOfListRef, onEndReachedHandler]);

	return (
		<Styled.List data-testid='list_test_id' gap={gap} height={height} {...rest}>
			{list.map((listItem, index) => (
				<li
					ref={index === list.length - 1 ? endOfListRef : null}
					key={JSON.stringify(listItem[itemKey])}
				>
					{renderItem(listItem)}
				</li>
			))}
		</Styled.List>
	);
};
