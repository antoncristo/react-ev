import React, { type DragEventHandler } from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { DraggableList } from './draggable-list';

interface TestInterface {
	name: string;
	position: string;
}

const listData: TestInterface[] = [
	{
		name: 'tester 1',
		position: 'tester 11'
	},
	{
		name: 'tester 2',
		position: 'tester 22'
	}
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

describe('<DraggableList/> component', () => {
	test('renders correctly', () => {
		customRender(
			<DraggableList
				listProps={{
					list: listData,
					itemKey: 'name',
					renderItem: (item: TestInterface) => <div>{item.name}</div>
				}}
				onDragStart={onDragStart}
				onDragOver={onDragOver}
				onDrop={onDrop}
			/>
		);
		const component = screen.getByTestId('draggable_list_test_id');
		expect(component).toBeInTheDocument();
	});
});
