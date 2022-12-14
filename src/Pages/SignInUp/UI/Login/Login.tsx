import { Location, useLocation } from 'react-router-dom';
import SignUp from '../../Pages/SingUp/SignUp';
import './style/Login.scss';
import { SignIn } from '../../Pages/SignIn/SignIn';
import { links } from '../../../../components/UX/Routes/links';
import HaveAccount from './Components/HaveAccount';

const Login: React.FC = () => {
  const { pathname }: Location = useLocation();
  const isLogin = pathname.includes(links.LOGIN_ROUTER);

  return (
    <>
      <div className="login">
        <div className={isLogin ? 'login__container' : 'login__container rg'}>
          <div className="login__body">
            <div className="login__title">
              <h2>{isLogin ? 'Вход' : 'Создать аккаунт'}</h2>
            </div>
            {isLogin ? <SignIn /> : <SignUp />}
            <HaveAccount isLogin={isLogin} links={links} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
