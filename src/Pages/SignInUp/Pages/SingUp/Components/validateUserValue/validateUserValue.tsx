import { FieldValues, UseFormSetError } from 'react-hook-form';

export const validateUserValue = (
  response: any,
  setError: UseFormSetError<FieldValues>,
  login: boolean
) => {
  if (!login) {
    if (response.message.includes('email')) {
      setError('email', {
        type: 'custom',
        message: 'Данный email уже существует',
      });
    } else if (response.message.includes('номер')) {
      setError('number', {
        type: 'custom',
        message: 'Данный номер уже существует',
      });
    } else if (response.message.includes('логин')) {
      setError('login', {
        type: 'custom',
        message: 'Данный логин уже существует',
      });
    }
  } else if (login) {
    if (response.message.includes('email')) {
      setError('email', {
        type: 'custom',
        message: 'почта или номер не найден',
      });
    } else if (response.message.includes('пароль')) {
      setError('password', {
        type: 'custom',
        message: 'неверный пароль',
      });
    }
  }
};
