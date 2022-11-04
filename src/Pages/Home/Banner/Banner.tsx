import { P } from '../../../components';
import './Banner.scss';

export default function Banner(): JSX.Element {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__row">
          <div className="banner__wrap">
            <BannerImg />
            <BannerArticle />
          </div>
        </div>
      </div>
    </section>
  );
}

const BannerImg = (): JSX.Element => {
  return <div className="bannerimg"></div>;
};

const BannerArticle = (): JSX.Element => {
  return (
    <div className="bannerarticle">
      <div className="bannerarticle__wrap">
        <div className="bannerarticle__body">
          <div className="bannerarticle__text">
            <P size="m">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              sunt cum dolore ab nostrum quia.
            </P>
          </div>
        </div>
      </div>
    </div>
  );
};
