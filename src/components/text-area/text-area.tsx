import React, { type TextareaHTMLAttributes } from 'react';

import { type Resize } from './text-area.types';

import * as Styled from './text-area.styled';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	resize?: Resize;
}

/**
 * @description a text area element
 * @param resize (optional) 'none' | 'both' | 'horizontal' | 'vertical'
 * @param htmlAttributes standard textarea input attributes
 *
 */
export const TextArea = (props: TextAreaProps) => {
	const { resize = 'none', ...rest } = props;

	return <Styled.TextArea data-testid='textarea_test_id' resize={resize} {...rest} />;
};
