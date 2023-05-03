import React, { type HTMLAttributes, type ReactNode } from 'react';

import * as Styled from './TextField.styled';

export interface TextFieldProps extends HTMLAttributes<HTMLParagraphElement> {
	children: string;
	fontSize?: string;
	fontWeight?: string;
	lineHeight?: string;
	maxWidth?: string;
	numberOfLines?: number;
}

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
