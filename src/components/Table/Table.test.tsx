import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { Table } from './Table';

describe('<Table/> component', () => {
	test('renders correctly', () => {
		customRender(<Table data={[]} columns={[]} />);
		const component = screen.getByTestId('table_test_id');
		expect(component).toBeInTheDocument();
	});
});
