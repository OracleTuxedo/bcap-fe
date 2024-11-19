import {
  convertObjectToString,
  convertStringToObject,
  makeTelegramIn,
  makeTelegramUserDataIn,
  TelegramIn,
  TelegramOut,
  TelegramUserDataIn,
} from "@/utils";
import { SAZ02F110RInVo, SAZ02F110ROutVo } from "../dto/SAZ02F110R";
import axios from "axios";

export function encodeSAZ02F110R(): string | null {
  const inVo: SAZ02F110RInVo = new SAZ02F110RInVo();
  inVo.page_no = 1;
  inVo.page_size = 20;
  inVo.biz_ctgo_cd = "AZA";
  // inVo.grup_cd_id = "3006";
  inVo.data_stat_cd = "U";
  inVo.lang_clcd = "EN";

  const userDataInput: TelegramUserDataIn = makeTelegramUserDataIn({
    tuxedoCode: "SAZ02F110R",
    screenId: "WMC0302500",
  });

  const skyIn: TelegramIn<SAZ02F110RInVo> | null =
    makeTelegramIn<SAZ02F110RInVo>({
      typeClass: SAZ02F110RInVo,
      data: inVo,
      userDataInput: userDataInput,
    });

  if (!skyIn) return null;

  const resultString = convertObjectToString(skyIn);

  return resultString;
}

export function decodeSAZ02F110R(
  responseFromTuxedo: string
): TelegramOut<SAZ02F110ROutVo> | null {
  const parsed: TelegramOut<SAZ02F110ROutVo> | null = convertStringToObject<
    TelegramOut<SAZ02F110ROutVo>
  >({
    index: 0,
    input: responseFromTuxedo,
    classInstance: new TelegramOut(SAZ02F110ROutVo),
  });
  return parsed;
}

export async function callSAZ02F110R() {
  console.log("ENCODER START");

  const requestToTuxedo: string | null = encodeSAZ02F110R();

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
    // console.log(response);
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

  const parsed = decodeSAZ02F110R(responseFromTuxedo);
  console.log(parsed);
  console.log("-----------------------------------------------------------");
  console.log(parsed?.data.data);
  console.log("-----------------------------------------------------------");
  console.log(parsed?.data.data.sub1_vos);
  console.log("DECODER END");
}
