import { type CSSProperties } from 'react';
import { type Row, type Column, type TableColumn } from './Table.types';

const initColumns = <T extends object>(
	rowDataItem: T,
	columns: Array<Column<T>>
): Array<TableColumn<T>> => {
	const _columns: Array<TableColumn<T>> = [];

	columns.forEach(column => {
		_columns.push({
			columnId: column.columnId,
			header: column.header,
			render: column.cell.init(rowDataItem)
		});
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
	columns.map(col => {
		return { cell: col.header, columnId: col.columnId };
	});

const getColumnWidths = <T extends object>(columns: Array<Column<T>>) => {
	const columnStyle: Record<string, CSSProperties> = {};

	columns.forEach(col => {
		columnStyle[col.columnId as string] = {};

		if (col.maxWidth) {
			columnStyle[col.columnId as string].maxWidth = col.maxWidth;
		}

		if (col.width) {
			columnStyle[col.columnId as string].width = col.width;
		}
	});

	return <T extends object>(columnId: Column<T>['columnId']) =>
		columnStyle[columnId as string];
};

export const initTable = <T extends object>(
	data: readonly T[],
	columns: Array<Column<T>>
) => {
	return {
		rows: initRows(data, columns),
		headers: getHeaders(columns),
		widthConfig: getColumnWidths(columns)
	};
};
