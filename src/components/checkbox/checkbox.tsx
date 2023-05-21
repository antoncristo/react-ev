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
				backgroundColor={colors.box}
				htmlFor={inputID ?? _inputID}
				isVisible={isChecked}
				width={width}
			>
				<CheckmarkIcon fill={colors.marker} width={width} height={width} />
			</Styled.IconWrapper>
			<input
				onChange={onInputChange}
				value={value}
				id={inputID ?? _inputID}
				type='checkbox'
				hidden
			/>
		</Styled.Checkbox>
	);
};
