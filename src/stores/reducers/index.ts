import { combineReducers } from '@reduxjs/toolkit';

import { counterSlice } from '../../features/counter';

export const appReducer = combineReducers({
  counter: counterSlice.reducer,
});
