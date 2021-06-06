/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_HOST || 'http://localhost:3001',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient;
