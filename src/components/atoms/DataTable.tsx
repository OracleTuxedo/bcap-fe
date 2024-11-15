

export type DataTableColumn<Entry> = {
    title: string;
    field: keyof Entry
    isOrderBy?: boolean
    className?: string
}

export type DataTableProps<Entry, T = void> = {
    // isLoading: boolean,
    data: Entry[],
    columns: DataTableColumn<Entry>[],
    Enums? : T,
    sortDirection?: string[],
    handleSortBy: (sortBy: keyof Entry) => void
    render?: ({entry}: {entry: Entry}) => void
}

export const DataTable = <Entry, T extends object | string | number>({ data, columns, handleSortBy}: DataTableProps<Entry, T>) => {
    if(data?.length === 0 ){
        <div>No Data</div>
    }

    return (
        <div>
            <div>
                <table>
                    <thead></thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    )
} 