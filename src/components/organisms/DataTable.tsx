import {
  MantineReactTable,
  MRT_ColumnDef,
  MRT_PaginationState,
  MRT_TableInstance,
  useMantineReactTable,
} from 'mantine-react-table';

export interface DataTableInterface<T extends Record<string, any>> {
  data: T[];
  columns: MRT_ColumnDef<T>[];
  currentPage: number;
  pagination: MRT_PaginationState;
  previousHandler: (table: MRT_TableInstance<T>) => void;
  nextHandler: (table: MRT_TableInstance<T>) => void;
}

const DataTable = <T extends Record<string, any>>({
  data,
  columns,
  currentPage,
  pagination,
  previousHandler,
  nextHandler,
}: DataTableInterface<T>) => {
  const bottomToolbar = (table: MRT_TableInstance<T>) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '10px',
        }}
      >
        <button
          onClick={() => previousHandler(table)}
          disabled={!table.getCanPreviousPage()}
          style={{ marginRight: '8px' }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            nextHandler(table);
            table.setPageIndex(currentPage + 1);
          }}
          style={{ marginRight: '8px' }}
        >
          Next
        </button>
      </div>
    );
  };

  const table = useMantineReactTable<T>({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: true,
    enableSorting: false,
    enableBottomToolbar: true,
    paginateExpandedRows: false,
    mantineTableProps: {
      highlightOnHover: false,
      striped: true,
      withColumnBorders: true,
    },
    state: { pagination },
    renderBottomToolbar: ({ table }) => bottomToolbar(table),
  });

  return <MantineReactTable table={table} />;
};

export default DataTable;
