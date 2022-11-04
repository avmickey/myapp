import { P } from '../../P/P';

export default function Navigator() {
  return (
    <div className="navbar">
      <nav className="navbar__wrap">
        <ul className="navbar__block">
          <li>
            <P size="m">Главная</P>
          </li>
          <li>
            <P size="m">Все тарифы</P>
          </li>
          <li>
            <P size="m">Возможности</P>
          </li>
          <li>
            <P size="m">Контакты</P>
          </li>
        </ul>
      </nav>
    </div>
  );
}
