import { LandingPagesRoutes } from '@/features/landing/routes';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BaseApp } from './BaseApp';
import RouteError from '@/components/Error/Error';

const routesList: RouteObject[] = [
  {
    path: '',
    element: <BaseApp />,
    errorElement: <RouteError />,
    children: [LandingPagesRoutes],
  },
];
const router = createBrowserRouter([...routesList]);

export const AppRouter = () => {
  return <RouterProvider router={router} fallbackElement={<p>Logo loader</p>} />;
};
