import { BACKEND_ENDPOINT } from "@/config/constants";
import { SMC03F055RInVo, SMC03F055ROutVo } from "@/dto";
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

export interface SMC03F055RInputInterface {
  screenId: string;
  aplc_seq_no: string;
  next_key_val: string;
  page_size: number;
}

const encodeSMC03F055R = ({
  screenId,
  aplc_seq_no,
  next_key_val,
  page_size,
}: SMC03F055RInputInterface): string | null => {
  const inVo: SMC03F055RInVo = new SMC03F055RInVo();
  inVo.aplc_seq_no = aplc_seq_no;
  inVo.next_key_val = next_key_val;
  inVo.page_size = +page_size;

  const userDataInput: TelegramUserDataIn = makeTelegramUserDataIn({
    tuxedoCode: "SMC03F055R",
    screenId,
  });

  const telegramIn: TelegramIn<SMC03F055RInVo> | null =
    makeTelegramIn<SMC03F055RInVo>({
      typeClass: SMC03F055RInVo,
      data: inVo,
      userDataInput: userDataInput,
    });

  if (!telegramIn) return null;

  const resultString = convertObjectToString(telegramIn);

  return resultString;
};

const decodeSMC03F055R = (
  responseFromTuxedo: string
): TelegramOut<SMC03F055ROutVo> | null => {
  const parsed: TelegramOut<SMC03F055ROutVo> | null = convertStringToObject<
    TelegramOut<SMC03F055ROutVo>
  >({
    index: 0,
    input: responseFromTuxedo,
    classInstance: new TelegramOut(SMC03F055ROutVo),
  });

  return parsed;
};

const callSMC03F055R = async (inputRequest: SMC03F055RInputInterface) => {
  console.log("callSMC03F055R");

  const requestToTuxedo: string | null = encodeSMC03F055R(inputRequest);
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

  const parsed = decodeSMC03F055R(responseFromTuxedo);

  console.log(parsed);

  return parsed?.data.data;
};

export default callSMC03F055R;
