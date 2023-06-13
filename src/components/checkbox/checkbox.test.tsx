import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { Checkbox } from './checkbox';
import { vi } from 'vitest';

describe('<Checkbox/> component', () => {
	test('renders correctly', () => {
		customRender(<Checkbox isChecked onCheckboxSelect={() => null} value='' />);
		const component = screen.getByTestId('checkbox_test_id');
		expect(component).toBeInTheDocument();
	});

	test('if isChecked = TRUE, then the checkmark icon is visible with opacity of 1', () => {
		customRender(<Checkbox isChecked={true} onCheckboxSelect={() => null} value='' />);
		const checkmarkComponent = screen.getByTestId('checkbox_checkmark_test_id');
		expect(checkmarkComponent).toHaveStyleRule('opacity', '1');
	});

	test('if isChecked = FALSE, then the checkmark icon is hidden with opacity of 0', () => {
		customRender(<Checkbox isChecked={false} onCheckboxSelect={() => null} value='' />);
		const checkmarkComponent = screen.getByTestId('checkbox_checkmark_test_id');
		expect(checkmarkComponent).toHaveStyleRule('opacity', '0');
	});

	test('if isChecked = FALSE, then the checkmark icon is hidden with opacity of 0', () => {
		const onSelectHandler = vi.fn(() => null);

		customRender(
			<Checkbox isChecked={false} onCheckboxSelect={onSelectHandler} value='' />
		);
		const inputComponent = screen.getByTestId('checkbox_input_test_id');

		fireEvent.click(inputComponent);
		expect(onSelectHandler).toBeCalled();
	});
});
