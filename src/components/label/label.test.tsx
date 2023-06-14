import React from 'react';
import { vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { Label } from './label';

describe('<Label/> component', () => {
	test('renders correctly', () => {
		customRender(<Label label='label text' />);

		const component = screen.getByTestId('label_test_id');
		expect(component).toBeInTheDocument();
	});

	test('if synced with and input, the event fires when clicking the label', () => {
		const onSelectHandler = vi.fn(() => null);

		customRender(
			<>
				<Label label='label text' htmlFor='test_input' />
				<input type='checkbox' id='test_input' onChange={onSelectHandler} />
			</>
		);

		const component = screen.getByTestId('label_test_id');
		fireEvent.click(component);
		expect(onSelectHandler).toBeCalled();
	});
});
