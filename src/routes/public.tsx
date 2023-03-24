import { lazyImport } from '@/utils/lazyImport';

const { CounterRoute } = lazyImport(() => import('@/features/counter'), 'CounterRoute');

export const publicRoutes = [
  {
    path: '/counter',
    element: <CounterRoute />,
  },
];
