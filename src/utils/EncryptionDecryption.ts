import { NEXT_PUBLIC_SECRET_KEY } from '@/config/constants';
import CryptoJS from 'crypto-js';

export interface EncryptDecryptParam {
  encryptedMessage: string;
  iv: string;
}

/**
 * Encryption using AES and Encode Base64
 * @param data string
 * @returns EncryptDecryptParam
 */
const encryption = (data: string): EncryptDecryptParam => {
  try {
    const ivRandom = CryptoJS.lib.WordArray.random(16);
    const key = CryptoJS.enc.Utf8.parse(NEXT_PUBLIC_SECRET_KEY);

    // Encrypt data
    const encryptedData = CryptoJS.AES.encrypt(data, key, {
      iv: ivRandom,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    const ivBase64 = ivRandom.toString(CryptoJS.enc.Base64);
    const encryptedBase64 = encryptedData.ciphertext.toString(
      CryptoJS.enc.Base64,
    );

    return {
      encryptedMessage: encryptedBase64,
      iv: ivBase64,
    } as EncryptDecryptParam;
  } catch (error) {
    /// TODO Error handling
    throw error;
  }
};
/**
 * Decryption using AES and Decode Base64
 * @param param EncryptDecryptParam
 * @returns string
 */
const decryption = ({ encryptedMessage, iv }: EncryptDecryptParam) => {
  try {
    const key: CryptoJS.lib.WordArray = CryptoJS.enc.Utf8.parse(
      NEXT_PUBLIC_SECRET_KEY,
    );
    const ivData: CryptoJS.lib.WordArray = CryptoJS.enc.Base64.parse(iv);

    // Decrypt the Base64-encoded ciphertext
    const decryptedBytes: CryptoJS.lib.WordArray = CryptoJS.AES.decrypt(
      encryptedMessage,
      key,
      {
        iv: ivData,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      },
    );
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);

    // Check if decryption returned an empty string
    if (!decryptedText) {
      throw new Error('Decryption resulted in an empty string.');
    }

    return decryptedText;
  } catch (error) {
    /// TODO Error handling
    throw error;
  }
};

export { encryption, decryption };
