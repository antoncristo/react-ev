/* eslint-disable no-alert */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../components/button';

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
			<Button
				title='Simple Sutton'
				onClick={() => {
					alert('click event');
				}}
				disabled
			>
				Simple Button
			</Button>
		);
	}
};
