import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { Checkbox } from './Checkbox';

describe('<Checkbox/> component', () => {
	test('renders correctly', () => {
		customRender(<Checkbox isChecked onChange={() => null} />);
		const component = screen.getByTestId('checkbox_test_id');
		expect(component).toBeInTheDocument();
	});
});
