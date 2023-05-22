import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { HighestTooltip } from '../../components/highest-tooltip';

const meta = {
	title: 'ReactEV/HighestTooltip',
	component: HighestTooltip
} satisfies Meta<typeof HighestTooltip>;

export default meta;
type Story = StoryObj<typeof HighestTooltip>;

export const Basic: Story = {
	render(args) {
		return <HighestTooltip {...args} textConfig={{ fontWeight: 'bold' }} />;
	},
	args: {
		tip: 'tooltip text with short text with maximum default width of 300 px.',
		isVisible: true,
		position: 'start',
		justifyContent: 'flex-start'
	},
	argTypes: {
		position: {
			options: ['start', 'end'],
			control: { type: 'radio' }
		},
		justifyContent: {
			options: ['flex-start', 'center', 'flex-end'],
			control: { type: 'radio' }
		}
	}
};
