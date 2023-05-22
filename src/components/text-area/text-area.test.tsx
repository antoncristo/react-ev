import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { TextArea } from './text-area';

describe('<TextArea/> component', () => {
	test('renders correctly', () => {
		customRender(<TextArea />);
		const component = screen.getByTestId('textarea_test_id');
		expect(component).toBeInTheDocument();
	});
});
