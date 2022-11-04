import {
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
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
  register: UseFormRegister<ValueIn | TFieldValues>;
  errors: FieldErrors<ValueIn | TFieldValues>;
  setValue: UseFormSetValue<ValueIn | TFieldValues>;
}

export interface ISecondPageUp<TFieldValues extends FieldValues = FieldValues>
  extends SignInputAll {
  getValues?: UseFormGetValues<TFieldValues>;
}

export interface BodyFirstStep extends SignInputAll {
  remember: boolean;
  setRemember: (remember: boolean) => void;
}

export interface RememberProps {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void;
  checked: boolean;
}

// New bloks input

export interface HOKInputTypes<TFieldValues extends FieldValues = FieldValues>
  extends BaseInputTypes {
  errors: FieldErrors<ValueIn | TFieldValues>;
  setValue: UseFormSetValue<ValueIn | TFieldValues>;
}

export interface InputFiledTypes extends BaseInputTypes {
  err: any;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data?: string;
  valid: (item: string) => any;
}

export interface BaseInputTypes<
  TFieldValues extends FieldValues = FieldValues
> {
  type: string;
  textFiled?: string;
  register: UseFormRegister<ValueIn | TFieldValues>;
  tel?: boolean | false;
  code?: string;
  req?: boolean;
  name: string;
  signin?: boolean;
  getValues?: UseFormGetValues<TFieldValues>;
  twopass?: boolean;
}

// Forms =================

export interface ValueIn {
  password: string;
  email: string;
}
