import React from 'react';
import './Footer.scss';
import { FooterProps } from './Footer.conf';
import { P } from '../P/P';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <footer className="layoutWrapper__footer" {...props}>
      <div className="container">
        <div className="footer">
          <ul className="footer__wrap">
            <li>
              <P size="l">Главная</P>
            </li>
            <li>
              <P size="l">Помошь</P>
            </li>
            <li>
              <P size="l">О нас</P>
            </li>
            <li>
              <P size="l">Вакансии</P>
            </li>
            <li>
              <P size="l">Поддержка</P>
            </li>
            <li>
              <P size="l">© DiskDoodad, 2022</P>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
