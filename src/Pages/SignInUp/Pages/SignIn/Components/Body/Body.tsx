import {
  InputField,
  InputPassword,
} from '../../../../UI/inputFiled/components/Input';
import inputHOK from '../../../../UI/inputFiled/inputHOK';
import { BodyFirstStep } from '../../../../Types/interface';
import Remember from '../Remember/Remember';

export default function Body({
  setValue,
  register,
  errors,
  setRemember,
  remember,
}: BodyFirstStep) {
  const Input = inputHOK(InputField);
  const InputPass = inputHOK(InputPassword);
  return (
    <>
      <div className="singIn__blockOne">
        <Input
          req={true}
          setValue={setValue}
          register={register}
          type="text"
          name="email"
          textFiled="Почта / Номер телефона"
          errors={errors}
        />
        <InputPass
          req={true}
          name="password"
          register={register}
          type="password"
          textFiled="Пароль"
          errors={errors}
          setValue={setValue}
          signin={true}
        />
      </div>
      <Remember checked={remember} onClick={() => setRemember(!remember)} />
    </>
  );
}
