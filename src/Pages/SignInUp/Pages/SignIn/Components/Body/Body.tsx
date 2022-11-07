import { BodyInProps } from '../../../../Types/interface';
import { InputElem, InputPassword } from '../../../../UI/inputFiled/Input';
import Remember from '../Remember/Remember';

export default function Body({
  register,
  errors,
  setRemember,
  remember,
}: BodyInProps) {
  return (
    <>
      <div className="singIn__blockOne">
        <InputElem
          req={true}
          register={register}
          type="text"
          name="email"
          textFiled="Почта / Номер телефона"
          errors={errors}
        />

        <InputPassword
          req={true}
          name="password"
          register={register}
          type="password"
          textFiled="Пароль"
          errors={errors}
        />
      </div>
      <Remember checked={remember} onClick={() => setRemember(!remember)} />
    </>
  );
}
