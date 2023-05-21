/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../../components/label';
import { Checkbox } from 'src/components/checkbox';

const meta = {
	title: 'ReactEV/Label',
	component: Label
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Basic: Story = {
	render(args) {
		return (
			<div style={{ display: 'flex', width: 'fit-content' }}>
				<Checkbox
					inputID='checkbox'
					isChecked
					value='checkbox 1'
					onCheckboxSelect={value => alert(value + ' clicked')}
					style={{ margin: '3px 10px 0 0' }}
				/>
				<Label htmlFor='checkbox' {...args} />
			</div>
		);
	},
	args: {
		label: 'this is a label with some text, click me like i am a checkbox',
		textConfig: {
			fontSize: '1.2rem',
			fontWeight: 'bold',
			lineHeight: '1.1',
			maxWidth: '300px',
			numberOfLines: 2
		}
	},
	argTypes: {}
};
