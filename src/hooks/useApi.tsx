import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useEffect, useRef } from 'react';

export default () => {
  const { getAccessTokenSilently, loginWithRedirect } = useAuth0();
  const api = useRef(
    axios.create({
      baseURL: '/api/operations',
    })
  );
  useEffect(() => {
    const currentAPI = api.current;
    const requestInterceptorId = currentAPI.interceptors.request.use(
      async (config) => {
        const token = await getAccessTokenSilently();
        if (config.headers === undefined) {
          config.headers = {};
        }
        config.headers.authorization = `Bearer ${token}`;
        config.cancelToken = axios.CancelToken.source().token;
        return config;
      }
    );
    const responseInterceptorId = currentAPI.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.config && error.response && error.response.status === 401) {
          await loginWithRedirect({
            redirect_uri: window.location.origin,
          });
        }
        /* TODO:
					- use notification system of mantine library to alert user on error
					- const message = error.response?.data?.message || error.message;
				*/

        return Promise.reject(error);
      }
    );
    return () => {
      currentAPI.interceptors.request.eject(requestInterceptorId);
      currentAPI.interceptors.response.eject(responseInterceptorId);
    };
  });
  return api.current;
};
