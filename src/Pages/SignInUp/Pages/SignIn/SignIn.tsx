import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './style/SingIn.scss';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { login } from '../../../../http/authAPI';
import Body from './Components/Body/Body';
import useLoading from '../../../../Hook/useLoading';
import { observer } from 'mobx-react-lite';
import SignBody from '../../UI/Login/Components/SignBody/SignBody';
import { Context } from '../../../..';
import { validateUserValue } from '../SingUp/Components/validateUserValue/validateUserValue';
import jwtDecode from 'jwt-decode';

export const SignIn: React.FC = observer(() => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    setValue,
  } = useForm({ mode: 'onChange' });
  const router: NavigateFunction = useNavigate();
  const [remember, setRemember] = useState(true);
  const { user } = useContext(Context);
  const [isLoading, fetching] = useLoading(async (data) => {
    const response = await login(remember, data);
    if (response.message == 'Ok') {
      user.setIsAuth = true;
      user.setUser = jwtDecode(response.token);
      router('/');
    } else {
      validateUserValue(response, setError, true);
    }
  });

  return (
    <SignBody
      loading={isLoading}
      fetching={fetching}
      handleSubmit={handleSubmit}
      btn="Войти"
    >
      <Body
        register={register}
        errors={errors}
        remember={remember}
        setRemember={setRemember}
        setValue={setValue}
      />
    </SignBody>
  );
});
