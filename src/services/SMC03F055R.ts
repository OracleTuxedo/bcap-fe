import { BACKEND_ENDPOINT } from "@/config/constants";
import { SMC03F055RInVo, SMC03F055ROutVo } from "@/dto";
import { convertObjectToString, convertStringToObject, makeParserInput, makeParserUserDataInput, ParserInput, ParserOutput, ParserUserDataInput } from "@/utils";
import axios from "axios";

export interface SMC03F055RInputInterface{
    screenId    : string;
    aplc_seq_no   : string;
    next_key_val     : string;
    page_size    : number;
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

    const userDataInput: ParserUserDataInput = makeParserUserDataInput({
        tuxedoCode: "SMC03F055R",
        screenId,
    });

    const ParserIn: ParserInput<SMC03F055RInVo> | null = makeParserInput<SMC03F055RInVo>({
        typeClass: SMC03F055RInVo,
        data: inVo,
        userDataInput: userDataInput,
    });

    if (!ParserIn) return null;

    const resultString = convertObjectToString(ParserIn);

    return resultString;
};

const decodeSMC03F055R = (
    responseFromTuxedo: string
): ParserOutput<SMC03F055ROutVo> | null => {
    const parsed: ParserOutput<SMC03F055ROutVo> | null = convertStringToObject<
        ParserOutput<SMC03F055ROutVo>
    >({
        index: 0,
        input: responseFromTuxedo,
        classInstance: new ParserOutput(SMC03F055ROutVo),
    });

    return parsed;
};

const callSMC03F055R = async (inputRequest : SMC03F055RInputInterface) => {
    const requestToTuxedo: string | null = encodeSMC03F055R(inputRequest);
    if (!requestToTuxedo) return;

    let responseFromTuxedo = "";

    try {
        const response = await axios.post<string>(
            `${BACKEND_ENDPOINT}example/message`,
            requestToTuxedo,
            {
                headers: {
                    "Content-Type": "text/plain",
                    "Access-Control-Allow-Origin" : "*",
                    "ngrok-skip-browser-warning" : "*"
                },
            }
        );
        responseFromTuxedo = response.data;
    } catch (error) {
        console.log("error", error);
        return;
    }

    const parsed = decodeSMC03F055R(responseFromTuxedo);

    return(parsed?.data.data);
};

export default callSMC03F055R