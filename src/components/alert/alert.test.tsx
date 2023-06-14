import React from 'react';
import { vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { Alert } from './alert';

describe('<Alert/> component', () => {
	test('renders correctly', () => {
		customRender(
			<Alert text='alert text' variant='default' isOpen setIsOpen={() => null} />
		);
		const component = screen.getByTestId('alert_test_id');
		expect(component).toBeInTheDocument();
	});

	test('if isOpen = false, alert does not appear in the DOM', () => {
		customRender(
			<Alert text='alert text' variant='default' isOpen={false} setIsOpen={() => null} />
		);
		const component = screen.queryByTestId('alert_test_id');
		expect(component).not.toBeInTheDocument();
	});

	test('title appears in the document, if passed', () => {
		const title = 'alert test title';
		customRender(
			<Alert
				text='alert text'
				title={title}
				variant='default'
				isOpen
				setIsOpen={() => null}
			/>
		);
		const titleComponent = screen.getByTestId('alert_title_test_id');
		expect(titleComponent).toBeInTheDocument();
	});

	test('title does not appears in the document, if missing', () => {
		const title = 'alert test title';
		customRender(
			<Alert text='alert text' variant='default' isOpen setIsOpen={() => null} />
		);
		const titleComponent = screen.queryByTestId('alert_title_test_id');
		expect(titleComponent).not.toBeInTheDocument();
	});

	test('alert dismiss handler is being called when pressing the OK button', () => {
		let isOpen = true;

		const dismissAlertHandler = vi.fn(() => {
			isOpen = false;
		});

		customRender(
			<Alert
				text='alert text'
				variant='default'
				isOpen={isOpen}
				setIsOpen={dismissAlertHandler}
			/>
		);

		const buttonComponent = screen.getByTestId('alert_button_test_id');
		fireEvent.click(buttonComponent);

		expect(dismissAlertHandler).toBeCalled();
	});
});
