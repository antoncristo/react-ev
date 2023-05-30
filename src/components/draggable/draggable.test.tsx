import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { Draggable } from './draggable';

describe('<Draggable/> component', () => {
	test('renders correctly', () => {
		customRender(
			<Draggable onDragOver={() => null} onDragStart={() => null} onDrop={() => null}>
				<div>draggable item</div>
			</Draggable>
		);
		const component = screen.getByTestId('draggable_test_id');
		expect(component).toBeInTheDocument();
	});
});
