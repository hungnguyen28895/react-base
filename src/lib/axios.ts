import Axios, { AxiosRequestConfig } from 'axios';
import { useDispatch } from 'react-redux';

import { API_URL } from '@/config';
import { addNotification } from '@/stores/reducers/notifications';
import storage from '@/utils/storage';

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `${token}`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const dispatch = useDispatch();
    const message = error.response?.data?.message || error.message;
    dispatch(
      addNotification({
        type: 'error',
        title: 'Error',
        message,
      })
    );

    return Promise.reject(error);
  }
);
