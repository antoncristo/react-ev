/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../components/Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'ReactEV/Button',
	component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
	render() {
		return (
			<Button title='Simple Sutton' onClick={() => alert('click event')}>
				Simple Button
			</Button>
		);
	}
};

// EXAMPLE: export const Secondary: Story = {
// 	args: {
// 		label: 'Button'
// 	}
// };

// export const Large: Story = {
// 	args: {
// 		size: 'large',
// 		label: 'Button'
// 	}
// };

// export const Small: Story = {
// 	args: {
// 		size: 'small',
// 		label: 'Button'
// 	}
// };
