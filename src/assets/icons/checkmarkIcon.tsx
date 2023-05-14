import React, { type SVGProps } from 'react';
import { Colors } from 'src/style/colors';

export const CheckmarkIcon = ({
	width = 48,
	fill = Colors.WHITE
}: SVGProps<SVGSVGElement>): JSX.Element => (
	<svg height={width} viewBox='0 96 960 960' width={width}>
		<path
			fill={fill}
			d='M378 813q-9 0-17.5-3.5T347 799L166 619q-13-13-13-33t13-33q13-13 32.5-13t33.5 13l146 147 350-350q14-13 33-13.5t32 13.5q14 14 14 33.5T793 416L410 799q-6 7-14.5 10.5T378 813Z'
		/>
	</svg>
);
