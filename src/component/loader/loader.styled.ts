import styled, { keyframes } from 'styled-components';

export const LifelineContainer = styled.div<{ bgc?: string; pc?: string }>`
	width: fit-content;
	height: fit-content;

	.loading svg polyline {
		fill: none;
		stroke-width: 3;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.loading svg polyline#back {
		fill: none;
		stroke: ${({ theme, bgc }) => bgc ?? 'transparent'};
	}

	.loading svg polyline#front {
		fill: none;
		stroke: ${({ theme, pc }) => pc ?? theme.palette.base.primary};
		stroke-dasharray: 48, 144;
		stroke-dashoffset: 192;
		animation: lifeline 1.2s linear infinite;
	}

	@keyframes lifeline {
		72.5% {
			opacity: 0.6;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
`;

export const PulseContainer = styled.div<{ bgc?: string }>`
	width: 18px;
	height: 18px;
	border-radius: 50%;
	background-color: transparent;
	animation-name: pulse;
	animation-duration: 0.9s;
	animation-iteration-count: infinite;

	@keyframes pulse {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 ${({ theme, bgc }) => bgc ?? theme.palette.base.primary};
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		}
	}
`;
