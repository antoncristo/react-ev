import React, { type HTMLAttributes } from 'react';

import { TextField, type TextFieldProps } from '../text-field';

import * as Styled from './highest-tooltip.styled';

export interface HighestTooltipProps extends HTMLAttributes<HTMLDivElement> {
	tip: string;
	isVisible: boolean;
	textConfig?: Omit<TextFieldProps, 'children'>;
	position?: 'start' | 'end';
	justifyContent?: 'flex-start' | 'center' | 'flex-end';
}

export const HighestTooltip = (props: HighestTooltipProps) => {
	const {
		tip,
		isVisible,
		position = 'start',
		justifyContent = 'flex-start',
		textConfig = {},
		...rest
	} = props;

	return isVisible ? (
		<Styled.Tooltip
			position={position}
			justifyContent={justifyContent}
			data-testid='tooltip_test_id'
			{...rest}
		>
			<TextField {...textConfig}>{tip}</TextField>
		</Styled.Tooltip>
	) : null;
};
