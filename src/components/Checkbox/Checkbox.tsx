import React, { useId, type KeyboardEventHandler, type HTMLAttributes } from 'react';

import { CheckmarkIcon } from 'src/assets';

import * as Styled from './Checkbox.styled';

export interface CheckboxProps extends HTMLAttributes<HTMLDivElement> {
	onChange: () => void;
	isChecked: boolean;
	inputID?: string;
	width?: string;
	colors?: {
		border?: string;
		box?: string;
		marker?: string;
	};
}

export const Checkbox = (props: CheckboxProps) => {
	const { isChecked, onChange, width = '12px', colors = {}, inputID, ...rest } = props;
	const _inputID = useId();

	const onCheckboxKeyDown: KeyboardEventHandler = event => {
		if (event.key === 'Enter') {
			onChange();
		}
	};

	return (
		<Styled.Checkbox
			data-testid='checkbox_test_id'
			borderColor={colors.border}
			onKeyDown={onCheckboxKeyDown}
			tabIndex={0}
			{...rest}
		>
			<Styled.IconWrapper
				backgroundColor={colors.box}
				htmlFor={inputID ?? _inputID}
				isVisible={isChecked}
				width={width}
			>
				<CheckmarkIcon fill={colors.marker} width={width} height={width} />
			</Styled.IconWrapper>
			<input onChange={onChange} id={inputID ?? _inputID} type='checkbox' hidden />
		</Styled.Checkbox>
	);
};
