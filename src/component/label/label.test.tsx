import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { Label } from './label';

describe('<Label/> component', () => {
	test('renders correctly', () => {
		customRender(<Label label='label text' />);
		const component = screen.getByTestId('label_test_id');
		expect(component).toBeInTheDocument();
	});
});
