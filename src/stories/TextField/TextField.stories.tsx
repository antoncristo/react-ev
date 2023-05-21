import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '../../component/text-field';

const shortText = 'Lorem ipsum dolor sit amet!';
const longText = `${''} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis massa in ex dapibus interdum quis at ex. Duis tortor elit, tempus pharetra rhoncus et, tempor non ipsum. Donec magna nisi, auctor et nisi ac, vestibulum vestibulum nulla. Donec ultrices odio id nibh faucibus eleifend. Nunc ac mauris at erat eleifend tempor. Maecenas ac ex eget nisi vehicula dapibus. Curabitur pulvinar, ex eu rutrum tincidunt, mauris tortor tempus lorem, eu finibus sapien ipsum sit amet est. Etiam orci mauris, elementum ac lacinia nec, semper maximus sapien. Mauris at posuere enim. Proin faucibus dui eu dignissim condimentum. Aliquam et sem velit. Sed feugiat commodo tellus, id blandit nulla congue vitae. Donec nibh purus, vulputate vel dictum quis, volutpat eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in justo ut risus dignissim sollicitudin eget ut lectus.`;

const meta = {
	title: 'ReactEV/TextField',
	component: TextField
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
	render(args) {
		return <TextField {...args}>{shortText}</TextField>;
	},
	args: {
		maxWidth: '300px',
		fontSize: '1rem',
		fontWeight: 'normal',
		lineHeight: '1.2rem'
	},
	argTypes: {}
};

export const LongText: Story = {
	render(args) {
		return <TextField {...args}>{longText}</TextField>;
	},
	args: {
		maxWidth: '300px',
		fontSize: '1rem',
		fontWeight: 'normal',
		lineHeight: '1.2rem',
		numberOfLines: 6
	},
	argTypes: {}
};
