import { type MouseEventHandler } from 'react';

export interface Cell<T> {
	init: (cell: T) => JSX.Element;
}

export interface Column<T> {
	columnId: keyof T;
	header: string | JSX.Element;
	cell: Cell<T>;
	maxWidth?: string;
	width?: string;
	isSortable?: boolean;
}

export interface TableColumn<T> {
	columnId: keyof T;
	header: string | JSX.Element;
	render: JSX.Element;
}

export interface Row<T> {
	rowIndex: number;
	columns: Array<TableColumn<T>>;
	onSelect: MouseEventHandler;
}

export type SortDirection = 'asc' | 'desc';

export interface Sorter<T extends object> {
	columnId: keyof T | undefined;
	direction: SortDirection;
}

export interface ColumnSortArguments<T extends object> {
	columns: Array<Column<T>>;
	sortHandler?: (sortBy: Partial<Sorter<T>>) => void;
	defaultColumnId?: keyof T;
	defaultDirection?: SortDirection;
}

export interface SelectedRow<T extends object> {
	data: T;
	rowIndex: number;
}
