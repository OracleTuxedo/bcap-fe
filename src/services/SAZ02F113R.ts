import { BACKEND_ENDPOINT } from "@/config/constants";
import { SAZ02F113RInVo, SAZ02F113ROutVo } from "@/dto";
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

const encodeSAZ02F113R = (
  screenId: string,
  inVo: SAZ02F113RInVo
): string | null => {
  const userDataInput: TelegramUserDataIn = makeTelegramUserDataIn({
    tuxedoCode: "SAZ02F110R",
    screenId,
  });

  const telegramIn: TelegramIn<SAZ02F113RInVo> | null =
    makeTelegramIn<SAZ02F113RInVo>({
      typeClass: SAZ02F113RInVo,
      data: inVo,
      userDataInput: userDataInput,
    });

  if (!telegramIn) return null;

  const resultString = convertObjectToString(telegramIn);

  return resultString;
};

const decodeSAZ02F110R = (
  responseFromTuxedo: string
): TelegramOut<SAZ02F113ROutVo> | null => {
  const parsed: TelegramOut<SAZ02F113ROutVo> | null = convertStringToObject<
    TelegramOut<SAZ02F113ROutVo>
  >({
    index: 0,
    input: responseFromTuxedo,
    classInstance: new TelegramOut(SAZ02F113ROutVo),
  });
  return parsed;
};

const callSAZ02F113R = async (inVo: SAZ02F113RInVo, screenId: string) => {
  console.log("callSAZ02F113R");

  const requestToTuxedo: string | null = encodeSAZ02F113R(screenId, inVo);
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

export default callSAZ02F113R;
