import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../../components/modal';

const meta = {
	title: 'ReactEV/Modal',
	component: Modal
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
	render(args) {
		return (
			<Modal {...args}>
				<div
					style={{
						backgroundColor: 'white',
						width: '300px',
						aspectRatio: '1/0.5',
						borderRadius: '6px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					children
				</div>
			</Modal>
		);
	},
	args: {
		isOpen: true,
		backdropColor: 'transparent'
	},
	argTypes: {}
};
