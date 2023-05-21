import React from 'react';
import { screen } from '@testing-library/react';
import { customRender } from 'src/tests/setup-tests';
import { List } from './list';

interface TestInterface {
	name: string;
	position: string;
}

const listData: TestInterface[] = [
	{
		name: 'tester 1',
		position: 'tester 11'
	},
	{
		name: 'tester 2',
		position: 'tester 22'
	}
];

describe('<List/> component', () => {
	test('renders correctly', () => {
		customRender(
			<List
				itemKey='name'
				list={listData}
				renderItem={(item: TestInterface) => <div>{item.name}</div>}
			/>
		);
		const component = screen.getByTestId('list_test_id');
		expect(component).toBeInTheDocument();
	});
});
