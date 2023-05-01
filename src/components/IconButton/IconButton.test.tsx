import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { IconButton } from './IconButton';
import { ColorsIcon } from 'src/assets';

export const ICON_BUTTON_TEST_ID = 'icon_button_test_id';

describe('<IconButton/> component', () => {
	const buttonLabel = 'Test Button';

	test('renders correctly', () => {
		const onClickHandler = () => null;
		customRender(
			<IconButton text={buttonLabel} icon={<ColorsIcon />} onClick={onClickHandler} />
		);
		const component = screen.getByTestId(ICON_BUTTON_TEST_ID);
		expect(component).toBeInTheDocument();
	});
});
