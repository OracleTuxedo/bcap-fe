import CryptoJS from "crypto-js";

const NEXT_PUBLIC_SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY as string;

// Method to encode Base64 and then AES encrypt
const encryptAESAndEncodeBase64 = (data: string) => {
  try {
    const ivRandom = CryptoJS.lib.WordArray.random(16);
    const encryptedData = CryptoJS.AES.encrypt(data, NEXT_PUBLIC_SECRET_KEY, { iv: ivRandom }).toString();

    const ivBase64 = ivRandom.toString(CryptoJS.enc.Base64);
    const encodedBase64 = Buffer.from(encryptedData).toString('base64');

    return { encryptedData: encodedBase64, iv: ivBase64 };
  } catch (error) {
    let errorMessage = "Encryption failed"
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;
    }
    return errorMessage;
  }
}

// Method to decode Base64 first, then decrypt AES
const decodeBase64AndDecryptAES = (encryptedData: string, ivData: string) => {
  try {
    const decodedBase64 = Buffer.from(encryptedData, 'base64').toString('utf8');

    const decryptedBytes = CryptoJS.AES.decrypt(decodedBase64, NEXT_PUBLIC_SECRET_KEY, {  iv: CryptoJS.enc.Utf8.parse(ivData) });
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);

    // Check if decryption returned an empty string
    if (!decryptedText) {
      throw new Error('Decryption resulted in an empty string.');
    }

    return decryptedText;
  } catch (error) {
    let errorMessage = "Decryption failed"
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;
    }
    return errorMessage;
  }
}

export {encryptAESAndEncodeBase64, decodeBase64AndDecryptAES};
