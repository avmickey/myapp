import {
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

export interface UserTypes {
  [key: string]: any;
}

export interface BodySignTypes<TFieldValues extends FieldValues = FieldValues> {
  fetching: (el: any) => void;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
  loading: boolean;
  btn: string;
  children: React.ReactNode | React.ReactChild;
}

export interface FiledValue {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  select: string;
}

export interface SignInputAll<TFieldValues extends FieldValues = FieldValues> {
  register: UseFormRegister<SignData | TFieldValues>;
  errors: FieldErrors<SignData | TFieldValues>;
}

export interface ISecondPageUp<TFieldValues extends FieldValues = FieldValues>
  extends SignInputAll {
  getValues?: UseFormGetValues<TFieldValues>;
}

export type BodyUpProps = ISecondPageUp;

export interface BodyInProps extends SignInputAll {
  remember: boolean;
  setRemember: (remember: boolean) => void;
}

export interface RememberProps {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export interface InputFiledTypes<
  TFieldValues extends FieldValues = FieldValues
> {
  errors: FieldErrors<SignData | TFieldValues>;
  type: string;
  textFiled?: string;
  register: UseFormRegister<SignData | TFieldValues>;
  req?: boolean;
  name: string;
  getValues?: UseFormGetValues<TFieldValues>;
  twopass?: boolean;
}

// Forms =================

export interface SignData {
  password: string;
  email: string;
}

export interface SignUpData extends SignData {
  login: string;
  number: string;
  passTwo: string;
}
