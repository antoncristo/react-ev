import React, { type HTMLAttributes } from 'react';

import * as Styled from './text-field.styled';

export interface TextFieldProps extends HTMLAttributes<HTMLParagraphElement> {
	children: string;
	fontSize?: string;
	fontWeight?: string;
	lineHeight?: string;
	maxWidth?: string;
	numberOfLines?: number;
}

/**
 * @description text field element with built in customization
 * @param children text string content
 * @param numberOfLines (optional) clap the text box with a desired number of lines and break them with ellipsis
 * @param fontSize (optional)
 * @param fontWeight (optional)
 * @param lineHeight (optional)
 * @param maxWidth (optional)
 */
export const TextField = (props: TextFieldProps) => {
	const {
		children,
		fontSize,
		fontWeight = 'normal',
		lineHeight,
		maxWidth,
		numberOfLines,
		...rest
	} = props;
	return (
		<Styled.TextField
			data-testid='text_field_test_id'
			maxWidth={maxWidth}
			fontSize={fontSize}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			numberOfLines={numberOfLines}
			{...rest}
		>
			{children}
		</Styled.TextField>
	);
};
