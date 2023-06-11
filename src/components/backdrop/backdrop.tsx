import React from 'react';

import * as Styled from './backdrop.styled';

export interface BackdropProps {
	bgc?: string;
}

/**
 * @description a fixed backdrop overlay (z-index 200)
 *
 * @param bgc (optional) set a color for the backdrop
 */
export const Backdrop = (props: BackdropProps) => <Styled.Backdrop bgc={props.bgc} />;
