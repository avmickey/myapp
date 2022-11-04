import React from 'react';
import { PConf } from './P.conf';
import './style/P.scss';

const P: React.FC<PConf> = ({ size, children }): JSX.Element => {
  return <p className={size}>{children}</p>;
};

export { P };
