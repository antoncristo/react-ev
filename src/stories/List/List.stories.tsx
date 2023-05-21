import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { List } from '../../component/list';

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
	title: 'ReactEV/List',
	component: List
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

export const Basic: Story = {
	render(args) {
		return (
			<List
				{...args}
				list={storyList}
				itemKey='id'
				renderItem={(item: StoryList) => (
					<div style={{ borderBottom: '1px solid black', width: '200px' }}>
						{item.storyName}
					</div>
				)}
			/>
		);
	},
	args: {
		gap: '0',
		height: 'fit-content',
		onEndReachedHandler: undefined
	},
	argTypes: {
		gap: {
			options: ['0', '10px', '20px'],
			control: { type: 'radio' }
		},
		height: {
			options: ['fit-content', '100px'],
			control: { type: 'radio' }
		}
	}
};
