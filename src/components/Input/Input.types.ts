/* eslint-disable @typescript-eslint/indent */
import { type InputHTMLAttributes } from 'react';

export type InputVariants = Extract<
	InputHTMLAttributes<HTMLInputElement>['type'],
	'password' | 'text' | 'email'
>;
