import { AdminLayoutProps } from './AdminLayout.conf';
import { FunctionComponent } from 'react';
import './AdminLayout.scss';
import { Footer, Header } from '../../..';

export const AdminLayout = ({ children }: AdminLayoutProps): JSX.Element => {
  return (
    <div className="layoutWrapper">
      <Header />
      <div className="layoutWrapper__body">{children}</div>
      <Footer />
    </div>
  );
};

export const withAdminLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withAdminLayoutComponent(props: T): JSX.Element {
    return (
      <AdminLayout>
        <Component {...props} />
      </AdminLayout>
    );
  };
};
