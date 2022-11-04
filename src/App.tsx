import React, { useContext, useEffect } from 'react';
import './style/App.scss';
import './style/zero.scss';
import { Context } from './index';
import useLoading from './Hook/useLoading';
import { check } from './http/authAPI';
import { observer } from 'mobx-react-lite';
import jwtDecode from 'jwt-decode';
import Routers from './components/UX/Routes/Routes';

const App: React.FC = observer((): JSX.Element => {
  const { user } = useContext<React.ContextType<typeof Context>>(Context);
  const [, fetching] = useLoading(async () => {
    check().then(
      (resolve) => {
        if (resolve) {
          user.setIsAuth = true;
          user.setUser = jwtDecode(resolve);
        }
      },
      (err) => {
        console.log(err.message);
      }
    );
  });

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      <Routers />
    </>
  );
});

export default App;
