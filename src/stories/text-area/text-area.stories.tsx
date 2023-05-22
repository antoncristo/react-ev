import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TextArea } from '../../components/text-area';

const meta = {
	title: 'ReactEV/TextArea',
	component: TextArea
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Basic: Story = {
	render(args) {
		return <TextArea {...args} placeholder='text area ... ' />;
	},
	args: {
		cols: 160,
		rows: 10,
		resize: 'none'
	},
	argTypes: {
		resize: {
			options: ['none', 'both', 'vertical', 'horizontal'],
			control: { type: 'radio' }
		}
	}
};
