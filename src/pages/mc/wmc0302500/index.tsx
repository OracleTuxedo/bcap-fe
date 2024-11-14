import { Button, Header } from "@/components";
import { SMC03F054RInVo, SMC03F054ROutVo } from "@/dto/SMC03F054R";
import { ButtonTypeEnum } from "@/enums";
import { MainLayout } from "@/layout";
import { convertStringToObject } from "@/sky/mapper/Decoder";
import { convertObjectToString } from "@/sky/mapper/Encoder";
import { makeSkyIn, makeSkyUserDataInput } from "@/sky/util";
import { SkyIn, SkyOut, SkyUserDataInput } from "@/sky/vo";
import axios from "axios";
import { ReactElement, useState, useEffect } from "react";

const onClickSearch = () => {
  console.log("test");
};

const handlerDownloadButton = () => {};

const WMC0302500 = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [outVoSMC03F054R, setOutVoSMC03F054R] = useState<SMC03F054ROutVo>();

  const favoriteHandler = () => {
    setIsFavorite((prev) => !prev);
  };

  const encodeSMC03F054R = (): string | null => {
    const inVo: SMC03F054RInVo = new SMC03F054RInVo();
    inVo.std_date = "20220101";
    inVo.end_date = "20241211";
    inVo.apfm_pgrs_stat_cd = "70";
    inVo.mid = "71000638409";
    inVo.page_size = 20;

    const userDataInput: SkyUserDataInput = makeSkyUserDataInput({
      tuxedoCode: "SMC03F054R",
      screenId: "WMC0302500",
    });

    const skyIn: SkyIn<SMC03F054RInVo> | null = makeSkyIn<SMC03F054RInVo>({
      typeClass: SMC03F054RInVo,
      data: inVo,
      userDataInput: userDataInput,
    });

    if (!skyIn) return null;

    const resultString = convertObjectToString(skyIn);

    return resultString;
  };

  const decodeSMC03F054R = (
    responseFromTuxedo: string
  ): SkyOut<SMC03F054ROutVo> | null => {
    const parsed: SkyOut<SMC03F054ROutVo> | null = convertStringToObject<
      SkyOut<SMC03F054ROutVo>
    >({
      index: 0,
      input: responseFromTuxedo,
      classInstance: new SkyOut(SMC03F054ROutVo),
    });
    return parsed;
  };

  const callSMC03F054R = async () => {
    console.log("ENCODER START");
    const requestToTuxedo: string | null = encodeSMC03F054R();
    if (!requestToTuxedo) return;

    let responseFromTuxedo = "";

    try {
      const response = await axios.post<string>(
        "http://localhost:8080/example/message",
        requestToTuxedo,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      responseFromTuxedo = response.data;
    } catch (error) {
      console.log("error");
      console.log(error);
      return;
    }
    console.log(`[${requestToTuxedo}]`);
    console.log("-----------------------------------------------------------");
    console.log(`[${responseFromTuxedo}]`);

    console.log("ENCODER END");
    console.log("-----------------------------------------------------------");
    console.log("-----------------------------------------------------------");
    console.log("-----------------------------------------------------------");
    console.log("DECODER START");

    const parsed = decodeSMC03F054R(responseFromTuxedo);
    console.log(parsed);
    console.log("-----------------------------------------------------------");
    console.log(parsed?.data.data);
    console.log("-----------------------------------------------------------");
    console.log(parsed?.data.data.sub1_vos);
    console.log("DECODER END");
    setOutVoSMC03F054R(parsed?.data.data);
  };

  useEffect(() => {
    callSMC03F054R();
  }, []);

  useEffect(() => {
    console.log('outVoSMC03F054R');
    console.log(outVoSMC03F054R);
  }, [outVoSMC03F054R]);

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
            mx-2
            py-2
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

              <input
                type="date"
                className={`
                  mx-2
                  p-1
                  h-fit
                  border border-sidebar-normal
                  shadow-sm
                `}
              />

              <label
                className={`
                  mx-2
                `}
              >
                ~
              </label>

              <input
                type="date"
                className={`
                  mx-2
                  p-1
                  h-fit
                  border border-sidebar-normal
                  shadow-sm
                `}
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

              <input
                type="search"
                className={`
                  mx-2
                  p-1
                  border border-sidebar-normal
                  shadow-sm
                `}
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
              >
                Download
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
              <tr
                className={`
                    even:bg-main-active
                  `}
              >
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td>1231251342</td>
                <td>0980708679</td>
                <td>14-11-2024</td>
                <td>14-11-2024</td>
                <td className={`text-wrap`}>This memo content</td>
                <td>status value</td>
                <td>auth status value</td>
                <td>14-11-2024</td>
              </tr>
              <tr
                className={`
                    even:bg-main-active
                  `}
              >
                <td>
                  <input type="checkbox" />
                </td>
                <td>2</td>
                <td>1231251342</td>
                <td>0980708679</td>
                <td>14-11-2024</td>
                <td>14-11-2024</td>
                <td className={`text-wrap`}>This memo content is long.</td>
                <td>status value</td>
                <td>auth status value</td>
                <td>14-11-2024</td>
              </tr>
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
              <tr
                className={`
                    even:bg-main-active
                  `}
              >
                <td>change</td>
                <td>old</td>
                <td>new</td>
              </tr>
              <tr
                className={`
                    even:bg-main-active
                  `}
              >
                <td>type</td>
                <td>old</td>
                <td>new</td>
              </tr>
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
