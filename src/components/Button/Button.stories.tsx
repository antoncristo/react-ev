/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { type DefaultTheme } from 'styled-components';

import { Button } from './Button';
import { ReactEVThemeProvider } from 'src/style/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'ReactEV/Button',
	component: Button,
	tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	render() {
		return (
			<Button
				htmlAttributes={{ title: 'button story' }}
				onClick={() => alert('click event')}
			>
				button
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
