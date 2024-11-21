import { BACKEND_ENDPOINT } from "@/config/constants";
import { SAZ02F111UInVo, SAZ02F111UOutVo } from "@/dto";
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

const encodeSAZ02F111U = (
  screenId: string,
  inVo: SAZ02F111UInVo
): string | null => {
  console.log(inVo);
  const userDataInput: TelegramUserDataIn = makeTelegramUserDataIn({
    tuxedoCode: "SAZ02F111U",
    screenId,
  });

  console.log(userDataInput);

  const telegramIn: TelegramIn<SAZ02F111UInVo> | null =
    makeTelegramIn<SAZ02F111UInVo>({
      typeClass: SAZ02F111UInVo,
      data: inVo,
      userDataInput: userDataInput,
    });

  console.log(telegramIn);

  if (!telegramIn) return null;

  const resultString = convertObjectToString(telegramIn);

  return resultString;
};

const decodeSAZ02F110R = (
  responseFromTuxedo: string
): TelegramOut<SAZ02F111UOutVo> | null => {
  const parsed: TelegramOut<SAZ02F111UOutVo> | null = convertStringToObject<
    TelegramOut<SAZ02F111UOutVo>
  >({
    index: 0,
    input: responseFromTuxedo,
    classInstance: new TelegramOut(SAZ02F111UOutVo),
  });
  return parsed;
};

const callSAZ02F111U = async (inVo: SAZ02F111UInVo, screenId: string) => {
  console.log("callSAZ02F111U");

  const requestToTuxedo: string | null = encodeSAZ02F111U(screenId, inVo);

  console.log(requestToTuxedo);

  if (!requestToTuxedo) return;

  console.log("GLORY KALEM ZUNGKEM");
  console.log(requestToTuxedo.length);
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
    console.log("GLORY KALEM");
    console.log(originalMessage.length);
    console.log(originalMessage);
    responseFromTuxedo = originalMessage;
  } catch (error) {
    return;
  }
  console.log(responseFromTuxedo);

  const parsed = decodeSAZ02F110R(responseFromTuxedo);

  console.log("Result callSAZ02F111U");
  console.log(parsed);

  return parsed?.data.data;
};

export default callSAZ02F111U;
