import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../../../..';
import { links } from '../../../UX/Routes/links';
import Button from '../../Button/Button';
import { P } from '../../P/P';
import { ReactComponent as User } from '../../../../img/icons/user.svg';

const AccountMenu = observer(() => {
  const { user } = useContext(Context);
  const userdata = user.getUser;

  const handleMouse = (e: React.MouseEvent) => {
    (e.target as HTMLElement)
      ?.closest('.accoutmenu__wrap')
      ?.classList.toggle('add');
  };

  const handleExit = (e: React.MouseEvent) => {
    localStorage.setItem('token', '0');
    user.setIsAuth = false;
    user.setUser = {};
    handleMouse(e);
  };

  return (
    <div className="accoutmenu">
      <div className="accoutmenu__wrap">
        {user.getIsAuth ? (
          <>
            <div onClick={handleMouse} className="accoutmenu__user">
              <div className="accoutmenu__login">
                <P size="m">{userdata.login}</P>
              </div>
              <div className="accoutmenu__icon">
                <User />
              </div>
            </div>
            <div className="menublock">
              <ul>
                <li onClick={handleExit}>
                  <P size="m">Exit</P>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="accoutmenu__block">
            <Button name="btn1" path={links.LOGIN_ROUTER}>
              Войти
            </Button>
          </div>
        )}
      </div>
    </div>
  );
});

export default AccountMenu;
