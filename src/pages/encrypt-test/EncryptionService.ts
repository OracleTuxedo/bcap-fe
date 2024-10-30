import CryptoJS from "crypto-js";

const NEXT_PUBLIC_SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY as string;

const encryptAESAndEncodeBase64 = (data: string) => {
  try {
    const ivRandom = CryptoJS.lib.WordArray.random(16);
    const key = CryptoJS.enc.Utf8.parse(NEXT_PUBLIC_SECRET_KEY);

    // Encrypt data
    const encryptedData = CryptoJS.AES.encrypt(data, key, {
      iv: ivRandom,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    const ivBase64 = ivRandom.toString(CryptoJS.enc.Base64);
    const encryptedBase64 = encryptedData.ciphertext.toString(CryptoJS.enc.Base64);

    return { encryptedData: encryptedBase64, iv: ivBase64 };
  } catch (error) {
    let errorMessage = "Encryption failed";
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;
    }
    return errorMessage;
  }
};

const decodeBase64AndDecryptAES = (encryptedData: string, ivData: string) => {
  try {
    const key = CryptoJS.enc.Utf8.parse(NEXT_PUBLIC_SECRET_KEY);
    const iv = CryptoJS.enc.Base64.parse(ivData);

    // Decrypt the Base64-encoded ciphertext
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);

    // Check if decryption returned an empty string
    if (!decryptedText) {
      throw new Error('Decryption resulted in an empty string.');
    }

    return decryptedText;
  } catch (error) {
    let errorMessage = "Decryption failed";
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;
    }
    return errorMessage;
  }
};

export { encryptAESAndEncodeBase64, decodeBase64AndDecryptAES };