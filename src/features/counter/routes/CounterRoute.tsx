import { ContentLayout } from '@/components/Layout';

import { Counter } from '../components/Counter';

export const CounterRoute = () => {
  return (
    <ContentLayout title="Counter">
      <Counter />
    </ContentLayout>
  );
};
