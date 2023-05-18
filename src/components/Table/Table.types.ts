export interface Cell<T> {
	init: (cell: T) => JSX.Element;
}

export interface Column<T> {
	accessor: keyof T;
	header: string | JSX.Element;
	cell: Cell<T>;
	maxWidth?: string;
}

export interface TableColumn<T> {
	accessor: keyof T;
	header: string | JSX.Element;
	render: JSX.Element;
}

export interface Row<T> {
	rowIndex: number;
	columns: Array<TableColumn<T>>;
}
