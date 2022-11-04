import React, { useState, useEffect } from 'react';
import { HOKInputTypes, InputFiledTypes } from '../../Types/interface';
import { renderInput } from './components/inputFocus';

export default function hokInput<T extends HOKInputTypes>(
  ComponentInput: React.ComponentType<InputFiledTypes>
) {
  return function Wrapper({ setValue, errors, name, ...props }: T) {
    const [data, setData] = useState('');
    const err: string = errors[name] && (errors[name]?.message || 'Error');

    useEffect(() => {
      renderInput(setData, data, name);
    }, []);

    const valid = (item: string) => {
      const config: any = {};
      if (item == 'email') {
        config.value = /[a-z0-9%^$#_]*@[a-z\-0-9]*\.[a-z]{2,4}/gi;
        config.message = 'Неверный адрес электронной почты';
      }
      if (item == 'tel') {
        config.value = /^\d{9,10}$/gi;
        config.message = 'Неверный номер телефона';
      }
      if (item == 'password') {
        config.value =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm;
        config.message =
          'Минимум восемь символов, минимум одна заглавная буква и одна цифра';
      }
      return config;
    };

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData(e.target.value);
      setValue(name, e.target.value);
    };

    return (
      <ComponentInput
        err={err}
        name={name}
        change={change}
        valid={valid}
        data={data}
        {...props}
      />
    );
  };
}
