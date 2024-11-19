import { BACKEND_ENDPOINT } from "@/config/constants";
import { SAZ02F116RInVo, SAZ02F116ROutVo } from "@/dto";
import {
  convertObjectToString,
  convertStringToObject,
  makeTelegramIn,
  makeTelegramUserDataIn,
  TelegramIn,
  TelegramOut,
  TelegramUserDataIn,
} from "@/utils";
import {
  decryption,
  EncryptDecryptParam,
  encryption,
} from "@/utils/EncryptionDecryption";
import axios from "axios";

const encodeSAZ02F116R = (
  screenId: string,
  inVo: SAZ02F116RInVo
): string | null => {
  const userDataInput: TelegramUserDataIn = makeTelegramUserDataIn({
    tuxedoCode: "SAZ02F116R",
    screenId,
  });

  const telegramIn: TelegramIn<SAZ02F116RInVo> | null =
    makeTelegramIn<SAZ02F116RInVo>({
      typeClass: SAZ02F116RInVo,
      data: inVo,
      userDataInput: userDataInput,
    });

  if (!telegramIn) return null;

  const resultString = convertObjectToString(telegramIn);

  return resultString;
};

const decodeSAZ02F110R = (
  responseFromTuxedo: string
): TelegramOut<SAZ02F116ROutVo> | null => {
  const parsed: TelegramOut<SAZ02F116ROutVo> | null = convertStringToObject<
    TelegramOut<SAZ02F116ROutVo>
  >({
    index: 0,
    input: responseFromTuxedo,
    classInstance: new TelegramOut(SAZ02F116ROutVo),
  });
  return parsed;
};

const callSAZ02F116R = async (inVo: SAZ02F116RInVo, screenId: string) => {
  console.log("callSAZ02F116R");

  const requestToTuxedo: string | null = encodeSAZ02F116R(screenId, inVo);
  if (!requestToTuxedo) return;

  console.log(requestToTuxedo);

  let responseFromTuxedo = "";

  const body: EncryptDecryptParam = encryption(requestToTuxedo);

  try {
    const response = await axios.post(`${BACKEND_ENDPOINT}/message`, body, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "ngrok-skip-browser-warning": "*",
      },
    });
    const originalMessage: string = decryption(response.data);
    responseFromTuxedo = originalMessage;
  } catch (error) {
    return;
  }
  console.log(responseFromTuxedo);

  const parsed = decodeSAZ02F110R(responseFromTuxedo);

  console.log(parsed);

  return parsed?.data.data;
};

export default callSAZ02F116R;
