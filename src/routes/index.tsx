import { useAuth0 } from '@auth0/auth0-react';
import { useRoutes } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const { isAuthenticated } = useAuth0<{
    name: string;
  }>();

  const commonRoutes = [{ path: '/', element: <LandingPage /> }];

  const routes = isAuthenticated ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
