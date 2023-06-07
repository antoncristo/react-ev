import React, { type DragEventHandler } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { DraggableList } from '../../components/draggable-list';

interface StoryList {
	id: string;
	storyName: string;
}

const storyList: StoryList[] = [
	{ id: '1', storyName: 'list item 1' },
	{ id: '2', storyName: 'list item 2' },
	{ id: '3', storyName: 'list item 3' },
	{ id: '4', storyName: 'list item 4' },
	{ id: '5', storyName: 'list item 5' },
	{ id: '6', storyName: 'list item 6' },
	{ id: '7', storyName: 'list item 7' },
	{ id: '8', storyName: 'list item 8' }
];

let dragged = 'default';

const onDragStart: DragEventHandler = dragEvent => {
	dragged = dragEvent.currentTarget.getAttribute('data-value') ?? dragged;
	// eslint-disable-next-line no-console
	console.log('[onDragStart]:', dragEvent.currentTarget.innerHTML);
	dragEvent.dataTransfer.setData(
		'text/plain',
		JSON.stringify(dragEvent.currentTarget.getAttribute('data-value'))
	);
};

const onDragOver: DragEventHandler = dragEvent => null;

const onDrop: DragEventHandler = dropEvent => {
	const transferredData = dropEvent.dataTransfer.getData('text');
	const dropZoneElement = dropEvent.currentTarget.getAttribute('data-value') ?? 'error';

	// eslint-disable-next-line no-alert
	alert(`${transferredData} dropped on ${dropZoneElement}`);
};

const meta = {
	title: 'ReactEV/DraggableList',
	component: DraggableList
} satisfies Meta<typeof DraggableList>;

export default meta;
type Story = StoryObj<typeof DraggableList>;

export const Basic: Story = {
	render(args) {
		return (
			<DraggableList
				{...args}
				listProps={{
					list: storyList,
					itemKey: 'id',
					renderItem: (item: StoryList) => (
						<div
							style={{
								border: '1px solid black',
								width: '200px',
								borderRadius: '6px',
								padding: '6px'
							}}
						>
							{item.storyName}
						</div>
					),
					gap: '20px'
				}}
				onDragStart={onDragStart}
				onDragOver={onDragOver}
				onDrop={onDrop}
			/>
		);
	},
	args: {},
	argTypes: {}
};
