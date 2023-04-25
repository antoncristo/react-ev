import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button/> component', () => {
	const buttonLabel = 'Test Button';

	test('renders correctly', () => {
		const onClickHandler = () => null;
		render(<Button onClick={onClickHandler}>{buttonLabel}</Button>);
		const component = screen.getByText(buttonLabel);
		expect(component).toBeInTheDocument();
	});
});
