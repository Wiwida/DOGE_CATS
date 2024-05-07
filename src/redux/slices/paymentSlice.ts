import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface paymentState {
    
}

const initialState: paymentState = {

};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const {

} = paymentSlice.actions;

// Selector ex
// export const selectCount = (state: RootState) => state.counter.value

export default paymentSlice.reducer;