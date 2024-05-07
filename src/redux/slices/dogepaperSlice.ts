import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface dogepaperState {
    
}

const initialState: dogepaperState = {

};

export const dogepaperSlice = createSlice({
  name: 'dogepaper',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const {

} = dogepaperSlice.actions;

// Selector ex
// export const selectCount = (state: RootState) => state.counter.value

export default dogepaperSlice.reducer;