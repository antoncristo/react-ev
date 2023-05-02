import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { Button } from './Button';

describe('<Button/> component', () => {
	const buttonLabel = 'Test Button';

	test('renders correctly', () => {
		const onClickHandler = () => null;
		customRender(<Button onClick={onClickHandler}>{buttonLabel}</Button>);
		const component = screen.getByTestId('button_test_id');
		expect(component).toBeInTheDocument();
	});
});
