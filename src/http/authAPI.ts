import { AxiosError } from 'axios';
import { FieldValues } from 'react-hook-form';
import { $authHost, $host } from '../http/index';

export const registration = async (arg: FieldValues): Promise<any> => {
  try {
    const { data } = await $host.post('api/user/registration', {
      ...arg[0],
    });
    localStorage.setItem('token', JSON.stringify(data.token));
    return data;
  } catch (err) {
    if (err instanceof AxiosError) return err.response?.data;
    else return err;
  }
};

export const login = async (
  remember: boolean,
  arg: FieldValues
): Promise<any> => {
  try {
    const { data } = await $host.post('api/user/login', {
      ...arg[0],
    });
    if (remember) {
      localStorage.setItem('token', JSON.stringify(data.token));
    }
    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data;
    } else return err;
  }
};

export const check = async (): Promise<any> => {
  try {
    const { data } = await $authHost.get('api/user/check');
    localStorage.setItem('token', JSON.stringify(data.token));
    return data;
  } catch (err) {
    if (err instanceof AxiosError) {
      throw err?.response?.data;
    } else return err;
  }
};
