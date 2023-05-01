import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { Button } from './Button';

export const BUTTON_TEST_ID = 'button_test_id';

describe('<Button/> component', () => {
	const buttonLabel = 'Test Button';

	test('renders correctly', () => {
		const onClickHandler = () => null;
		customRender(<Button onClick={onClickHandler}>{buttonLabel}</Button>);
		const component = screen.getByTestId(BUTTON_TEST_ID);
		expect(component).toBeInTheDocument();
	});
});
