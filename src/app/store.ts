import { configureStore } from '@reduxjs/toolkit';

import { homeSlice } from '../redux/slices/homeSlice.ts';
import { marketSlice } from '../redux/slices/marketSlice.ts';
import { dogepaperSlice } from '../redux/slices/dogepaperSlice.ts';
import { paymentSlice } from '../redux/slices/paymentSlice.ts';

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    market: marketSlice.reducer,
    dogepaper: dogepaperSlice.reducer,
    payment: paymentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;