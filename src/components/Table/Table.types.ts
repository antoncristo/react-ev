export interface Cell<T> {
	render: (cell: T) => JSX.Element;
	maxWidth?: string;
}

export interface Column<T> {
	accessor: keyof T;
	header: string | JSX.Element;
	cell: Cell<T>;
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
