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

/**
 * @description a top level, fixed, tooltip box. When hovering a specific element, a top level box will appear
 * @param tip the message of the tooltip
 * @param isVisible the state that handles the visibility of the tooltip
 * @param textConfig configure the tip text style, see TextFieldProps
 * @param position (optional) considering a row view of the viewport, decide the position of the tooltip
 * @param justifyContent (optional) considering a column view of the tooltip box, decide the position of the text
 */
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
