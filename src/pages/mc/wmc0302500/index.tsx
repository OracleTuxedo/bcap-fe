import { Button, DateRange, InputText } from "@/components";
import { SMC03F054ROutVo } from "@/dto/SMC03F054R";
import { SMC03F055ROutVo } from "@/dto/SMC03F055R";
import { ButtonTypeEnum } from "@/enums";
import { MainLayout } from "@/layout";
import { callSMC03F054R } from "@/services";
import callSMC03F055R from "@/services/SMC03F055R";
import { exportToExcel } from "@/utils";
import moment from "moment";
import { ReactElement, useState } from "react";

export interface queryDataInterface {
  start : string;
  end : string;
}

const WMC0302500 = () => {
  const screenId = 'WMC0302500'
  const [outVoSMC03F054R, setOutVoSMC03F054R] = useState<SMC03F054ROutVo>();
  const [outVoSMC03F055R, setOutVoSMC03F055R] = useState<SMC03F055ROutVo>();
  
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [queryDate, setQueryDate] = useState<queryDataInterface>({
    start : "20220101",
    end : "20241211"
  })
  const [mid, setMid] = useState<string>("71000638409");
  const [pageSize, setPageSize] = useState<string>("70");
  
  const handlerDownloadButton = async () => {
    if (outVoSMC03F054R) {
      const data = outVoSMC03F054R?.sub1_vos.map((item, index) => ({
        "no"                    : ++index,
        "Apply Sequence No"     : item.aplc_seq_no,
        "MID"                   : item.mid,
        "Request Date"          : `${item.data_inp_dttm}`,
        "Request PIC"           : `${item.inp_usr_id}(${item.chng_emp_nm})`,
        "Memo"                  : item.apfm_memo_ctnts,
        "Status"                : item.apfm_pgrs_stat_cd,
        "Authorization Status"  : item.apfm_auth_stat_cd,
        "Complete Date"         : `${item.data_chng_dttm}`,
      }));
  
      exportToExcel(data!, screenId);
    }
  };

  const favoriteHandler = () => {
    setIsFavorite((prev) => !prev);
  };

  const onClickSearch = async () => {
    console.log("queryDate", queryDate);
    console.log("mid", mid);
    console.log("pageSize", pageSize);
    try {

      const listData = await callSMC03F054R({
        screenId,
        mid,
        startDate : queryDate.start,
        endDate : queryDate.end,
        pageSize})
        .catch (err => {
          throw new Error(err)
        });

        setOutVoSMC03F054R(listData);
      } catch (error) {
        console.log('error', error);
      }
    };
    
    const onRowClick = async (aplc_seq_no : string, next_key_val : string, page_size : number) => {
    console.log("aplc_seq_no", aplc_seq_no);
    console.log("next_key_val", next_key_val);
    console.log("page_size", page_size);
    try {

      const detailListData = await callSMC03F055R({
        screenId,
        aplc_seq_no,
        next_key_val,
        page_size,
      })
      .catch (err => {
        throw new Error(err)
      });

      setOutVoSMC03F055R(detailListData);
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <MainLayout
      screenId="MC0302500"
      screenName="Merchant Info. Change History"
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
                startName={"start-date"} startValue={queryDate.start} startOnChangeHandler={(e) => setQueryDate(
                  (prev) => ({...prev, start : moment(e.target.value).format("YYYYMMDD")})
                )}

                endName={"end-date"} endValue={queryDate.end} endOnChangeHandler={(e) => setQueryDate(
                  (prev) => ({...prev, end : moment(e.target.value).format("YYYYMMDD")})
                )}
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

              <InputText name="mid" value={mid} onChangeHandler={(e) => setMid(e.target.value)} />
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
              disable={outVoSMC03F054R ? true : false}
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
              mt-4
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
                type={ButtonTypeEnum.SUCCESS}
                onClickHandler={handlerDownloadButton}
                white
                disable={outVoSMC03F054R ? false : true}
              >
                Export
              </Button>
            </div>
          </div>

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
            <thead
              className={`
                  bg-main-normal
                `}
            >
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>No</th>
                <th>Apply Sequence No</th>
                <th>MID</th>
                <th>Request Date</th>
                <th>Request PIC</th>
                <th>Memo</th>
                <th>Status</th>
                <th>Authorization Status</th>
                <th>Complete Date</th>
              </tr>
            </thead>
            <tbody>
              { outVoSMC03F054R && outVoSMC03F054R.sub1_vos.map((item, index) => {
                return(
                  <tr
                    key={`list-data-SMC03F054R-${++index}`}
                    className={`
                        even:bg-main-active
                        hover
                      `}
                      onClick={() => onRowClick('20000059176', "20240717035444506768", 20)}
                  >
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{++index}</td>
                    <td>{item.aplc_seq_no}</td>
                    <td>{item.mid}</td>
                    <td>{item.data_inp_dttm}</td>
                    <td>{`${item.inp_usr_id}(${item.chng_emp_nm})`}</td>
                    <td className={`text-wrap`}>{item.apfm_memo_ctnts}</td>
                    <td>{item.apfm_pgrs_stat_cd}</td>
                    <td>{item.apfm_auth_stat_cd}</td>
                    <td>{item.data_chng_dttm}</td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>

        <div
          id="detail-list"
          className={`
            flex flex-col
            justify-start
            border
            h-72
            m-2
            text-lg
          `}
        >
          <div
            id="table-header"
            className={`
              mt-4
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
              Detail List
            </label>
          </div>

          <table
            id="table-detail"
            className={`
                m-2
                table-fixed
                text-left
                text-wrap
                border-collapse
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
              { outVoSMC03F055R && outVoSMC03F055R.sub1_vos.map((item, index) => {
                return(
                  <tr
                    key={`list-detail-data-SMC03F055R-${++index}`}
                    className={`
                        even:bg-main-active
                      `}
                  >
                    <td>{item.info_chng_tp_cd}</td>
                    <td>{item.chng_bef_ctnts ? item.chng_bef_ctnts : '-'}</td>
                    <td>{item.chng_aftr_ctnts}</td>
                  </tr>
                );
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

WMC0302500.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default WMC0302500;
