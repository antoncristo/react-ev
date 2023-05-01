import styled, { keyframes } from 'styled-components';
import { type LoaderSize } from './Loader';

const loaderSize: Record<LoaderSize, number> = {
	large: 48,
	medium: 32,
	small: 16
};

const rotateClockwise = keyframes`
  0% { transform: rotate(0) };
  100% { transform: rotate(360deg) };
`;

export const Loader = styled.div<{ size: LoaderSize }>`
	position: relative;
	width: ${({ size }) => loaderSize[size]}px;
	aspect-ratio: 1/1;
	border-radius: 50%;
	animation-name: ${rotateClockwise};
	animation-duration: 1.2s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	background-color: transparent;
`;

export const Line = styled.div<{ degree: number }>`
	position: absolute;
	left: 45%;
	width: 10%;
	height: 100%;
	background-color: ${({ theme }) => theme.palette.base.white};
	border-radius: 3px;
	transform: rotate(${({ degree }) => degree}deg);
	box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.palette.base.black};
`;

export const InnerLoader = styled.div`
	position: absolute;
	width: 60%;
	aspect-ratio: 1/1;
	left: 20%;
	top: 20%;
	border-radius: 50%;
	background: ${({ theme }) => theme.palette.base.primary};
	opacity: 0.3;
	box-shadow: inset 0px 0px 6px 0px ${({ theme }) => theme.palette.base.black};
`;
