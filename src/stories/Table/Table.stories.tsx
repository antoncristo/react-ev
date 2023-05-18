import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '../../components/Table';
import { type Column } from 'src/components/Table/Table.types';

const meta = {
	title: 'ReactEV/Table',
	component: Table
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

interface StoryList {
	id: string;
	storyName: string;
}

const storyData: StoryList[] = [
	{ id: '1', storyName: 'list item 1' },
	{ id: '2', storyName: 'list item 2' },
	{ id: '3', storyName: 'list item 3' },
	{ id: '4', storyName: 'list item 4' },
	{ id: '5', storyName: 'list item 5' },
	{ id: '6', storyName: 'list item 6' },
	{ id: '7', storyName: 'list item 7' },
	{ id: '8', storyName: 'list item 8' }
];

const columns: Array<Column<StoryList>> = [
	{
		accessor: 'id',
		header: 'ID',
		cell: {
			render: (item: StoryList) => <div key={item.id}>{item.id}</div>
		}
	},
	{
		accessor: 'storyName',
		header: 'STN',
		cell: {
			render: (item: StoryList) => (
				<div style={{ width: '100%' }} key={item.storyName}>
					{item.storyName}
				</div>
			)
		}
	}
];

export const Basic: Story = {
	render(args) {
		return <Table {...args} data={storyData} columns={columns} />;
	},
	args: {},
	argTypes: {}
};
