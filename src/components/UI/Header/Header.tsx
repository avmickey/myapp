import React from 'react';
import { HeaderProps } from './Header.conf';
import './Header.scss';
import { observer } from 'mobx-react-lite';
import Logo from './Menu/Logo';
import Navigator from './Menu/Navigator';
import AccountMenu from './Menu/AccountMenu';

export const Header = observer(({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header className="header" {...props}>
      <div className="container">
        <div className="header__wrap">
          <Logo />
          <Navigator />
          <AccountMenu />
        </div>
      </div>
    </header>
  );
});
