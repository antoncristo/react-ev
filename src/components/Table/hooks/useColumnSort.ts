import { type MouseEventHandler, useState } from 'react';
import {
	type ColumnSortArguments,
	type SortDirection,
	type Sorter
} from '../Table.types';

export const useColumnSort = <T extends object>(args: ColumnSortArguments<T>) => {
	const { columns, defaultColumnId, defaultDirection, sortHandler } = args;

	const [sortBy, setSortBy] = useState<Partial<Sorter<T>>>({
		columnId: defaultColumnId ?? undefined,
		direction: defaultDirection ?? 'desc'
	});

	const getColumnSortHandler = () => {
		const _columnsSortHandler: Record<string, MouseEventHandler> = {};

		columns.forEach(column => {
			if (column.isSortable && sortHandler) {
				_columnsSortHandler[column.columnId as string] = () => {
					const _direction: SortDirection = sortBy.direction === 'asc' ? 'desc' : 'asc';
					const _columnId = column.columnId;
					const _sortBy = { columnId: _columnId, direction: _direction };
					setSortBy(_sortBy);
					sortHandler(_sortBy);
				};
			} else {
				_columnsSortHandler[column.columnId as string] = () => null;
			}
		});

		return _columnsSortHandler;
	};

	return {
		sortBy,
		columnSortHandler: getColumnSortHandler()
	};
};
