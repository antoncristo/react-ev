import { type CSSProperties } from 'react';
import {
	type Row,
	type Column,
	type TableColumn,
	type SelectedRow
} from '../table.types';

export const initColumns = <T extends object>(
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

export const initRows = <T extends object>(
	data: readonly T[],
	columns: Array<Column<T>>,
	select?: (selectedRow: SelectedRow<T>) => void
): Array<Row<T>> => {
	const _tableRows: Array<Row<T>> = [];

	if (!data.length || !columns.length) {
		return _tableRows;
	}

	data.forEach((rowDataItem: T, rowIndex: number) => {
		const _row: Row<T> = {
			rowIndex,
			onSelect: select
				? () => {
						select({ data: rowDataItem, rowIndex });
				  }
				: () => null,
			columns: initColumns(rowDataItem, columns)
		};

		_tableRows.push(_row);
	});

	return _tableRows;
};

export const initHeaders = <T extends object>(columns: Array<Column<T>>) =>
	columns.map(col => {
		return { cell: col.header, columnId: col.columnId };
	});

export const initColumnWidths = <T extends object>(columns: Array<Column<T>>) => {
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
