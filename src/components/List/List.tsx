/* eslint-disable @typescript-eslint/ban-types */
import React, { useRef, type HTMLAttributes, useEffect, useMemo } from 'react';

import * as Styled from './List.styled';

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
	const endOfListRef = useRef<HTMLDivElement>(null);
	const isOnEndReachedUsed = Boolean(onEndReachedHandler);

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
		if (endOfListRef.current) {
			intersectionObserver.observe(endOfListRef.current);
		}

		return () => {
			intersectionObserver.disconnect();
		};
	}, [intersectionObserver, endOfListRef]);

	return (
		<Styled.List data-testid='list_test_id' gap={gap} height={height} {...rest}>
			{list.map(listItem => (
				<li key={JSON.stringify(listItem[itemKey])}>{renderItem(listItem)}</li>
			))}
			{isOnEndReachedUsed && <Styled.EndReachedMarker ref={endOfListRef} />}
		</Styled.List>
	);
};
