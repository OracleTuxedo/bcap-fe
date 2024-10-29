import { useState } from "react";
import { decodeBase64AndDecryptAES, encryptAESAndEncodeBase64 } from "./EncryptionService";
import axios from "axios";

const EncryptTest = () => {
    const port = '5000';
    const [processText, setProcessText] = useState<string>('test');
    const [ivData, setIvData] = useState<string>('');
    const [xpMsg, setXpMsg] = useState<string>('');
    const [resMsg, setResMsg] = useState<string>('');

    const encodeBtnAction = () => {
      const result = encryptAESAndEncodeBase64(processText);
  
      if (typeof result === 'string') {
          setXpMsg(result);
          return;
      } else {
          const { encryptedData, iv } = result;
          setXpMsg(encryptedData);
          setIvData(iv);
      }
  };
  

    const decodeBtnAction = () => {
        const decryptedData = decodeBase64AndDecryptAES(xpMsg, ivData);
        setResMsg(decryptedData);
    }

    const sendBtnAction = async () => {
        const result = encryptAESAndEncodeBase64(processText);
    
        if (typeof result === 'string') {
            setXpMsg(result);
            return;
        }
        
        const { encryptedData, iv } = result;
        setXpMsg(encryptedData);
        setIvData(iv);
        
        try {
            const response = await axios.post(`http://127.0.0.1:${port}/`, { encryptedData, iv });
            if (response.data && response.data.sent) {
                const decryptedData = decodeBase64AndDecryptAES(response.data.sent.encryptedData, response.data.sent.iv);
                setResMsg(decryptedData);  // Set decrypted response message
            } else {
                console.error('Unexpected response format:', response.data);
            }
        } catch (error) {
            console.error('Error encrypting data:', error);
        }
    }

    return (
        <div className="w-[760px] h-screen bg-black/[.05] text-white text-wrap flex flex-col justify-center mx-auto gap-y-8">
            <form className="flex flex-col gap-y-4">
                <label>Text to process</label>
                <input type="text" className="text-black rounded px-4 py-2" onChange={(e) => setProcessText(e.target.value)} value={processText} placeholder="Input text to process" />
                <div className="flex justify-between content-between gap-x-4">
                    <button type="button" className="min-w-36 w-full border border-white rounded px-4 py-2 hover:bg-white hover:text-black" onClick={encodeBtnAction}>Local Encode</button>
                    <button type="button" className="min-w-36 w-full border border-white rounded px-4 py-2 hover:bg-white hover:text-black" onClick={decodeBtnAction}>Local Decode</button>
                    <button type="button" className="min-w-36 w-full border border-white rounded px-4 py-2 hover:bg-white hover:text-black" onClick={sendBtnAction}>Send to BE</button>
                </div>
            </form>

            <div className="text-wrap">
                <p>xpMsg [{xpMsg}]</p>
                <p className="mt-2">resMsg [{resMsg}]</p>
            </div>
        </div>
    )
}

export default EncryptTest;