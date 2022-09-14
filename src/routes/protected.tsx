import { Loader } from '@mantine/core';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: '/discussions/*', element: <></> },
      { path: '/users', element: <></> },
      { path: '/profile', element: <></> },
      { path: '/', element: <></> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
