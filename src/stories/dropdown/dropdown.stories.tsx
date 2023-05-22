import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from '../../components/dropdown';

interface StoryList {
	id: string;
	storyName: string;
}

const storyList: StoryList[] = [
	{ id: '1', storyName: 'list item 1' },
	{ id: '2', storyName: 'list item 2' },
	{ id: '3', storyName: 'list item 3' },
	{ id: '4', storyName: 'list item 4' },
	{ id: '5', storyName: 'list item 5' },
	{ id: '6', storyName: 'list item 6' },
	{ id: '7', storyName: 'list item 7' },
	{ id: '8', storyName: 'list item 8' }
];

const meta = {
	title: 'ReactEV/Dropdown',
	component: Dropdown
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
	render(args) {
		return (
			<Dropdown
				{...args}
				position={{ top: '30px' }}
				context={<div>click me and open a dropdown</div>}
				head={<div>optional header</div>}
				footer={<div>optional footer</div>}
				listConfig={{
					list: storyList,
					renderItem: (item: StoryList) => (
						<div style={{ borderBottom: '1px solid black', width: '200px' }}>
							{item.storyName}
						</div>
					),
					itemKey: 'id',
					gap: '10px',
					height: '80px'
				}}
			/>
		);
	},
	args: {},
	argTypes: {}
};
