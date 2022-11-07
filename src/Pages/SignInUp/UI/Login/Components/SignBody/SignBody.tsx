import { FieldValues, SubmitHandler } from 'react-hook-form';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Button from '../../../../../../components/UI/Button/Button';
import { P } from '../../../../../../components/UI/P/P';
import { BodySignTypes } from '../../../../Types/interface';
import { ReactComponent as Arrow } from '../../../../../../img/icons/arrow.svg';

import './SignBody.scss';

const SignBody: React.FC<BodySignTypes> = ({
  fetching,
  handleSubmit,
  loading,
  btn,
  children,
}) => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(2);

    fetching(data);
  };

  const router: NavigateFunction = useNavigate();

  return (
    <form
      className={loading ? 'signbody load' : 'signbody'}
      onSubmit={handleSubmit(onSubmit)}
    >
      {children}
      <div className="signbody__footer">
        <div onClick={() => router('/')} className="signbody__wrap">
          <div className="signbody__arrow">
            <Arrow />
          </div>
          <Button name="btn2" valid={true}>
            <div className="signbody__text">
              <P size="l">Назад</P>
            </div>
          </Button>
        </div>
        <div className="signbody__btn">
          <Button name="btn1" valid={false}>
            {btn}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignBody;
