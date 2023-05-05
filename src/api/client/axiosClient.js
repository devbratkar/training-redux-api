// ADVANCE.

import axios from "axios"

const METHODS = {
  GET: 'GET', POST: 'POST', PATCH: 'PATCH', PUT: 'PUT', DELETE: 'DELETE',
};

export const request = (url, method, payload = {}, params = {}, axiosRequestConfig = {}) => {
  if (!METHODS[method]) throw new Error('Method is not correct.')

  return axios.request({
    baseURL: import.meta.env.VITE_BASE_URL,
    url,
    params,
    method,
    data: payload,
    ...axiosRequestConfig
  })
};

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const consoleStyle = 'background: #0a95ff; color: #bada55; font-weight: bold; border-radius: 0.3rem; padding: 0.3rem'
// Interceptor for all the responses we get.
axios.interceptors.response.use(
  (response) => {
    // This will only logs the response, which are using this axios instance.
    const responseFrom = (response?.config?.baseURL ?? '') + (response?.config?.url ?? '');

    console.log(`%c Response from ${responseFrom}: \n`, consoleStyle, response);

    return response
  },
  (error) => {
    return Promise.reject(error)
  }
);