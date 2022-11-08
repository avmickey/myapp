import { Navigate, Route, Routes } from 'react-router-dom';
import { layoutHOK } from '../../';
import Login from '../../../Pages/SignInUp/UI/Login/Login';
import { links } from './links';
import { publicRoutes } from './publicRoutes';

export default function Routers() {
  return (
    <Routes>
      <Route element={<Login />} path={links.LOGIN_ROUTER} />
      <Route element={<Login />} path={links.REGISTRATION_ROUTER} />
      <Route
        element={<Navigate to={`${process.env.PUBLIC_URL}/`} replace />}
        path="*"
      />
      {publicRoutes.map((item) => {
        const El = layoutHOK(item.element);
        return <Route key={item.path} element={<El />} path={item.path} />;
      })}
    </Routes>
  );
}
