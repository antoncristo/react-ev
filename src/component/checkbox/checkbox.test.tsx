import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { Checkbox } from './checkbox';

describe('<Checkbox/> component', () => {
	test('renders correctly', () => {
		customRender(<Checkbox isChecked onCheckboxSelect={() => null} value='' />);
		const component = screen.getByTestId('checkbox_test_id');
		expect(component).toBeInTheDocument();
	});
});
