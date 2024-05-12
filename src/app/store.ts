import { configureStore } from '@reduxjs/toolkit';
import { globalSlice } from '../redux/slices/globalSlice.ts';

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;