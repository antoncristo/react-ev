import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { Input } from './input';

describe('<Input/> component', () => {
	test('renders correctly', () => {
		customRender(<Input type='text' />);
		const component = screen.getByTestId('input_test_id');
		expect(component).toBeInTheDocument();
	});
});
