import { P } from '../../../../../components/UI/P/P';

export default function InputErrFoot({ err }) {
  return (
    <div className="inputFiled__footer">
      <div className="inputFiled__error">
        <P size="m">{err}</P>
      </div>
    </div>
  );
}
