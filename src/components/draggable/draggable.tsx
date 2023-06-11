import React, { type DragEventHandler, type ReactNode } from 'react';

import * as Styled from './draggable.styled';

export interface DraggableProps {
	children: ReactNode;
	onDragStart: DragEventHandler;
	onDragOver: DragEventHandler;
	onDrop: DragEventHandler;
	value?: string;
	index?: number;
}

/**
 * @description a wrapper that allows any element to be draggable
 * @param children the content that would be draggable
 * @param onDragStart DragEventHandler
 * @param onDragOver DragEventHandler
 * @param onDrop DragEventHandler
 * @param value (optional) a string to be used as the data-value attribute on the drag events
 * @param index (optional) a string to be used as the data-index attribute on the drag events
 */
export const Draggable = (props: DraggableProps) => {
	const { value, children, onDragStart, onDragOver, onDrop, index } = props;

	const onDragOverHandler: DragEventHandler = dragEvent => {
		dragEvent.preventDefault();
		dragEvent.stopPropagation();
		onDragOver(dragEvent);
	};

	const onDropHandler: DragEventHandler = dropEvent => {
		dropEvent.preventDefault();
		dropEvent.stopPropagation();
		onDrop(dropEvent);
	};

	return (
		<Styled.Draggable
			data-testid='draggable_test_id'
			data-value={value}
			data-index={index}
			draggable
			onDragStart={onDragStart}
			onDragOver={onDragOverHandler}
			onDrop={onDropHandler}
		>
			{children}
		</Styled.Draggable>
	);
};
