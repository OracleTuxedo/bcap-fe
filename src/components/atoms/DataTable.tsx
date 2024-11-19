export type DataTableColumn<Entry> = {
  title: string;
  field: keyof Entry;
  isOrderBy?: boolean;
  className?: string;
};

export type DataTableProps<Entry> = {
  // isLoading: boolean,
  data: Entry[];
  columns: DataTableColumn<Entry>[];
  // Enums? : T,
  sortDirection?: string[];
  // handleSortBy: (sortBy: keyof Entry) => void
  handleOnRowClick?: (entry: Entry) => void;
};

export const DataTable = <Entry,>({
  data,
  columns,
  handleOnRowClick,
}: DataTableProps<Entry>) => {
  if (data?.length === 0) {
    <div>No Data</div>;
  }

  return (
    <div
      className={`
            h-72
            m-2
            flex flex-col
            justify-start
            border
            text-lg
            w-[90%]
          `}
    >
      <table
        id="table-list"
        className={`
                    m-2
                    table-fixed
                    text-left
                    text-wrap
                    border-collapse
                  `}
      >
        <thead className="flex flex-row text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="flex flex-row w-[100rem] justify-between px-6 py-3 bg-main-normal"
            >
              <p className="text-center">No</p>
              {columns.map((column, index) => (
                <p key={column.title + index}>{column.title}</p>
              ))}
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((entry, entryIndex) => (
            <tr
              key={++entryIndex}
              className="flex flex-row w-[100rem] border radius-md justify-between px-6 py-3 font-medium even:bg-main-active hover"
              onClick={() => handleOnRowClick(entry)}
            >
              <td className="text-center">{entryIndex + 1}</td>
              {columns.map(({ title, field }, columnIndex) => (
                <td key={title + columnIndex}>{`${entry[field]}`}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
