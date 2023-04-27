/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '../../components/IconButton';
import { ColorsIcon } from 'src/assets';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'ReactEV/IconButton',
	component: IconButton,
	args: {
		text: 'button'
	}
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Basic: Story = {
	render(args) {
		return (
			<IconButton {...args} icon={<ColorsIcon />} onClick={() => alert('click event')} />
		);
	},
	args: {
		text: 'Simple Button',
		gap: '10px',
		iconPosition: 'end'
	},
	argTypes: {
		gap: {
			options: ['100px', '10px', '0'],
			control: { type: 'select' }
		},
		iconPosition: {
			control: { type: 'radio' }
		}
	}
};
