import { Navigate, Route, Routes } from 'react-router-dom';
import { withAdminLayout } from '../../';
import Login from '../../../Pages/SignInUp/UI/Login/Login';
import { links } from './links';
import { publicRoutes } from './publicRoutes';

export default function Routers() {
  return (
    <Routes>
      <Route element={<Login />} path={links.LOGIN_ROUTER} />
      <Route element={<Login />} path={links.REGISTRATION_ROUTER} />
      <Route element={<Navigate to="/" replace />} path="*" />
      {publicRoutes.map((item) => {
        const El = withAdminLayout(item.element);
        return <Route key={item.path} element={<El />} path={item.path} />;
      })}
    </Routes>
  );
}
