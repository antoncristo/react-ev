import styled from 'styled-components';

export const AlertBox = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const HighestAlert = styled.div`
	position: relative;
	z-index: 2;
	width: 300px;
	height: 200px;
	background-color: white;
	border: 1px solid red;
`;
