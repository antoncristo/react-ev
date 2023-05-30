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
