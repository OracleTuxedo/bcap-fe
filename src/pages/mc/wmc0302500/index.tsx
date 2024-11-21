import { Button, DateRange, InputText, Loading } from "@/components";
import { MenuItem } from "@/components/organisms/Sidebar";
import { SMC03F054ROutVo } from "@/dto/SMC03F054R";
import { SMC03F055ROutVo } from "@/dto/SMC03F055R";
import { ButtonTypeEnum, TabEnum } from "@/enums";
import { MainLayout } from "@/layout";
import { callSMC03F054R, callSMC03F055R } from "@/services";
import { exportToExcel } from "@/utils";
import moment from "moment";
import { ReactElement, useEffect, useState } from "react";

export interface queryDataInterface {
  start: string;
  end: string;
}

const menuItems: MenuItem[] = [
  { name: 'Merchant', children: [{ name: 'Merchant Info. Change History' }]},
];

const WMC0302500 = () => {
  const screenId = "WMC0302500";
  const [outVoSMC03F054R, setOutVoSMC03F054R] = useState<SMC03F054ROutVo>();
  const [outVoSMC03F055R, setOutVoSMC03F055R] = useState<SMC03F055ROutVo>();

  const [loading, setLoading] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const [queryDate, setQueryDate] = useState<queryDataInterface>({
    start: "20200101",
    end: "20241231",
  });
  const [mid, setMid] = useState<string>("70000000014");
  const pageSize: string = "70";

  const [selectedRow, setSelectedRow] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleSelectRow = (id : string) => {
    if (selectedRow.includes(id)) {
      setSelectedRow(selectedRow.filter((rowId) => rowId !== id));
    } else {
      setSelectedRow([...selectedRow, id]);
    }
  }

  useEffect(() => {
    if (outVoSMC03F054R && selectedRow.length === outVoSMC03F054R.sub1_vos.length) {
      setSelectAll(true);
    }
  }, [selectedRow])

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRow([]);
    } else {
      setSelectedRow(outVoSMC03F054R.sub1_vos.map((item) => item.aplc_seq_no));
    }
    
    setSelectAll(!selectAll);
  }

  const handlerDownloadButton = async () => {
    if (outVoSMC03F054R) {
      const data = outVoSMC03F054R?.sub1_vos.map((item, index) => ({
        no: ++index,
        "Apply Sequence No": item.aplc_seq_no,
        MID: item.mid,
        "Request Date": `${item.data_inp_dttm}`,
        "Request PIC": `${item.inp_usr_id}(${item.chng_emp_nm})`,
        Memo: item.apfm_memo_ctnts,
        Status: item.apfm_pgrs_stat_cd,
        "Authorization Status": item.apfm_auth_stat_cd,
        "Complete Date": `${item.data_chng_dttm}`,
      }));

      exportToExcel(data!, screenId);
    }
  };

  const favoriteHandler = () => {
    setIsFavorite((prev) => !prev);
  };

  const onClickSearch = async () => {
    setLoading(() => true);
    try {
      const listData = await callSMC03F054R({
        screenId,
        mid,
        startDate: queryDate.start,
        endDate: queryDate.end,
        pageSize,
      }).catch((err) => {
        throw new Error(err);
      });

      setOutVoSMC03F054R(listData);
      setLoading(() => false);
    } catch (error) {
      setLoading(() => false);
      console.log(error);
    }
  };

  const onRowClick = async (
    aplc_seq_no: string,
    next_key_val: string,
    page_size: number
  ) => {
    setLoading(() => true);
    try {
      const detailListData = await callSMC03F055R({
        screenId,
        aplc_seq_no,
        next_key_val,
        page_size,
      }).catch((err) => {
        throw new Error(err);
      });
      setLoading(() => false);
      setOutVoSMC03F055R(detailListData);
    } catch (error) {
      setLoading(() => false);
      console.log(error);
    }
  };

  if (loading) {
    return (
      <Loading/>
    );
  } 
  return (
    <MainLayout
      screenId="MC0302500"
      screenName="Merchant Info. Change History"
      activeTabScreen={TabEnum.MERCHANT}
      isFavorite={isFavorite}
      favoriteHandler={favoriteHandler}
      menuItems={menuItems}
      initial="Merchant"
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
              id="inputDate"
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
                Approval Date
              </label>

              <DateRange
                startName={"start-date"}
                startValue={queryDate.start}
                startOnChangeHandler={(e) =>
                  setQueryDate((prev) => ({
                    ...prev,
                    start: moment(e.target.value).format("YYYYMMDD"),
                  }))
                }
                endName={"end-date"}
                endValue={queryDate.end}
                endOnChangeHandler={(e) =>
                  setQueryDate((prev) => ({
                    ...prev,
                    end: moment(e.target.value).format("YYYYMMDD"),
                  }))
                }
              />
            </div>

            <div
              id="mid"
              className={`
                mx-2
                flex flex-row
                items-center
                font-medium
                text-gray-700
              `}
            >
              <label
                className={`
                  mx-2
                `}
              >
                MID
              </label>

              <InputText
                name="mid"
                value={mid}
                onChangeHandler={(e) => setMid(e.target.value)}
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
            >
              <Button
                type={outVoSMC03F054R ? ButtonTypeEnum.SUCCESS : ButtonTypeEnum.DISABLE}
                onClickHandler={handlerDownloadButton}
                white
                disable={outVoSMC03F054R ? false : true}
              >
                Export
              </Button>
            </div>
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
                  {/* <th className={`px-2 py-1`}>
                    <input type="checkbox" onChange={handleSelectAll} checked={selectAll} />
                  </th> */}
                  <th className={`px-2 py-1`}>No</th>
                  <th className={`px-2 py-1`}>Apply Sequence No</th>
                  <th className={`px-2 py-1`}>MID</th>
                  <th className={`px-2 py-1`}>Request Date</th>
                  <th className={`px-2 py-1`}>Request PIC</th>
                  <th className={`px-2 py-1`}>Memo</th>
                  <th className={`px-2 py-1`}>Status</th>
                  <th className={`px-2 py-1`}>Authorization Status</th>
                  <th className={`px-2 py-1`}>Complete Date</th>
                </tr>
              </thead>
              <tbody>
                {outVoSMC03F054R &&
                  outVoSMC03F054R.sub1_vos.map((item, index) => {
                    return (
                      <tr
                        key={`list-data-SMC03F054R-${index}`}
                        className={`
                          even:bg-main-active
                        `}
                      >
                        {/* <td className={`px-2 py-1`}>
                          <input
                            type="checkbox"
                            checked={selectedRow.includes(item.aplc_seq_no)}
                            onChange={() => handleSelectRow(item.aplc_seq_no)}
                          />
                        </td> */}
                        <td
                          onClick={() => onRowClick(item.aplc_seq_no, '', 20)}
                          className={`px-2 py-1`}>
                            {index+1}
                          </td>
                        <td
                          onClick={() => onRowClick(item.aplc_seq_no, '', 20)}
                          className={`px-2 py-1`}>
                            {item.aplc_seq_no}
                          </td>
                        <td
                          onClick={() => onRowClick(item.aplc_seq_no, '', 20)}
                          className={`px-2 py-1`}>
                            {item.mid}
                          </td>
                        <td
                          onClick={() => onRowClick(item.aplc_seq_no, '', 20)}
                          className={`px-2 py-1`}>
                            {item.data_inp_dttm}
                          </td>
                        <td
                          onClick={() => onRowClick(item.aplc_seq_no, '', 20)}
                          className={`px-2 py-1`}>
                            {`${item.inp_usr_id}(${item.chng_emp_nm})`}
                          </td>
                        <td
                          onClick={() => onRowClick(item.aplc_seq_no, '', 20)}
                          className={`text-wrap px-2 py-1`}>
                            {item.apfm_memo_ctnts}
                          </td>
                        <td
                          onClick={() => onRowClick(item.aplc_seq_no, '', 20)}
                          className={`px-2 py-1`}>
                            {item.apfm_pgrs_stat_cd}
                          </td>
                        <td
                          onClick={() => onRowClick(item.aplc_seq_no, '', 20)}
                          className={`px-2 py-1`}>
                            {item.apfm_auth_stat_cd}
                          </td>
                        <td
                          onClick={() => onRowClick(item.aplc_seq_no, '', 20)}
                          className={`px-2 py-1`}>
                            {item.data_chng_dttm}
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
          </div>

          <div
            className={`
              overflow-x-auto
            `}>
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
                  <th>Change Type</th>
                  <th>Old Value</th>
                  <th>New Value</th>
                </tr>
              </thead>
              <tbody>
                {outVoSMC03F055R &&
                  outVoSMC03F055R.sub1_vos.map((item, index) => {
                    return (
                      <tr
                        key={`list-detail-data-SMC03F055R-${++index}`}
                        className={`
                          even:bg-main-active
                        `}
                      >
                        <td>{item.info_chng_tp_cd}</td>
                        <td>{item.chng_bef_ctnts ? item.chng_bef_ctnts : "-"}</td>
                        <td>{item.chng_aftr_ctnts}</td>
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

WMC0302500.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default WMC0302500;
