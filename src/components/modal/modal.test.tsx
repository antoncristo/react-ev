import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { Modal } from './modal';

describe('<Modal/> component', () => {
	test('renders correctly', () => {
		customRender(
			<Modal isOpen setIsOpen={() => null}>
				<div>modal content</div>
			</Modal>
		);
		const component = screen.getByTestId('modal_test_id');
		expect(component).toBeInTheDocument();
	});
});
