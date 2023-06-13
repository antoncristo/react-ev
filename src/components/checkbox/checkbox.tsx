import React, {
	useId,
	type KeyboardEventHandler,
	type HTMLAttributes,
	type ChangeEventHandler
} from 'react';

import { CheckmarkIcon } from 'src/assets';

import * as Styled from './checkbox.styled';

export interface CheckboxProps extends HTMLAttributes<HTMLDivElement> {
	onCheckboxSelect: (value: string) => void;
	isChecked: boolean;
	value: string;
	inputID?: string;
	width?: string;
	colors?: {
		border?: string;
		box?: string;
		marker?: string;
	};
}

/**
 * @description custom checkbox input
 *
 * @param isChecked input's state representor
 * @param onCheckboxSelect a method to handle the change of the input
 * @param value input's value to read on the onChange handler
 * @param inputID (optional) in order to sync with an outer label, pass this prop
 * @param width (optional) default to 12px aspect ration 1/1
 * @param colors (optional) and object to style the colors of the checkbox
 */
export const Checkbox = (props: CheckboxProps) => {
	const {
		isChecked,
		onCheckboxSelect,
		width = '12px',
		colors = {},
		inputID,
		value,
		...rest
	} = props;
	const _inputID = useId();

	const onCheckboxKeyDown: KeyboardEventHandler = event => {
		if (event.key === 'Enter') {
			onCheckboxSelect(value);
		}
	};

	const onInputChange: ChangeEventHandler<HTMLInputElement> = e => {
		onCheckboxSelect(e.currentTarget.value);
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
				data-testid='checkbox_checkmark_test_id'
				backgroundColor={colors.box}
				htmlFor={inputID ?? _inputID}
				isVisible={isChecked}
				width={width}
			>
				<CheckmarkIcon fill={colors.marker} width={width} height={width} />
			</Styled.IconWrapper>
			<input
				data-testid='checkbox_input_test_id'
				onChange={onInputChange}
				value={value}
				id={inputID ?? _inputID}
				type='checkbox'
				hidden
			/>
		</Styled.Checkbox>
	);
};
