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
