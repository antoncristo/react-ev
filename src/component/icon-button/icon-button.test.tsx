import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { IconButton } from './icon-button';
import { ColorsIcon } from 'src/assets';

describe('<IconButton/> component', () => {
	const buttonLabel = 'Test Button';

	test('renders correctly', () => {
		const onClickHandler = () => null;
		customRender(
			<IconButton text={buttonLabel} icon={<ColorsIcon />} onClick={onClickHandler} />
		);
		const component = screen.getByTestId('icon_button_test_id');
		expect(component).toBeInTheDocument();
	});
});
