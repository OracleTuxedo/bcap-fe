import { Button, Dropdown, InputText, Loading } from '@/components';
import { ButtonTypeEnum, TabEnum } from '@/enums';
import { MainLayout } from '@/layout';
import { dropdownOptionsInterface } from '@/types';
import { ChangeEvent, ReactElement, useState } from 'react';
import { callSAZ02F110R, callSAZ02F114R } from '@/services';
import {
  SAZ02F110RInVo,
  SAZ02F110ROutSub1Vo,
  SAZ02F110ROutVo,
  SAZ02F114RInVo,
  SAZ02F114ROutSub1Vo,
  SAZ02F114ROutVo,
} from '@/dto';
import { mockupCallSAZ02F110R, mockupCallSAZ02F114R } from '@/services/mockup';
import { AddGroupCodeList } from '@/pages/az/waz0211000/AddGroupCodeList';
import { AddDetailCodeList } from '@/pages/az/waz0211000/AddDetailCodeList';
import { UpdateGroupCodeList } from '@/pages/az/waz0211000/updateGroupCodeList';
import {
  UpdateDetailCodeList,
  UpdateNewDetailCode,
} from './updateDetailCodeList';
import { MenuItem } from '@/components/organisms/Sidebar';

const systemDivisionData: dropdownOptionsInterface[] = [
  { value: '', label: 'All' },
  { value: 'SFA', label: 'SFA' },
  { value: 'MCA', label: 'Merchant' },
  { value: 'MMP', label: 'MMP' },
  { value: 'TMS', label: 'TMS' },
  { value: 'WDS', label: 'WDS' },
  { value: 'AUT', label: 'Authorization' },
  { value: 'ACA', label: 'Clearing & Settlement' },
  { value: 'MTA', label: 'Metering' },
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

export interface detailGroupCredential {
  data: UpdateNewDetailCode;
  biz_ctgo_cd: string;
  grup_cd_id: string;
}

export interface groupListModal {
  isOpen : boolean;
  biz_ctgo_cd : string
  group_cd_id : string
  cd_expl : string
  data_stat_cd : string
  msg_nm : string[]
}
export interface groupDetailModal {
  isOpen : boolean;
  cd_expl : string
  cmmn_cd_id : string
  data_stat_cd : string
  dtl_cd_id : string
  sort_req : number
  msg_nm : string[]
  clss_info_val1 : string
  clss_info_val2 : string
  clss_info_val3 : string
}

const menuItems: MenuItem[] = [
  { name: 'Admin', children: [{ name: 'Common Code Management' }]},
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
  const [openGroupCodeModal, setOpenGroupCodeModal] = useState<boolean>(false);
  const [openDetailCodeModal, setOpenDetailCodeModal] = useState<boolean>(false);

  const favoriteHandler = () => {
    setIsFavorite((prev) => !prev);
  };

  const [detailCredential, setDetailCredential] =
    useState<detailGroupCredential>({
      biz_ctgo_cd: '',
      grup_cd_id: '',
      data: {
        cd_expl: '',
        cmmn_cd_id: '',
        dtl_cd_id: '',
        sort_req: 0,
        data_stat_cd: '',
        msg_nm: ['', ''],
        clss_info_val1: '',
        clss_info_val2: '',
        clss_info_val3: '',
      },
    });

    const [updateListValue, setUpdateListValue] = useState<groupListModal>({
      isOpen : false,
      biz_ctgo_cd : '',
      group_cd_id : '',
      cd_expl : '',
      data_stat_cd : '',
      msg_nm : ['', '']
    })
    
    const [updateDetailValue, setUpdateDetailValue] = useState<groupDetailModal>({
      isOpen : false,
      cd_expl : '',
      cmmn_cd_id : '',
      data_stat_cd : '',
      dtl_cd_id : '',
      sort_req : 0,
      msg_nm : ['',''],
      clss_info_val1 : '',
      clss_info_val2 : '',
      clss_info_val3 : '',
    })
  

  const handlerCloseGroupCodeModal = () => {
    setOpenGroupCodeModal(false);
  };

  const handleOpenGroupCodeModal = () => {
    setOpenGroupCodeModal(true);
  };

  const handlerCloseDetailCodeModal = () => {
    setOpenDetailCodeModal(false);
  };

  const handleOpenDetailCodeModal = () => {
    setOpenDetailCodeModal(true);
  };

  const handlerCloseUpdateModal = () => {
    setUpdateListValue({
      isOpen : false,
      biz_ctgo_cd : '',
      cd_expl : '',
      data_stat_cd : '',
      group_cd_id : '',
      msg_nm : ['',''],
    });
  };

  const handleOpenUpdateModal = (data : SAZ02F110ROutSub1Vo) => {
    setUpdateListValue({
      isOpen : true,
      biz_ctgo_cd : data.biz_ctgo_cd,
      cd_expl : data.cd_expl,
      data_stat_cd : data.data_stat_cd,
      group_cd_id : data.grup_cd_id,
      msg_nm : [data.msg_nm[0], data.msg_nm[1]],
    });
  };

  const handlerCloseDetailCodeUpdateModal = () => {
    setUpdateDetailValue({
      isOpen : false,
      cd_expl : '',
      cmmn_cd_id : '',
      data_stat_cd : '',
      dtl_cd_id : '',
      sort_req : 0,
      msg_nm : ['',''],
      clss_info_val1 : '',
      clss_info_val2 : '',
      clss_info_val3 : '',
    })
  };

  const handleOpenDetailCodeUpdateModal = (data : SAZ02F114ROutSub1Vo, index : number) => {
    setUpdateDetailValue({
      isOpen : true,
      cd_expl : data.cd_expl,
      cmmn_cd_id : data.cmmn_cd_id,
      data_stat_cd : data.data_stat_cd,
      dtl_cd_id : data.dtl_cd_id,
      sort_req : index,
      msg_nm : [data.msg_nm[0],data.msg_nm[0]],
      clss_info_val1 : data.clss_info_val1,
      clss_info_val2 : data.clss_info_val2,
      clss_info_val3 : data.clss_info_val3,
    })
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
      // const listData = await mockupCallSAZ02F110R();

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
      activeTabScreen={TabEnum.ADMIN}
      screenId="AZ0211000"
      screenName="Common Code Management"
      isFavorite={isFavorite}
      menuItems={menuItems}
      favoriteHandler={favoriteHandler}
      initial="Admin"
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
              Detail List
            </label>

            <div
              id="add-list-button"
              className={`
                px-8
              `}
            >
              <Button
                type={ButtonTypeEnum.SUCCESS}
                onClickHandler={handleOpenGroupCodeModal}
                white
              >
                Add
              </Button>
            </div>
          </div>
          <AddGroupCodeList
            open={openGroupCodeModal}
            screenId="AZ0211000"
            onClose={handlerCloseGroupCodeModal}
          />

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
                          even:bg-badge-sky
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
                            type={ButtonTypeEnum.VIEW}
                            onClickHandler={() => {
                              setDetailCredential((prev) => ({
                                ...prev,
                                biz_ctgo_cd: item.biz_ctgo_cd,
                                grup_cd_id: item.grup_cd_id,
                              }));
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
                            type={ButtonTypeEnum.EDIT}
                            onClickHandler={() => handleOpenUpdateModal(item)}
                            small
                          >
                            Edit
                          </Button>
                          <UpdateGroupCodeList
                            data={{
                              biz_ctgo_id : updateListValue.biz_ctgo_cd,
                              cd_expl : updateListValue.cd_expl,
                              data_stat_cd : updateListValue.data_stat_cd,
                              group_cd_id : updateListValue.group_cd_id,
                              msg_nm : [updateListValue.msg_nm[0], updateListValue.msg_nm[1]],
                            }}
                            onClose={handlerCloseUpdateModal}
                            screenId={screenId}
                            open={updateListValue.isOpen}
                          />
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
                onClickHandler={handleOpenDetailCodeModal}
                white
              >
                Add
              </Button>
              <AddDetailCodeList
                open={openDetailCodeModal}
                grup_cd_id={grupCdId}
                biz_ctgo_cd={bizCtgoCd}
                screenId="AZ0211000"
                onClose={handlerCloseDetailCodeModal}
              />
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
                          even:bg-badge-sky
                        `}
                      >
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
                            type={ButtonTypeEnum.EDIT}
                            onClickHandler={() => {
                              handleOpenDetailCodeUpdateModal(item, index+1);
                            }}
                            small
                          >
                            Edit
                          </Button>
                          <UpdateDetailCodeList
                            data={updateDetailValue}
                            biz_ctgo_cd={detailCredential.biz_ctgo_cd}
                            grup_cd_id={detailCredential.grup_cd_id}
                            onClose={handlerCloseDetailCodeUpdateModal}
                            screenId={screenId}
                            open={updateDetailValue.isOpen}
                        />
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
