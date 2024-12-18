import {
  Badge,
  CustomContainer,
  Seo,
  InputText,
  DataTable,
  CustomCard,
  InputCheckbox,
  LabelText,
  ButtonBase,
} from '@/components';
import LabelTitle from '@/components/atoms/label/title';
import { InputCell } from '@/components/molecules';
import { SizeEnum, TextColorEnum } from '@/enums';
import { SMC03F055ROutSub1Vo } from '@/service/mc/mc03/SMC03F055R';
import { Input } from '@nextui-org/react';
import { MRT_ColumnDef, MRT_TableInstance } from 'mantine-react-table';
import { useMemo, useState } from 'react';

const data1: SMC03F055ROutSub1Vo[] = Array.from(
  { length: 20 },
  (_, index) => ({
    chng_usr_id: `chng_usr_id test ${index + 1}`,
    apfm_auth_stat_cd: `apfm_auth_stat_cd test ${index + 1}`,
    aplc_seq_no: `aplc_seq_no test ${index + 1}`,
    auth_date: `auth_date test ${index + 1}`,
    auth_lev_clcd: `auth_lev_clcd test ${index + 1}`,
    chng_aftr_ctnts: `chng_aftr_ctnts test ${index + 1}`,
    chng_bef_ctnts: `chng_bef_ctnts test ${index + 1}`,
    chng_pgm_id: `chng_pgm_id test ${index + 1}`,
    data_chng_dttm: `data_chng_dttm test ${index + 1}`,
    data_inp_dttm: `data_inp_dttm test ${index + 1}`,
    info_chng_tp_cd: `info_chng_tp_cd test ${index + 1}`,
    inp_pgm_id: `inp_pgm_id test ${index + 1}`,
    inp_usr_id: `inp_usr_id test ${index + 1}`,
    mid: `mid test ${index + 1}`,
  }),
);

const data2: SMC03F055ROutSub1Vo[] = Array.from(
  { length: 50 },
  (_, index) => ({
    chng_usr_id: `chng_usr_id test test ${index + 21}`,
    apfm_auth_stat_cd: `apfm_auth_stat_cd test test ${index + 21}`,
    aplc_seq_no: `aplc_seq_no test test ${index + 21}`,
    auth_date: `auth_date test test ${index + 21}`,
    auth_lev_clcd: `auth_lev_clcd test test ${index + 21}`,
    chng_aftr_ctnts: `chng_aftr_ctnts test test ${index + 21}`,
    chng_bef_ctnts: `chng_bef_ctnts test test ${index + 21}`,
    chng_pgm_id: `chng_pgm_id test test ${index + 21}`,
    data_chng_dttm: `data_chng_dttm test test ${index + 21}`,
    data_inp_dttm: `data_inp_dttm test test ${index + 21}`,
    info_chng_tp_cd: `info_chng_tp_cd test test ${index + 21}`,
    inp_pgm_id: `inp_pgm_id test test ${index + 21}`,
    inp_usr_id: `inp_usr_id test test ${index + 21}`,
    mid: `mid test     ${index + 21}`,
  }),
);

const UiPage = () => {
  const [CheckboxState, setCheckboxState] = useState<boolean>(false);
  const [CheckboxCellState, setCheckboxCellState] =
    useState<boolean>(false);
  const [InputState, setInputState] = useState<string>('');
  const [InputCellState, setInputCellState] = useState<string>('');

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

  const [listData, setListData] = useState<SMC03F055ROutSub1Vo[]>(data1);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const nextHandler = (table: MRT_TableInstance<SMC03F055ROutSub1Vo>) => {
    const isLastPage = !table.getCanNextPage();

    if (isLastPage) {
      setListData((prev) => [...prev, ...data2]);
    }
    setCurrentPage((prev) => prev + 1);
    setPagination((prev) => ({ ...prev, pageIndex: currentPage + 1 }));
  };

  const previousHandler = (
    table: MRT_TableInstance<SMC03F055ROutSub1Vo>,
  ) => {
    const isFirstPage = table.getState().pagination.pageIndex === 0;

    if (!isFirstPage) {
      setCurrentPage((prev) => prev - 1);
      setPagination((prev) => ({ ...prev, pageIndex: currentPage - 1 }));
    }
  };

  return (
    <CustomContainer>
      <Seo title="MAAS UI" />
      <CustomContainer>
        <LabelText>MAAS Web Front End and UI Page</LabelText>

        <LabelTitle>Title</LabelTitle>

        <ButtonBase onClickHandler={(e) => console.log(e)}>
          <LabelText color={TextColorEnum.WHITE} size={SizeEnum.NORMAL}>
            TEST
          </LabelText>
        </ButtonBase>

        <Badge>
          <LabelText>Tester</LabelText>
        </Badge>

        <InputCheckbox
          label="Test Checkbox"
          name="test"
          value={CheckboxState}
          onChangeHandler={() => {
            setCheckboxState((prev) => !prev);
          }}
        />

        <Input
          type="date"
          label="Date"
          onChange={(e) => console.log(e.target.value)}
        />

        <InputText
          label="input-test"
          name="input-test"
          value={InputState}
          onChangeHandler={(e: React.FormEvent<HTMLInputElement>) =>
            setInputState(e.currentTarget.value)
          }
        />

        <CustomContainer gap>
          <InputCell label="Test Checkbox" required>
            <InputCheckbox
              name="test-checkbox-cell"
              onChangeHandler={() => {
                setCheckboxCellState((prev) => !prev);
              }}
              value={CheckboxCellState}
            />
          </InputCell>

          <InputCell label="Test Input">
            <InputText
              name="input-test-cell"
              label="input-test-cell"
              value={InputCellState}
              onChangeHandler={(e: React.FormEvent<HTMLInputElement>) =>
                setInputCellState(e.currentTarget.value)
              }
            />
          </InputCell>
        </CustomContainer>
        <DataTable<SMC03F055ROutSub1Vo>
          data={listData}
          columns={columns}
          currentPage={currentPage}
          pagination={pagination}
          nextHandler={nextHandler}
          previousHandler={previousHandler}
        />
      </CustomContainer>
      <CustomCard>
        <CustomContainer>
          <ul>
            <li>
              List List List List List List List List List List List List
              List List List List List List List List List List List List
              List List
            </li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
            <li>List</li>
          </ul>
        </CustomContainer>
      </CustomCard>
    </CustomContainer>
  );
};

export default UiPage;
