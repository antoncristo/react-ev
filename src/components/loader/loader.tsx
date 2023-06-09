import React from 'react';

import * as Styled from './loader.styled';

export interface LoaderProps {
	bgc?: string;
	pc?: string;
	variant?: 'lifeline' | 'pulse';
}

/**
 * @description a loader component with two variants - pulse/lifeline
 * @param variant (optional) 'lifeline' | 'pulse'
 * @param bgc (optional) background color
 * @param pc (optional) lifeline color
 */
export const Loader = ({ variant = 'lifeline', bgc, pc }: LoaderProps) =>
	variant === 'lifeline' ? (
		<Styled.LifelineContainer data-testid='loader_test_id' bgc={bgc} pc={pc}>
			<div className='loading'>
				<svg width='64px' height='48px'>
					<polyline
						points='0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24'
						id='back'
					></polyline>
					<polyline
						points='0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24'
						id='front'
					></polyline>
				</svg>
			</div>
		</Styled.LifelineContainer>
	) : (
		<Styled.PulseContainer data-testid='loader_test_id' bgc={bgc} />
	);
