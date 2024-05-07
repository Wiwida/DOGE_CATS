import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface homeState {
    
}

const initialState: homeState = {

};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const {

} = homeSlice.actions;

// Selector ex
// export const selectCount = (state: RootState) => state.counter.value

export default homeSlice.reducer;