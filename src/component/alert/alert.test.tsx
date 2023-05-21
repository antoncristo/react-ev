import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { Alert } from './alert';

describe('<Alert/> component', () => {
	test('renders correctly', () => {
		customRender(<Alert text='alert text' variant='default' />);
		const component = screen.getByTestId('alert_test_id');
		expect(component).toBeInTheDocument();
	});
});
