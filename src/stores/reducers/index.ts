import { combineReducers } from '@reduxjs/toolkit';

import { counterSlice } from '@/features/counter';

import { notificationsSlice } from '../reducers/notifications';

export const appReducer = combineReducers({
  counter: counterSlice.reducer,
  notification: notificationsSlice.reducer,
});
