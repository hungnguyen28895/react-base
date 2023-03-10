import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { NotificationsState } from '../types';

const initialState: NotificationsState = {
  notifications: [],
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications.push({ id: nanoid(), ...action.payload });
    },
    dismissNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
  },
});

export const { addNotification, dismissNotification } = notificationsSlice.actions;
export const selectNotification = (state: NotificationsState) => state.notifications;
