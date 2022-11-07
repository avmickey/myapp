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
        message: response.message,
      });
    } else if (response.message.includes('номер')) {
      setError('number', {
        type: 'custom',
        message: response.message,
      });
    } else if (response.message.includes('логин')) {
      setError('login', {
        type: 'custom',
        message: response.message,
      });
    }
  } else if (login) {
    console.log(response.message.includes('email'));

    if (response.message.includes('email')) {
      console.log(2);

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
