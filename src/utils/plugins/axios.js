import axios from 'axios'

import {API_URL} from '../../config/constants'


let axiosInstance = axios.create();

axiosInstance.defaults.baseURL = API_URL;
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.common['Accept-Language'] = 'az';

axiosInstance.interceptors.request.use(
    async (config) => {
        let token = await localStorage.getItem('fampact_access_token');
        if (token) {
            config.headers.common['Authorization'] = `Token ${token}`;
        }

        return config;
    }
);

axiosInstance.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
        if (error.response.status === 401) {
            window.localStorage.clear();
        }
        return Promise.reject(error.response.data)
    }
);

export default axiosInstance;
