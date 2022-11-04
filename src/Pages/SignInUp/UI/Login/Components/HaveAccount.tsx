import Button from '../../../../../components/UI/Button/Button';
import { P } from '../../../../../components/UI/P/P';

export default function HaveAccount({ isLogin, links }) {
  return (
    <>
      {isLogin ? (
        <div className="login__singUp footinup">
          <div className="footinup__text">
            <P size="l">У вас еще нет аккаунта?</P>
          </div>
          <div className="footinup__btn">
            <Button name="btn2" valid={false} path={links.REGISTRATION_ROUTER}>
              <P size="l">Создать аккаунт</P>
            </Button>
          </div>
        </div>
      ) : (
        <div className="login__singUp footinup">
          <div className="footinup__text">
            <P size="l">У вас уже есть аккаунт?</P>
          </div>
          <div className="footinup__btn">
            <Button name="btn2" valid={false} path={links.LOGIN_ROUTER}>
              <P size="l">Войти</P>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
