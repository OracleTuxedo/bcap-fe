import { Button, Dropdown, InputText, Loading } from '@/components';
import { ButtonTypeEnum } from '@/enums';
import { MainLayout } from '@/layout';
import { dropdownOptionsInterface } from '@/types';
import { ChangeEvent, ReactElement, useState } from 'react';
import { callSAZ02F110R, callSAZ02F114R } from '@/services';
import {
  SAZ02F110RInVo,
  SAZ02F110ROutVo,
  SAZ02F114RInVo,
  SAZ02F114ROutVo,
} from '@/dto';
import { mockupCallSAZ02F110R, mockupCallSAZ02F114R } from '@/services/mockup';
import {
  AddGroupCodeList,
  addNewGroupCode,
} from '@/components/organisms/az/waz0211000/AddGroupCodeList';

const systemDivisionData: dropdownOptionsInterface[] = [
  { value: '', label: 'All' },
  { value: 'SFA', label: 'SFA' },
  { value: 'MER', label: 'Merchant' },
  { value: 'MMP', label: 'MMP' },
  { value: 'TMS', label: 'TMS' },
  { value: 'WDS', label: 'WDS' },
  { value: 'AUT', label: 'Authorization' },
  { value: 'ACA', label: 'Clearing & Settlement' },
  { value: 'MET', label: 'Metering' },
  { value: 'AZA', label: 'Admin & Common' },
  { value: 'EXT', label: 'External' },
];

const useStatusData: dropdownOptionsInterface[] = [
  { value: '', label: 'All' },
  { value: 'U', label: 'Valid' },
  { value: 'D', label: 'Not Valid' },
];

const useStatusOptionValue: dropdownOptionsInterface[] = [
  { value: 'U', label: 'Valid' },
  { value: 'D', label: 'Not Valid' },
];

const WAZ021100 = () => {
  const screenId = 'WSZ0211000';
  const [outVoSAZ02F110R, setOutVoSAZ02F110R] = useState<SAZ02F110ROutVo>();
  const [outVoSAZ02F114R, setOutVoSAZ02F114R] = useState<SAZ02F114ROutVo>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [bizCtgoCd, setBizCtgoCd] = useState<string>('');
  const [dataStatCd, setDataStatCd] = useState<string>('');
  const [grupCdId, setGrupCdId] = useState<string>('');
  const [langClcd, setLangClcd] = useState<string>('EN');
  const [msgNm, setMsgNm] = useState<string>('');
  const [pageNo, setPageNo] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);

  const favoriteHandler = () => {
    setIsFavorite((prev) => !prev);
  };
  const [selectedRow, setSelectedRow] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handlerCloseModal = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleSelectRow = (id: string) => {
    if (selectedRow.includes(id)) {
      setSelectedRow(selectedRow.filter((rowId) => rowId !== id));
    } else {
      setSelectedRow([...selectedRow, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRow([]);
    } else {
      setSelectedRow(outVoSAZ02F110R.sub1_vos.map((item) => item.grup_cd_id));
    }

    setSelectAll(!selectAll);
  };

  const onClickSearch = async () => {
    setLoading(() => true);
    try {
      const data: SAZ02F110RInVo = new SAZ02F110RInVo();
      data.biz_ctgo_cd = bizCtgoCd;
      data.data_stat_cd = dataStatCd;
      data.grup_cd_id = grupCdId;
      data.lang_clcd = langClcd;
      data.msg_nm = msgNm;
      data.page_no = pageNo;
      data.page_size = pageSize;

      const listData = await callSAZ02F110R(screenId, data).catch((err) => {
        throw new Error(err);
      });
      // const listData = await mockupCallSAZ02F110R()
      setOutVoSAZ02F110R(listData);
      setLoading(() => false);
    } catch (error) {
      setLoading(() => false);
      console.log(error);
    }
  };

  const viewDetail = async (
    bizCtgoCdDetail: string,
    grupCdIdDetail: string,
    langClcdDetail: string,
  ) => {
    setLoading(() => true);
    try {
      const data: SAZ02F114RInVo = new SAZ02F114RInVo();
      data.biz_ctgo_cd = bizCtgoCdDetail;
      data.grup_cd_id = grupCdIdDetail;
      data.lang_clcd = langClcdDetail;
      data.page_no = pageNo;
      data.page_size = pageSize;

      const listData = await callSAZ02F114R(screenId, data).catch((err) => {
        throw new Error(err);
      });
      // const listData = await mockupCallSAZ02F114R();
      setOutVoSAZ02F114R(listData);
      setLoading(() => false);
    } catch (error) {
      setLoading(() => false);
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <MainLayout
      screenId="AZ0211000"
      screenName="Common Code Management"
      isFavorite={isFavorite}
      favoriteHandler={favoriteHandler}
    >
      <div
        id="content"
        className={`
          w-full
        `}
      >
        <div
          id="search"
          className={`
            mx-2 py-2
            flex flex-row
            border
            text-md
            justify-between
            bg-sidebar-active
          `}
        >
          <div id="input" className="flex">
            <div
              id="system-division"
              className={`
                flex flex-row
                font-medium
                items-center
              `}
            >
              <label
                className={`
                  mx-2
                `}
              >
                System Division
              </label>
              <Dropdown
                name="system-division"
                options={systemDivisionData}
                value={bizCtgoCd}
                onChangeHandler={(e) => setBizCtgoCd(e.target.value)}
              />
            </div>
            <div
              id="group-code"
              className={`
                flex flex-row
                font-medium
                items-center
              `}
            >
              <label
                className={`
                  mx-2
                `}
              >
                Group Code
              </label>
              <InputText
                name="group-code"
                value={grupCdId}
                onChangeHandler={(e: ChangeEvent<HTMLInputElement>) =>
                  setGrupCdId(e.target.value)
                }
              />
            </div>
            <div
              id="group-code-name"
              className={`
                flex flex-row
                font-medium
                items-center
              `}
            >
              <label
                className={`
                  mx-2
                `}
              >
                Group Code Name
              </label>
              <InputText
                name="group-code-name"
                value={msgNm}
                onChangeHandler={(e: ChangeEvent<HTMLInputElement>) =>
                  setMsgNm(e.target.value)
                }
              />
            </div>
            <div
              id="use-status"
              className={`
                flex flex-row
                font-medium
                items-center
              `}
            >
              <label
                className={`
                  mx-2
                `}
              >
                Use Status
              </label>
              <Dropdown
                name="use-status"
                options={useStatusData}
                value={dataStatCd}
                onChangeHandler={(e) => setDataStatCd(e.target.value)}
              />
            </div>
          </div>

          <div
            id="searchButton"
            className={`
              mx-2
            `}
          >
            <Button
              type={ButtonTypeEnum.DEFAULT}
              onClickHandler={onClickSearch}
              white
            >
              Search
            </Button>
          </div>
        </div>

        <div
          id="list"
          className={`
            h-96
            m-2
            flex flex-col
            justify-start
            border
            text-lg
          `}
        >
          <div
            id="table-header"
            className={`
              mt-4 mb-2
              flex flex-row
              justify-between
              items-center
            `}
          >
            <label
              className={`
                py-2
                mx-8
              `}
            >
              List
            </label>

            <div
              id="add-list-button"
              className={`
                px-8
              `}
            >
              <Button
                type={ButtonTypeEnum.SUCCESS}
                onClickHandler={handleOpenModal}
                white
              >
                Add
              </Button>
            </div>
            <AddGroupCodeList
              open={open}
              onClose={handlerCloseModal}
              onConfirm={(data: addNewGroupCode) => console.log(data)}
            />
          </div>
          <div
            className={`
            overflow-x-auto
          `}
          >
            <table
              id="table-list"
              className={`
                  text-left
                  text-wrap
                  border-collapse
                  w-full
                  min-w-full
                `}
            >
              <thead
                className={`
                    bg-main-normal
                  `}
              >
                <tr>
                  <th className={`px-2 py-1`}>No</th>
                  <th className={`px-2 py-1`}>System Division</th>
                  <th className={`px-2 py-1`}>Group Code</th>
                  <th className={`px-2 py-1`}>Group Code Name</th>
                  <th className={`px-2 py-1`}>Use Status</th>
                  <th className={`px-2 py-1`}>Description</th>
                  <th className={`px-2 py-1`}>Action</th>
                </tr>
              </thead>
              <tbody>
                {outVoSAZ02F110R &&
                  outVoSAZ02F110R.sub1_vos.map((item, index) => {
                    return (
                      <tr
                        key={`list-data-SMC03F054R-${index}`}
                        className={`
                          even:bg-main-active
                        `}
                      >
                        <td className={`px-2 py-1`}>{index + 1}</td>
                        <td className={`px-2 py-1`}>{item.biz_ctgo_cd}</td>
                        <td className={`px-2 py-1`}>{item.grup_cd_id}</td>
                        <td className={`px-2 py-1`}>{`${item.msg_nm}`}</td>
                        <td className={`px-2 py-1`}>
                          {item.data_stat_cd == 'U' ? 'Valid' : 'Not Valid'}
                        </td>
                        <td className={`text-wrap px-2 py-1`}>
                          {item.cd_expl}
                        </td>
                        <td className={`px-2 py-1 flex flex-1`}>
                          <Button
                            type={ButtonTypeEnum.SUCCESS}
                            onClickHandler={() => {
                              viewDetail(
                                item.biz_ctgo_cd,
                                item.grup_cd_id,
                                'EN',
                              );
                            }}
                            small
                          >
                            View
                          </Button>
                          <Button
                            type={ButtonTypeEnum.WARNING}
                            onClickHandler={() => {
                              console.log(`update for ${item.grup_cd_id}`);
                            }}
                            small
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        <div
          id="detail-list"
          className={`
            flex flex-col
            justify-start
            border
            h-80
            m-2
            text-lg
          `}
        >
          <div
            id="table-header"
            className={`
              mt-4 mb-2
              flex flex-row
              justify-between
              items-center
            `}
          >
            <label
              className={`
                py-2
                mx-8
              `}
            >
              Detail List
            </label>

            <div
              id="add-detail-button"
              className={`
                px-8
              `}
            >
              <Button
                type={ButtonTypeEnum.SUCCESS}
                onClickHandler={() => console.log('add detail')}
                white
              >
                Add
              </Button>
            </div>
          </div>

          <div
            className={`
            overflow-x-auto
          `}
          >
            <table
              id="table-detail"
              className={`
                  text-left
                  text-wrap
                  border-collapse
                  w-full
                  min-w-full
                `}
            >
              <thead
                className={`
                    bg-main-normal
                  `}
              >
                <tr>
                  <th className={`px-2 py-1`}>
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectAll}
                    />
                  </th>
                  <th className={`px-2 py-1`}>No</th>
                  <th className={`px-2 py-1`}>Group Code ID</th>
                  <th className={`px-2 py-1`}>Detail Code ID</th>
                  <th className={`px-2 py-1`}>Code Name</th>
                  <th className={`px-2 py-1`}>Sort No</th>
                  <th className={`px-2 py-1`}>Use Status</th>
                  <th className={`px-2 py-1`}>Description</th>
                  <th className={`px-2 py-1`}>Ext 1</th>
                  <th className={`px-2 py-1`}>Ext 2</th>
                  <th className={`px-2 py-1`}>Display Option</th>
                  <th className={`px-2 py-1`}>Action</th>
                </tr>
              </thead>
              <tbody>
                {outVoSAZ02F114R &&
                  outVoSAZ02F114R.sub1_vos.map((item, index) => {
                    return (
                      <tr
                        key={`list-detail-data-SAZ02F114R-${++index}`}
                        className={`
                          even:bg-main-active
                        `}
                      >
                        <td className={`px-2 py-1`}>
                          <input
                            type="checkbox"
                            checked={selectedRow.includes(item.cmmn_cd_id)}
                            onChange={() => handleSelectRow(item.cmmn_cd_id)}
                          />
                        </td>
                        <td className={`px-2 py-1`}>{index + 1}</td>
                        <td className={`px-2 py-1`}>{item.cmmn_cd_id}</td>
                        <td className={`px-2 py-1`}>{item.dtl_cd_id}</td>
                        <td className={`px-2 py-1`}>{item.msg_nm}</td>
                        <td className={`px-2 py-1`}>{item.sort_seq}</td>
                        <td className={`px-2 py-1`}>
                          {item.data_stat_cd == 'U' ? 'Valid' : 'Not Valid'}
                        </td>
                        <td className={`px-2 py-1`}>{item.cd_expl}</td>
                        <td className={`px-2 py-1`}>{item.clss_info_val1}</td>
                        <td className={`px-2 py-1`}>{item.clss_info_val2}</td>
                        <td className={`px-2 py-1`}>{item.clss_info_val3}</td>
                        <td className={`px-2 py-1`}>
                          <Button
                            type={ButtonTypeEnum.WARNING}
                            onClickHandler={() => {
                              console.log(
                                `update for ${item.cmmn_cd_id}${item.dtl_cd_id}`,
                              );
                            }}
                            small
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

WAZ021100.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default WAZ021100;
