import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';

import MainLayout from './layouts/MainLayout';

const RefinedSearch = lazy(() => import('@pages/RefinedSearch'));

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <RefinedSearch />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
