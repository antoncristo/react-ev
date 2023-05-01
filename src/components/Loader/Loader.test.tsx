import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { Loader } from './Loader';

describe('<Loader/> component', () => {
	const buttonLabel = 'Test Button';

	test('renders correctly', () => {
		customRender(<Loader />);
		const component = screen.getByTestId('LOADER');
		expect(component).toBeInTheDocument();
	});
});
