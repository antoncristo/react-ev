import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { TextField } from './text-field';

describe('<TextField/> component', () => {
	test('renders correctly', () => {
		customRender(<TextField>Text Field</TextField>);
		const component = screen.getByTestId('text_field_test_id');
		expect(component).toBeInTheDocument();
	});
});
