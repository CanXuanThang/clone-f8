import { API_HOST } from '@src/config';
import axios from 'axios';
import Cookies from 'js-cookie';
import { accessToken } from '../constants';
import type { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

const defaultConfig = {
    baseURL: API_HOST,
    headers: { 'Content-Type': 'application/json' },
};

const defaultFormDataConfig = {
    baseURL: API_HOST,
    headers: { 'Content-Type': 'multipart/form-data' },
};

const axiosClient = axios.create(defaultConfig);
const axiosClientCDN = axios.create(defaultFormDataConfig);

axiosClient.interceptors.request.use(
    function (config) {
        const token = Cookies.get(accessToken);
        if (config.headers) {
            config.headers.Authorization = token ? `Bearer ${token}` : '';
        }
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

axiosClient.interceptors.response.use(
    function (response: AxiosResponse) {
        return {
            ...response.data,
            status: response.status,
        };
    },
    function (error: AxiosError) {
        if (error.response?.status === 401) {
            Cookies.remove(accessToken);
        }
        return Promise.reject({
            ...(error.response?.data as any),
            status: error.response?.status,
            statusCode: error.response?.status,
        });
    }
);

const callApi = async <R>(options: AxiosRequestConfig, isCDN?: boolean) => {
    try {
        const response = isCDN ? await axiosClientCDN<any, R>(options) : await axiosClient<any, R>(options);
        return { response };
    } catch (err) {
        const error = err as R;
        return { error };
    }
};

export { callApi };
