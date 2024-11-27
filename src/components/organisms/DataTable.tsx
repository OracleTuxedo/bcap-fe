import { useMemo, useState } from 'react';
import {
  MantineReactTable,
  MRT_ColumnDef,
  useMantineReactTable,
} from 'mantine-react-table';
import { SMC03F055ROutSub1Vo } from '@/service/mc/mc03/SMC03F055R';

const DataTable = () => {
  const data2: SMC03F055ROutSub1Vo[] = Array.from(
    { length: 50 },
    (_, index) => ({
      chng_usr_id: `chng_usr_id test${index + 1}`,
      apfm_auth_stat_cd: `apfm_auth_stat_cd test${index + 1}`,
      aplc_seq_no: `aplc_seq_no test${index + 1}`,
      auth_date: `auth_date test${index + 1}`,
      auth_lev_clcd: `auth_lev_clcd test${index + 1}`,
      chng_aftr_ctnts: `chng_aftr_ctnts test${index + 1}`,
      chng_bef_ctnts: `chng_bef_ctnts test${index + 1}`,
      chng_pgm_id: `chng_pgm_id test${index + 1}`,
      data_chng_dttm: `data_chng_dttm test${index + 1}`,
      data_inp_dttm: `data_inp_dttm test${index + 1}`,
      info_chng_tp_cd: `info_chng_tp_cd test${index + 1}`,
      inp_pgm_id: `inp_pgm_id test${index + 1}`,
      inp_usr_id: `inp_usr_id test${index + 1}`,
      mid: `mid test${index + 1}`,
    }),
  );

  const data1: SMC03F055ROutSub1Vo[] = Array.from(
    { length: 25 },
    (_, index) => ({
      chng_usr_id: `chng_usr_id test${index + 51}`,
      apfm_auth_stat_cd: `apfm_auth_stat_cd test${index + 51}`,
      aplc_seq_no: `aplc_seq_no test${index + 51}`,
      auth_date: `auth_date test${index + 51}`,
      auth_lev_clcd: `auth_lev_clcd test${index + 51}`,
      chng_aftr_ctnts: `chng_aftr_ctnts test${index + 51}`,
      chng_bef_ctnts: `chng_bef_ctnts test${index + 51}`,
      chng_pgm_id: `chng_pgm_id test${index + 51}`,
      data_chng_dttm: `data_chng_dttm test${index + 51}`,
      data_inp_dttm: `data_inp_dttm test${index + 51}`,
      info_chng_tp_cd: `info_chng_tp_cd test${index + 51}`,
      inp_pgm_id: `inp_pgm_id test${index + 51}`,
      inp_usr_id: `inp_usr_id test${index + 51}`,
      mid: `mid test${index + 51}`,
    }),
  );

  const [listData, setListData] = useState<SMC03F055ROutSub1Vo[]>(data1);

  const columns = useMemo<MRT_ColumnDef<SMC03F055ROutSub1Vo>[]>(
    () => [
      {
        accessorKey: 'mid',
        header: 'MID',
      },
      {
        accessorKey: 'data_chng_dttm',
        header: 'Change Date',
      },
      {
        accessorKey: 'auth_date',
        header: 'Auth Date',
      },
      {
        accessorKey: 'chng_usr_id',
        header: 'User Changer ID',
      },
      {
        accessorKey: 'aplc_seq_no',
        header: 'Sequence Number',
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data: listData,
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
    mantinePaginationProps: {
      withEdges: false,
    },
    renderBottomToolbar: ({ table }) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '10px',
        }}
      >
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          style={{ marginRight: '8px' }}
        >
          Previous
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
      </div>
    ),
  });

  return <MantineReactTable table={table} />;
};

export default DataTable;
