import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { Label } from './Label';

describe('<Label/> component', () => {
	test('renders correctly', () => {
		customRender(<Label label='label text' />);
		const component = screen.getByTestId('label_test_id');
		expect(component).toBeInTheDocument();
	});
});
