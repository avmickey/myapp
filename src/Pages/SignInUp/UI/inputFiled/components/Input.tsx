import React, { useState } from 'react';
import '../style/inputFiled.scss';
import { ReactComponent as Eye } from '../../../../../img/icons/eye.svg';
import { ReactComponent as Close } from '../../../../../img/icons/closeEye.svg';
import { InputFiledTypes } from '../../../Types/interface';
import InputErrFoot from './InputErrFoot';
import { focus, focusinput } from './inputFocus';

export const InputPassword: React.FC<InputFiledTypes> = ({
  type,
  textFiled,
  register,
  req,
  name,
  signin,
  getValues,
  data,
  err,
  change,
  valid,
  twopass,
}) => {
  const [passSea, setPassSea] = useState(false);

  const changeEye = () => {
    setPassSea(() => !passSea);
  };
  const obj = !signin
    ? {
        pattern: !twopass ? valid(type) : undefined,
        validate: twopass
          ? (value: string) =>
              (getValues && value == getValues('password')) ||
              'Пароль не совпадает'
          : undefined,
      }
    : null;

  return (
    <div className="inputFiled">
      <div onClick={focusinput} className="inputFiled__background">
        <div className="inputFiled__block">
          <div className="inputFiled__text old all">{textFiled}</div>
          <input
            {...register(name, {
              required: req ? 'Поле должно быть заполнено' : false,
              ...obj,
            })}
            onFocus={focus}
            onBlur={focus}
            onChange={change}
            value={data}
            type={passSea ? 'text' : type}
          />
          <div onClick={changeEye} className="inputFiled__eye">
            {passSea ? <Close /> : <Eye />}
          </div>
        </div>
      </div>
      <InputErrFoot err={err} />
    </div>
  );
};

export function InputField({
  type,
  textFiled,
  register,
  tel,
  code,
  req,
  name,
  err,
  change,
  data,
  valid,
}: InputFiledTypes) {
  return (
    <div className="inputFiled">
      <div
        onClick={focusinput}
        className={
          err ? 'inputFiled__background err' : 'inputFiled__background'
        }
      >
        <div className="inputFiled__block">
          <div
            className={
              tel ? 'inputFiled__text old tel' : 'inputFiled__text old all'
            }
          >
            {tel ? code : textFiled}
          </div>
          <input
            {...register(name, {
              required: req ? 'Поле должно быть заполнено' : false,
              pattern: valid(type),
            })}
            onFocus={focus}
            onBlur={focus}
            onChange={change}
            value={data}
            type={type}
          />
        </div>
      </div>
      <InputErrFoot err={err} />
    </div>
  );
}
