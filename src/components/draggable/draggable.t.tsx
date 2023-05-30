import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { Draggable } from './draggable';

describe('<Draggable/> component', () => {
	test('renders correctly', () => {
		customRender(<Draggable />);
		// Implement - const component = screen.getByTestId()
		// Implement - expect(component).toBeInTheDocument();
	});
});
