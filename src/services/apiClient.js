import axios from 'axios';

const apiClient = axios.create({
  //   baseURL: config.apiBaseUrl,
  baseURL: 'https://3000-silver-parakeet-uvgrqdoj.ws-eu07.gitpod.io',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient;
