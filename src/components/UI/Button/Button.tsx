import React from 'react';
import './style/Button.scss';
import { useNavigate } from 'react-router-dom';
import { ButtonProps } from './Button.conf';
import { ReactComponent as Arrow } from '../../../img/icons/arrowlong.svg';

export default function Button({
  children,
  valid,
  name,
  arrow,
  path = '',
}: ButtonProps) {
  const router = useNavigate();

  return (
    <button
      onClick={() => {
        router(path);
      }}
      type={valid ? 'button' : 'submit'}
      className={name}
    >
      <div className={name + '__text'}>{children}</div>
      {arrow && (
        <div className={name + '__arrow'}>
          <Arrow />
        </div>
      )}
    </button>
  );
}
