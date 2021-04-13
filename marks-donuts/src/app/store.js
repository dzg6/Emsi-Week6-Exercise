import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '../container/home/homeSlice';
import posReducer from '../container/pos/posSlice';
export const store = configureStore({
  reducer: {
    data: homeReducer,
    pos: posReducer,
  },
});
