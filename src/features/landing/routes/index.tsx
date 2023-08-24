import { lazyImport } from '@/utils/lazy-imports';
import { Outlet, RouteObject } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import RouteError from '@/components/Error/Error';
const { Home } = lazyImport(() => import('./Home'), 'Home');

const LandingPageRouteList: RouteObject[] = [{ index: true, element: <Home /> }];
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
