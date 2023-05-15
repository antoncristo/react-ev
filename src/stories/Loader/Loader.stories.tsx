import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '../../components/Loader';

const meta = {
	title: 'ReactEV/Loader',
	component: Loader
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

export const Basic: Story = {
	render(args) {
		return <Loader {...args} />;
	},
	args: {
		variant: 'lifeline'
	},
	argTypes: {
		variant: {
			options: ['lifeline', 'pulse'],
			control: { type: 'radio' }
		}
	}
};
