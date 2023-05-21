import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { HighestTooltip } from './highest-tooltip';

describe('<Tooltip/> component', () => {
	test('renders correctly', () => {
		customRender(<HighestTooltip isVisible tip='Tooltip' />);
		const component = screen.getByTestId('tooltip_test_id');
		expect(component).toBeInTheDocument();
	});
});
