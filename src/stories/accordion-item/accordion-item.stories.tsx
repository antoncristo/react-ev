import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AccordionItem } from '../../components/accordion-item';
import { TextField } from 'src/components';

const meta = {
	title: 'ReactEV/AccordionItem',
	component: AccordionItem
} satisfies Meta<typeof AccordionItem>;

export default meta;
type Story = StoryObj<typeof AccordionItem>;

export const Basic: Story = {
	render(args) {
		return (
			<AccordionItem
				{...args}
				accordionKey={
					<TextField fontSize='1.2rem' numberOfLines={1} fontWeight='bold'>
						Accordion Item 1
					</TextField>
				}
			>
				<div style={{ height: '600px' }}>block1</div>
			</AccordionItem>
		);
	},
	args: {
		isCollapsed: true
	},
	argTypes: {}
};
