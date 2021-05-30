/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import axios from 'axios';

const apiClient = axios.create({
  baseURL:
    process.env.REACT_APP_API_HOST ||
    'https://3001-silver-parakeet-uvgrqdoj.ws-eu07.gitpod.io',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient;
