import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from './protected';
// import { publicRoutes } from './public';
// import { useAuth } from '@/lib/auth';

export const AppRoutes = () => {
  // const auth = useAuth();

  const commonRoutes = [{ path: '/', element: <div>React Base</div> }];

  // const routes = auth.user ? protectedRoutes : publicRoutes;
  const routes = protectedRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
