/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

import { initTable } from './init';
import { type Column } from './Table.types';

import * as Styled from './Table.styled';

export interface TableProps<T> {
	data: T[];
	columns: Array<Column<T>>;
}

export const Table = <T extends Object>(props: TableProps<T>) => {
	const { data, columns } = props;

	const { rows, headers } = initTable(data, columns);

	return (
		<Styled.Table data-testid='table_test_id'>
			<div className='thead'>
				<div className='header-row'>
					{headers.map((header, index) => (
						<div className='th' key={index}>
							{header}
						</div>
					))}
				</div>
			</div>
			<div className='tbody'>
				{rows.map(row => (
					<div className='body-row' key={row.rowIndex}>
						{row.columns.map((cell, index) => (
							<div className='td' key={cell.accessor as string}>
								{cell.render}
							</div>
						))}
					</div>
				))}
			</div>
		</Styled.Table>
	);
};
