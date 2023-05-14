import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { HighestAlert } from '../../components/HighestAlert';

const meta = {
	title: 'ReactEV/HighestAlert',
	component: HighestAlert
} satisfies Meta<typeof HighestAlert>;

export default meta;
type Story = StoryObj<typeof HighestAlert>;

export const Basic: Story = {
	render(args) {
		return <HighestAlert {...args} />;
	},
	args: {},
	argTypes: {}
};
