import './style/SingUp.scss';
import { useForm } from 'react-hook-form';
import { UserTypes } from '../../Types/interface';
import useLoading from '../../../../Hook/useLoading';
import { useNavigate } from 'react-router-dom';
import { validateUserValue } from './Components/validateUserValue/validateUserValue';
import { useContext } from 'react';
import Body from './Components/Body/Body';
import SignBody from '../../UI/Login/Components/SignBody/SignBody';
import { Context } from '../../../..';
import { registration } from '../../../../http/authAPI';
import jwtDecode from 'jwt-decode';

export default function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
  } = useForm<UserTypes>({ mode: 'onSubmit' });
  const router = useNavigate();
  const { user } = useContext(Context);
  const [isLoading, fetching] = useLoading(async (data) => {
    const response = await registration(data);
    if (response.message == 'Ok') {
      user.setIsAuth = true;
      user.setUser = jwtDecode(response.token);
      router('/');
    } else {
      validateUserValue(response, setError, false);
    }
  });

  return (
    <SignBody
      loading={isLoading}
      fetching={fetching}
      handleSubmit={handleSubmit}
      btn="Создать"
    >
      <Body register={register} errors={errors} getValues={getValues} />
    </SignBody>
  );
}
