/* eslint-disable no-alert */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../../component/checkbox';

const meta = {
	title: 'ReactEV/Checkbox',
	component: Checkbox
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
	render(args) {
		return (
			<Checkbox
				{...args}
				onChange={() => {
					alert('input change event handler');
				}}
			/>
		);
	},
	args: {
		isChecked: true
	},
	argTypes: {}
};
