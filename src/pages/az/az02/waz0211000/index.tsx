import { Button, Dropdown, InputText } from '@/components';
import { ButtonTypeEnum } from '@/enums';
import { SAZ02F110ROutVo } from '@/dto/SAZ02F110R';
import { SAZ02F114ROutVo } from '@/dto/SAZ02F114R';
import { MainLayout } from '@/layout';
import { dropdownOptionsInterface } from '@/types';
import { ChangeEvent, ReactElement, useState } from 'react';

const systemDivisionData: dropdownOptionsInterface[] = [
  { value: '', label: 'All' },
  { value: 'SFA', label: 'SFA' },
  { value: 'MER', label: 'Merchant' },
  { value: 'MMP', label: 'MMP' },
  { value: 'TMS', label: 'TMS' },
  { value: 'WDS', label: 'WDS' },
  { value: 'AUT', label: 'Authorization' },
  { value: 'C&S', label: 'Clearing & Settlement' },
  { value: 'MET', label: 'Metering' },
  { value: 'ADM', label: 'Admin & Common' },
  { value: 'EXT', label: 'External' },
];

const useStatusData: dropdownOptionsInterface[] = [
  { value: '', label: 'All' },
  { value: 'U', label: 'Valid' },
  { value: 'D', label: 'Not Valid' },
];

const WAZ021100 = () => {
  const [outVoSAZ02F110R, setOutVoSAZ02F110R] = useState<SAZ02F110ROutVo>();
  const [outVoSAZ02F114R, setOutVoSAZ02F114R] = useState<SAZ02F114ROutVo>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const [groupCode, setGroupCode] = useState<string>('');
  const [groupCodeName, setGroupCodeName] = useState<string>('');
  const [systemDivision, setSystemDivision] = useState<string>('');
  const [useStatus, setUseStatus] = useState<string>('');

  const favoriteHandler = () => {
    setIsFavorite((prev) => !prev);
  };
  const [selectedRow, setSelectedRow] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

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
      setSelectedRow(outVoSAZ02F110R.sub1_vos.map(item => item.grup_cd_id));
    }

    setSelectAll(!selectAll);
  };

  const onClickSearch = async () => {
    console.log('SEARCH');
    console.log('groupCode', groupCode);
    console.log('groupCodeName', groupCodeName);
    console.log('systemDivision', systemDivision);
    console.log('useStatus', useStatus);
  };


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
                  value={systemDivision}
                  onChangeHandler={(e) => setSystemDivision(e.target.value)}
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
                  value={groupCode}
                  onChangeHandler={(e: ChangeEvent<HTMLInputElement>) =>
                    setGroupCode(e.target.value)
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
                  value={groupCodeName}
                  onChangeHandler={(e: ChangeEvent<HTMLInputElement>) =>
                    setGroupCodeName(e.target.value)
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
                  value={useStatus}
                  onChangeHandler={(e) => setUseStatus(e.target.value)}
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
            h-72
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
                mx-8
              `}
            >
              List
            </label>

            <div
              id="download-button"
              className={`
                px-8
              `}
            ></div>
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
                  <th className={`px-2 py-1`}>St</th>
                  <th className={`px-2 py-1`}>No</th>
                  <th className={`px-2 py-1`}>System Division</th>
                  <th className={`px-2 py-1`}>Group Code</th>
                  <th className={`px-2 py-1`}>Group Code Name</th>
                  <th className={`px-2 py-1`}>Use Status</th>
                  <th className={`px-2 py-1`}>Description</th>
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
                        <td className={`px-2 py-1`}></td>
                        <td className={`px-2 py-1`}>{index + 1}</td>
                        <td className={`px-2 py-1`}>{item.biz_ctgo_cd}</td>
                        <td className={`px-2 py-1`}>{item.grup_cd_id}</td>
                        <td className={`px-2 py-1`}>{`${item.msg_nm}`}</td>
                        <td className={`text-wrap px-2 py-1`}>
                          {item.data_stat_cd}
                        </td>
                        <td className={`px-2 py-1`}>{item.cd_expl}</td>
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
            h-60
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
                  <th>St</th>
                  <th className={`px-2 py-1`}>
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectAll}
                    />
                  </th>
                  <th>No</th>
                  <th>Group Code ID</th>
                  <th>Detail Code ID</th>
                  <th>Code Name</th>
                  <th>Sort No</th>
                  <th>Use Status</th>
                  <th>Description</th>
                  <th>Ext 1</th>
                  <th>Ext 2</th>
                  <th>Display Option</th>
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
                        <td>{''}</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={selectedRow.includes(item.cmmn_cd_id)}
                            onChange={() => handleSelectRow(item.cmmn_cd_id)}
                          />
                        </td>
                        <td>{item.cmmn_cd_id}</td>
                        <td>{item.dtl_cd_id}</td>
                        <td>{item.msg_nm}</td>
                        <td>{item.sort_seq}</td>
                        <td>{item.data_stat_cd}</td>
                        <td>{item.cd_expl}</td>
                        <td>{item.clss_info_val1}</td>
                        <td>{item.clss_info_val2}</td>
                        <td>{item.clss_info_val3}</td>
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
