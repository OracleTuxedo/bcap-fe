import { BACKEND_ENDPOINT } from "@/config/constants";
import { SMC03F054RInVo, SMC03F054ROutVo } from "@/dto";
import { convertObjectToString, convertStringToObject, makeTelegramIn, makeTelegramUserDataIn, TelegramIn, TelegramOut, TelegramUserDataIn } from "@/utils";
import { decryption, EncryptDecryptParam, encryption } from "@/utils/EncryptionDecryption";
import axios from "axios";

export interface SMC03F054RInputInterface{
    screenId    : string;
    startDate   : string;
    endDate     : string;
    mid         : string;
    pageSize    : string;
}

const encodeSMC03F054R = ({
    screenId,
    startDate,
    endDate,
    mid,
    pageSize,
} : SMC03F054RInputInterface): string | null => {
    const inVo: SMC03F054RInVo = new SMC03F054RInVo();
    inVo.std_date = startDate;
    inVo.end_date = endDate;
    inVo.apfm_pgrs_stat_cd = pageSize;
    inVo.mid = mid;
    inVo.page_size = 20;

    

    const userDataInput: TelegramUserDataIn = makeTelegramUserDataIn({
        tuxedoCode: "SMC03F054R",
        screenId,
    });

    

    const telegramIn: TelegramIn<SMC03F054RInVo> | null = makeTelegramIn<SMC03F054RInVo>({
        typeClass: SMC03F054RInVo,
        data: inVo,
        userDataInput: userDataInput,
    });

    if (!telegramIn) return null;

    const resultString = convertObjectToString(telegramIn);

    return resultString;
};

const decodeSMC03F054R = (
    responseFromTuxedo: string
): TelegramOut<SMC03F054ROutVo> | null => {
    const parsed: TelegramOut<SMC03F054ROutVo> | null = convertStringToObject<
    TelegramOut<SMC03F054ROutVo>
    >({
        index: 0,
        input: responseFromTuxedo,
        classInstance: new TelegramOut(SMC03F054ROutVo),
    });
    return parsed;
};

const callSMC03F054R = async (inputRequest : SMC03F054RInputInterface) => {
    console.log("callSMC03F054R");
    
    const requestToTuxedo: string | null = encodeSMC03F054R(inputRequest);
    if (!requestToTuxedo) return;
    
    console.log(requestToTuxedo);

    let responseFromTuxedo = "";

    const body: EncryptDecryptParam = encryption(requestToTuxedo);

    try {
        const response = await axios.post(
            `${BACKEND_ENDPOINT}/message`,
            body,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin" : "*",
                    "ngrok-skip-browser-warning" : "*"
                },
            }
        );
        const originalMessage: string = decryption(response.data);
        responseFromTuxedo = originalMessage;
    } catch (error) {
        
        return;
    }
    console.log(responseFromTuxedo);

    const parsed = decodeSMC03F054R(responseFromTuxedo);

    console.log(parsed);

    return(parsed?.data.data);
};

export default callSMC03F054R;