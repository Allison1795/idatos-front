import axios from 'axios';

const HTTP = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

HTTP.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');

  req.headers['X-Token'] = token;

  return req;
});

export default HTTP;