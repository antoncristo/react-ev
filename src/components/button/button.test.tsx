import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { Button } from './button';

describe('<Button/> component', () => {
	const buttonLabel = 'Test Button';

	test('renders correctly', () => {
		const onClickHandler = () => null;
		customRender(<Button onClick={onClickHandler}>{buttonLabel}</Button>);
		const component = screen.getByTestId('button_test_id');
		expect(component).toBeInTheDocument();
	});
});