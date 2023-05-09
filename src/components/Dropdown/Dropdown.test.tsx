import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setupTests';
import { Dropdown } from './Dropdown';

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

describe('<Dropdown/> component', () => {
	test('renders correctly', () => {
		customRender(
			<Dropdown
				context={<div>dropdown</div>}
				listConfig={{
					list: storyList,
					renderItem: (item: StoryList) => (
						<div style={{ borderBottom: '1px solid black', width: '200px' }}>
							{item.storyName}
						</div>
					),
					itemKey: 'id'
				}}
				position={{}}
			/>
		);
		// Implement - expect(component).toBeInTheDocument();
	});
});
