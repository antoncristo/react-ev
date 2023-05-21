import styled from 'styled-components';

export const Table = styled.div`
	box-sizing: border-box;

	display: flex;
	flex-direction: column;

	.thead {
		.header-row {
			display: flex;

			.th {
				width: 100%;
			}
		}
	}

	.tbody {
		overflow: auto;

		.body-row {
			display: flex;

			.td {
				width: 100%;
			}
		}
	}
`;
