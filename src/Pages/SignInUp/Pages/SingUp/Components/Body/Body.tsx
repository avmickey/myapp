import {
  InputField,
  InputPassword,
} from '../../../../UI/inputFiled/components/Input';
import inputHOK from '../../../../UI/inputFiled/inputHOK';

export default function Body({ setValue, register, errors, getValues }) {
  const Input = inputHOK(InputField);
  const InputPass = inputHOK(InputPassword);
  return (
    <div className="singUp__body">
      <Input
        req={true}
        setValue={setValue}
        register={register}
        type="text"
        name="login"
        textFiled="Создайте свой логин"
        errors={errors}
      />
      <Input
        req={true}
        setValue={setValue}
        register={register}
        type="email"
        name="email"
        textFiled="Создайте свою почту"
        errors={errors}
      />
      <Input
        req={true}
        setValue={setValue}
        register={register}
        type="tel"
        name="number"
        textFiled="Номер телефона"
        errors={errors}
      />
      <InputPass
        req={true}
        setValue={setValue}
        register={register}
        getValues={getValues}
        type="password"
        name="password"
        textFiled="Пароль"
        errors={errors}
      />
      <InputPass
        req={true}
        setValue={setValue}
        getValues={getValues}
        register={register}
        type="password"
        name="passTwo"
        textFiled="Повторите пароль"
        errors={errors}
        twopass={true}
      />
    </div>
  );
}
