import React from 'react';
import { vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { Button } from './button';

describe('<Button/> component', () => {
	const buttonLabel = 'Test Button';

	test('renders correctly', () => {
		customRender(<Button onClick={() => null}>{buttonLabel}</Button>);

		const component = screen.getByTestId('button_test_id');
		expect(component).toBeInTheDocument();
	});

	test('click event is fired when user click the button', () => {
		const onClickHandler = vi.fn(() => null);
		customRender(<Button onClick={onClickHandler}>{buttonLabel}</Button>);

		const component = screen.getByTestId('button_test_id');
		fireEvent.click(component);
		expect(onClickHandler).toBeCalled();
	});
});
