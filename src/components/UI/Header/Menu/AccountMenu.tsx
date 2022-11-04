import { links } from '../../../UX/Routes/links';
import Button from '../../Button/Button';

export default function AccountMenu() {
  return (
    <div className="accoutmenu">
      <div className="accoutmenu__wrap">
        <div className="accoutmenu__block">
          <Button name="btn1" path={links.LOGIN_ROUTER}>
            Войти
          </Button>
        </div>
      </div>
    </div>
  );
}
