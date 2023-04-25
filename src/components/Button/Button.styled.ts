import styled from 'styled-components';

import { triadicPalette } from 'src/style';

// Create a palette decorator to allow any user to create it's own triadic palette
const testColorsMode = 'light';

export const Button = styled.button`
	cursor: pointer;
	border: none;
	border-radius: 6px;
	margin: 0;
	padding: 6px 8px;

	font-weight: 600;
	color: ${triadicPalette[`primary-${testColorsMode}`]};
	background-color: ${triadicPalette[`secondary-${testColorsMode}`]};

	:hover {
		box-shadow: -3px 0px 16px -2px ${triadicPalette.ternary};
	}
`;
