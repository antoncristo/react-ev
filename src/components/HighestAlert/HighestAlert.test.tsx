import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { HighestAlert } from './HighestAlert';

describe('<HighestAlert/> component', () => {
	test('renders correctly', () => {
		customRender(<HighestAlert />);
		// Implement - const component = screen.getByTestId()
		// Implement - expect(component).toBeInTheDocument();
	});
});
