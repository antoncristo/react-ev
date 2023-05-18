import { type Row, type Column, type TableColumn } from './Table.types';

const initColumns = <T extends object>(
	rowDataItem: T,
	columns: Array<Column<T>>
): Array<TableColumn<T>> => {
	const _columns: Array<TableColumn<T>> = [];

	Object.keys(rowDataItem).forEach(key => {
		const _columnByKey = columns.find(columnConfig => columnConfig.accessor === key);

		if (_columnByKey) {
			_columns.push({
				accessor: _columnByKey.accessor,
				header: _columnByKey.header,
				render: _columnByKey.cell.init(rowDataItem)
			});
		}
	});

	return _columns;
};

const initRows = <T extends object>(
	data: readonly T[],
	columns: Array<Column<T>>
): Array<Row<T>> => {
	const _tableRows: Array<Row<T>> = [];

	if (!data.length || !columns.length) {
		return _tableRows;
	}

	data.forEach((rowDataItem: T, rowIndex: number) => {
		const _row: Row<T> = { rowIndex, columns: initColumns(rowDataItem, columns) };

		_tableRows.push(_row);
	});

	return _tableRows;
};

const getHeaders = <T extends object>(columns: Array<Column<T>>) =>
	columns.map(col => col.header);

export const initTable = <T extends object>(
	data: readonly T[],
	columns: Array<Column<T>>
) => {
	return {
		rows: initRows(data, columns),
		headers: getHeaders(columns)
		// Implement column max width
	};
};
