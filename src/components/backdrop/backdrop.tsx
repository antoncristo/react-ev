import React from 'react';

import * as Styled from './backdrop.styled';

export interface BackdropProps {
	bgc?: string;
}

export const Backdrop = (props: BackdropProps) => <Styled.Backdrop bgc={props.bgc} />;
