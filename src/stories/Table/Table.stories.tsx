import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '../../component/table';
import { type Column } from 'src/component/table/table.types';

const meta = {
	title: 'ReactEV/Table',
	component: Table
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

interface StoryList {
	id: string;
	storyName: string;
	attr: string;
}

const storyData: StoryList[] = [
	{ id: '1', storyName: 'list item 1', attr: 'a' },
	{ id: '2', storyName: 'list item 2', attr: 'b' },
	{ id: '3', storyName: 'list item 3', attr: 'c' },
	{ id: '4', storyName: 'list item 4', attr: 'd' },
	{ id: '5', storyName: 'list item 5', attr: 'e' },
	{ id: '6', storyName: 'list item 6', attr: 'f' },
	{ id: '7', storyName: 'list item 7', attr: 'g' },
	{ id: '8', storyName: 'list item 8', attr: 'h' }
];

const columns: Array<Column<StoryList>> = [
	{
		columnId: 'storyName',
		header: 'STN',
		cell: {
			init: (item: StoryList) => <div key={item.storyName}>{item.storyName}</div>
		},
		width: '60%'
	},
	{
		columnId: 'attr',
		header: 'ATTR',
		cell: {
			init: (item: StoryList) => <div key={item.attr}>{item.attr}</div>
		},
		width: '80%',
		isSortable: true
	},
	{
		columnId: 'id',
		header: 'ID',
		cell: {
			init: (item: StoryList) => <div key={item.id}>{item.id}</div>
		},
		width: '20%',
		isSortable: true
	}
];

export const Basic: Story = {
	render() {
		return <Table data={storyData} columns={columns} />;
	},
	args: {},
	argTypes: {}
};
