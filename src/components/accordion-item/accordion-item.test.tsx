import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { AccordionItem } from './accordion-item';

describe('<AccordionItem/> component', () => {
	test('renders correctly', () => {
		customRender(
			<AccordionItem accordionKey='accordion key'>
				<div>block 1</div>
			</AccordionItem>
		);
		const component = screen.getByTestId('accordion_item_test_id');
		expect(component).toBeInTheDocument();
	});

	test('initially, children block is hidden', () => {
		customRender(
			<AccordionItem accordionKey='accordion key'>
				<div>block 1</div>
			</AccordionItem>
		);
		const accordionChildrenComponent = screen.getByTestId(
			'accordion_item_children_test_id'
		);
		expect(accordionChildrenComponent).toHaveStyleRule('display', 'none');
	});
});

describe('controlled <AccordionItem/> component', () => {
	test('if isCollapsed = TRUE, then children block is hidden with a display value of none', () => {
		customRender(
			<AccordionItem
				accordionKey='accordion key'
				isCollapsed={true}
				setIsCollapsed={() => null}
			>
				<div>block 1</div>
			</AccordionItem>
		);
		const component = screen.getByTestId('accordion_item_children_test_id');
		expect(component).toHaveStyleRule('display', 'none');
	});

	test('if isCollapsed = FALSE, then children block is visible with a display value of block', () => {
		customRender(
			<AccordionItem
				accordionKey='accordion key'
				isCollapsed={false}
				setIsCollapsed={() => null}
			>
				<div>block 1</div>
			</AccordionItem>
		);
		const component = screen.getByTestId('accordion_item_children_test_id');
		expect(component).toHaveStyleRule('display', 'block');
	});
});

describe('un-controlled <AccordionItem/> component', () => {
	test('if accordion item key clicked, then children block is visible', () => {
		customRender(
			<AccordionItem accordionKey='accordion key'>
				<div>block 1</div>
			</AccordionItem>
		);
		const accordionKeyComponent = screen.getByTestId('accordion_item_key_test_id');
		fireEvent.click(accordionKeyComponent);
		const accordionChildrenComponent = screen.getByTestId(
			'accordion_item_children_test_id'
		);
		expect(accordionChildrenComponent).toHaveStyleRule('display', 'block');
	});
});
