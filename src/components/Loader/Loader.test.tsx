import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { Loader } from './Loader';

export const LOADER_TEST_ID = 'loader_test_id';

describe('<Loader/> component', () => {
	test('renders correctly', () => {
		customRender(<Loader />);
		const component = screen.getByTestId(LOADER_TEST_ID);
		expect(component).toBeInTheDocument();
	});
});
