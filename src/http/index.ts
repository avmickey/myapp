import { FieldValues } from 'react-hook-form';
import axios from 'axios';
import { links } from '../components/UX/Routes/links';

const $host = axios.create({
  baseURL: links.API_URL,
});

const $authHost = axios.create({
  baseURL: links.API_URL,
});

const authInterceptor = (config: FieldValues) => {
  const token = JSON.parse(
    JSON.parse(JSON.stringify(localStorage.getItem('token') || {}))
  );
  config.headers.authorization = `Bearer ${token}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
