import { Button } from '@/components';
import { MainLayout } from '@/layout';
import { ReactElement, useState } from 'react';

const WAZ021100 = () => {
  const [outVoSAZ02F110R, setOutVoSAZ02F110R] = useState();
  const [outVoSAZ02F114R, setOutVoSAZ02F114R] = useState();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
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
      setSelectedRow(outVoSAZ02F110R);
    }

    setSelectAll(!selectAll);
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
                        <td className={`px-2 py-1`}>{item.grup_cd_list}</td>
                        <td className={`px-2 py-1`}>{`${item.cmmn_cd_nm}`}</td>
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
                            checked={selectedRow.includes(item.aplc_seq_no)}
                            onChange={() => handleSelectRow(item.aplc_seq_no)}
                          />
                        </td>
                        <td>{item.cmmn_cd_id}</td>
                        <td>{item.dtl_cd_id}</td>
                        <td>{item.msg_nm}</td>
                        <td>{item.sort_seq}</td>
                        <td>{item.data_stat_id}</td>
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
