import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface marketState {
    
}

const initialState: marketState = {

};

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const {

} = marketSlice.actions;

// Selector ex
// export const selectCount = (state: RootState) => state.counter.value

export default marketSlice.reducer;