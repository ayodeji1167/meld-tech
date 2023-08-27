import { lazyImport } from '@/utils/lazy-imports';
import { Outlet, RouteObject } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import RouteError from '@/components/Error/Error';
import { RoutesEnum } from '@/config/constants/route';
const { Home } = lazyImport(() => import('./Home'), 'Home');
const { Contact } = lazyImport(() => import('./Contact'), 'Contact');

const LandingPageRouteList: RouteObject[] = [
  { index: true, element: <Home /> },
  { path: RoutesEnum.CONTACT, element: <Contact /> },
];
const LandingPagesRouteOutlet = (
  <Layout>
    <Outlet />
  </Layout>
);

export const LandingPagesRoutes: RouteObject = {
  path: '',
  element: LandingPagesRouteOutlet,
  errorElement: <RouteError />,
  children: LandingPageRouteList,
};
