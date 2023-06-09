import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { Loader } from './loader';

describe('<Loader/> component', () => {
	test('renders correctly', () => {
		customRender(<Loader />);
		const component = screen.getByTestId('loader_test_id');
		expect(component).toBeInTheDocument();
	});
});
