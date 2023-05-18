import React, { type HTMLAttributes } from 'react';

import { initTable } from './init';
import { type Column } from './Table.types';

import * as Styled from './Table.styled';

export interface TableProps<T> extends HTMLAttributes<HTMLDivElement> {
	data: T[];
	columns: Array<Column<T>>;
}

export const Table = <T extends object>(props: TableProps<T>) => {
	const { data, columns, ...rest } = props;

	const { rows, headers, widthConfig } = initTable(data, columns);

	return (
		<Styled.Table data-testid='table_test_id' {...rest}>
			<div className='thead'>
				<div className='header-row'>
					{headers.map((header, index) => (
						<div key={index} className='th' style={widthConfig(header.columnId)}>
							{header.cell}
						</div>
					))}
				</div>
			</div>
			<div className='tbody'>
				{rows.map(row => (
					<div className='body-row' key={row.rowIndex}>
						{row.columns.map((cell, index) => (
							<div
								className='td'
								key={cell.columnId as string}
								style={widthConfig(cell.columnId)}
							>
								{cell.render}
							</div>
						))}
					</div>
				))}
			</div>
		</Styled.Table>
	);
};
