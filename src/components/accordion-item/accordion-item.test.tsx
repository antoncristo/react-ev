import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { AccordionItem } from './accordion-item';

describe('<AccordionItem/> component', () => {
	test('renders correctly', () => {
		customRender(
			<AccordionItem isCollapsed accordionKey='accordion key' onKeyClick={() => null}>
				<div>block 1</div>
			</AccordionItem>
		);
		const component = screen.getByTestId('accordion_item_test_id');
		expect(component).toBeInTheDocument();
	});
});
