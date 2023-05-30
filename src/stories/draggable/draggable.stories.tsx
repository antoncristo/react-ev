/* eslint-disable no-console */
import React, { type DragEventHandler } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Draggable } from '../../components/draggable';
import { TextField } from 'src/components';

const meta = {
	title: 'ReactEV/Draggable',
	component: Draggable
} satisfies Meta<typeof Draggable>;

export default meta;
type Story = StoryObj<typeof Draggable>;

let dragged = 'default';

const onDragStart: DragEventHandler = dragEvent => {
	dragged = dragEvent.currentTarget.getAttribute('data-value') ?? dragged;
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

const draggableChildStyle = {
	border: '1px solid black',
	padding: '6px 12px',
	borderRadius: '6px'
};

export const Basic: Story = {
	render() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
				<Draggable
					onDragStart={onDragStart}
					onDragOver={onDragOver}
					onDrop={onDrop}
					value='item 1'
				>
					<TextField style={draggableChildStyle}>Draggable Item 1</TextField>
				</Draggable>
				<Draggable
					onDragStart={onDragStart}
					onDragOver={onDragOver}
					onDrop={onDrop}
					value='item 2'
				>
					<TextField style={draggableChildStyle}>Draggable Item 2</TextField>
				</Draggable>
				<Draggable
					onDragStart={onDragStart}
					onDragOver={onDragOver}
					onDrop={onDrop}
					value='item 3'
				>
					<TextField style={draggableChildStyle}>Draggable Item 3</TextField>
				</Draggable>
				<Draggable
					onDragStart={onDragStart}
					onDragOver={onDragOver}
					onDrop={onDrop}
					value='item 4'
				>
					<TextField style={draggableChildStyle}>Draggable Item 4</TextField>
				</Draggable>
			</div>
		);
	},
	args: {},
	argTypes: {}
};
