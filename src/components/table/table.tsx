import React, { type HTMLAttributes } from 'react';

import {
	type Sorter,
	type Column,
	type SortDirection,
	type SelectedRow
} from './table.types';
import { useInitTable } from './hooks';

import * as Styled from './table.styled';

export interface TableProps<T extends object> extends HTMLAttributes<HTMLDivElement> {
	data: T[];
	columns: Array<Column<T>>;
	sortSetup?: {
		handler?: (sortBy: Partial<Sorter<T>>) => void;
		defaultSortBy?: keyof T;
		defaultDirection?: SortDirection;
	};
	selectSetup?: (selectedRow: SelectedRow<T>) => void;
}

/**
 * @description generic table element
 * @param data the data array of any object type
 * @param columns a configuration array of columns (see Column type)
 * @param sortSetup (optional) if sort needed, sort configuration object is required
 * @param selectSetup (optional) if row selection functionality needed, define this handler
 */
export const Table = <T extends object>(props: TableProps<T>) => {
	const { data, columns, sortSetup, selectSetup, ...rest } = props;
	const sortArgs = {
		columns,
		defaultColumnId: sortSetup?.defaultSortBy,
		sortHandler: sortSetup?.handler,
		defaultDirection: sortSetup?.defaultDirection
	};

	const { rows, headers, styleConfig, sortConfig } = useInitTable(
		data,
		columns,
		sortArgs,
		selectSetup
	);
	const { columnSortHandler } = sortConfig;

	return (
		<Styled.Table data-testid='table_test_id' {...rest}>
			<div className='thead'>
				<div className='header-row'>
					{headers.map((header, index) => (
						<div
							key={index}
							className='th'
							style={styleConfig(header.columnId)}
							onClick={columnSortHandler[header.columnId as string]}
						>
							{header.cell}
						</div>
					))}
				</div>
			</div>
			<div className='tbody'>
				{rows.map(row => (
					<div className='body-row' onClick={row.onSelect} key={row.rowIndex}>
						{row.columns.map((cell, index) => (
							<div
								className='td'
								key={cell.columnId as string}
								style={styleConfig(cell.columnId)}
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
