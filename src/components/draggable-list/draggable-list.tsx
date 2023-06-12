import React, { type DragEventHandler } from 'react';

import { List, type ListProps } from '../list';
import { Draggable } from '../draggable/draggable';

import * as Styled from './draggable-list.styled';

export interface DraggableListProps<T extends object> {
	listProps: ListProps<T>;
	onDragStart: DragEventHandler;
	onDragOver: DragEventHandler;
	onDrop: DragEventHandler;
}

/**
 * @description a list that can be reordered using drag and drop api
 * @param listProps see ListProps type
 * @param onDragStart DragEventHandler
 * @param onDragOver DragEventHandler
 * @param onDrop DragEventHandler
 */
export const DraggableList = <T extends object>(props: DraggableListProps<T>) => {
	const { listProps, onDragOver, onDragStart, onDrop } = props;
	const { renderItem, list, ...restOfListProps } = listProps;
	const indexedItems: Array<T & { index: number }> = list.map((item, index) => {
		return { index, ...item };
	});

	return (
		<Styled.DraggableList data-testid='draggable_list_test_id'>
			<List
				list={indexedItems}
				renderItem={(item: T & { index: number }) => (
					<Draggable
						index={item.index}
						value={JSON.stringify(item)}
						onDragStart={onDragStart}
						onDragOver={onDragOver}
						onDrop={onDrop}
					>
						{renderItem(item)}
					</Draggable>
				)}
				{...restOfListProps}
			/>
		</Styled.DraggableList>
	);
};
