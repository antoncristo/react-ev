/* eslint-disable no-console */
import { type RefObject } from 'react';

interface DropdownPosition {
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
}

const getPossiblePosition = (
	dropdownRef: RefObject<HTMLDivElement>
): DropdownPosition => {
	const overflowRelativeToViewport: DropdownPosition = {
		bottom: 1,
		left: 1,
		right: 1,
		top: 1
	};

	if (!dropdownRef.current) {
		return overflowRelativeToViewport;
	}

	const { bottom, left, right, top } = dropdownRef.current.getBoundingClientRect();

	if (top < 0) {
		delete overflowRelativeToViewport.top;
	}

	if (left < 0) {
		delete overflowRelativeToViewport.left;
	}

	if (right > window.innerWidth) {
		delete overflowRelativeToViewport.right;
	}

	if (bottom > window.innerHeight) {
		delete overflowRelativeToViewport.bottom;
	}

	return overflowRelativeToViewport;
};

export const getDropdownAbsolutePosition = (
	dropperRef: RefObject<HTMLDivElement>,
	dropdownRef: RefObject<HTMLDivElement>
): Partial<DropdownPosition> => {
	const defaultPosition = {
		bottom: 0,
		left: 0
	};
	const possiblePosition = getPossiblePosition(dropdownRef);

	if (Object.keys(possiblePosition).length === 0) {
		console.log('default pos 1');
		return defaultPosition;
	}

	console.log(possiblePosition);

	if (possiblePosition.top) {
		const contextHeight = dropperRef.current?.clientHeight ?? 0;

		const top = contextHeight;

		if (possiblePosition.left) {
			console.log('top-left');
			return {
				top,
				left: 0
			};
		}

		if (possiblePosition.right) {
			console.log('top-right');
			return {
				top,
				right: 0
			};
		}
	}

	if (possiblePosition.bottom) {
		if (possiblePosition.left) {
			console.log('bottom-left');
			return {
				bottom: 0,
				left: 0
			};
		}

		if (possiblePosition.right) {
			console.log('bottom-right');
			return {
				bottom: 0,
				right: 0
			};
		}
	}

	console.log('default pos 2');
	return defaultPosition;
};
