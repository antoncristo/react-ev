import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '../../components/icon-button';
import { ColorsIcon } from 'src/assets';

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
		const onClickHandler = () => {
			// eslint-disable-next-line no-alert
			alert('click event');
		};

		return <IconButton {...args} icon={<ColorsIcon />} onClick={onClickHandler} />;
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
