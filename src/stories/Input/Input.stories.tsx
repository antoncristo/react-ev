import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../../component/input';

const meta = {
	title: 'ReactEV/Input',
	component: Input
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
	render(args) {
		return <Input {...args} placeholder='input here...' />;
	},
	args: {
		isValid: true
	},
	argTypes: {}
};
