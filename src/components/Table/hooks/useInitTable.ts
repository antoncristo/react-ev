import { type ColumnSortArguments, type Column, type SelectedRow } from '../Table.types';
import { initHeaders, initColumnWidths, initRows } from '../utils';
import { useColumnSort } from './useColumnSort';

export const useInitTable = <T extends object>(
	data: readonly T[],
	columns: Array<Column<T>>,
	sort?: ColumnSortArguments<T>,
	select?: (selectedRow: SelectedRow<T>) => void
) => {
	const { columnSortHandler, sortBy } = useColumnSort({
		columns,
		defaultColumnId: sort?.defaultColumnId,
		defaultDirection: sort?.defaultDirection,
		sortHandler: sort?.sortHandler
	});

	return {
		rows: initRows(data, columns, select),
		headers: initHeaders(columns),
		styleConfig: initColumnWidths(columns),
		sortConfig: {
			sortBy,
			columnSortHandler
		}
	};
};
