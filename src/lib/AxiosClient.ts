import { BACKEND_URL } from '@/config/constants';
import { EncryptDecryptParam, encryption, decryption } from '@/utils';
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const axiosClient = axios.create({
  baseURL: BACKEND_URL,
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Accept-Language': 'id-ID',
  //   'X-Api-Version': '1',
  // },
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    /// Process some encryption before sending to Backend
    if (config.data && config.url === '/message') {
      const requestToTuxedo: string = config.data;
      const body: EncryptDecryptParam = encryption(requestToTuxedo);
      config.data = body;
    }
    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['ngrok-skip-browser-warning'] = '*';
    return config;
  },
  (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response.data && response.config.url === '/message') {
      const body: EncryptDecryptParam = response.data;
      const responseFromTuxedo: string = decryption(body);
      response.data = responseFromTuxedo;
    }
    return response;
  },
  (error) => Promise.reject(error),
);
