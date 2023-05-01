import React from 'react';

import { LOADER_TEST_ID } from './Loader.test';

import * as Styled from './Loader.styled';

export type LoaderSize = 'small' | 'medium' | 'large';

export interface LoaderProps {
	size?: LoaderSize;
}

export const Loader = ({ size = 'small' }: LoaderProps) => (
	<Styled.Loader data-testid={LOADER_TEST_ID} size={size}>
		<Styled.Line degree={0} />
		<Styled.Line degree={30} />
		<Styled.Line degree={60} />
		<Styled.Line degree={90} />
		<Styled.Line degree={120} />
		<Styled.Line degree={150} />
		<Styled.InnerLoader>
			<Styled.Line degree={90} />
			<Styled.Line degree={180} />
		</Styled.InnerLoader>
	</Styled.Loader>
);
