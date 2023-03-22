import { CounterState } from '@/features/counter';

export type RootState = {
  counter: CounterState;
};

export type NotificationsState = {
  notifications: Notification[];
};

export type Notification = {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message?: string;
};
