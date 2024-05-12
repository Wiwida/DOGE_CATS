import { createSelector, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store';
import { CoinHistoryType, CoinType, ExchangeResponse } from '../../../api/types';
import { fetchExchangeInfos } from '../../../api/allCallApi';
import { RootState } from '../../app/store';

interface globalState {
    data: {
        home: {
            volumes: (ExchangeResponse & {volumeUsd: number})[];
        },
        market: {
            bitcoin: CoinType | null;
            bitcoinHistory: CoinHistoryType[];
            doge: CoinType | null;
            dogeHistory: CoinHistoryType[];
            ethereum: CoinType | null;
            ethereumHistory: CoinHistoryType[];
        },
        dogepaper: null,
        payment: null,
    };
    internals: {
        counterTicketAdded: number,
    };
}

const initialState: globalState = {
    data: {
        home: {
            volumes: [],
        },
        market: {
            bitcoin: null,
            bitcoinHistory: [],
            doge: null,
            dogeHistory: [],
            ethereum: null,
            ethereumHistory: [],
        },
        dogepaper: null,
        payment: null,
    },
    internals: {
        counterTicketAdded: 0,
    },
};
export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    incrementValue: (state) => {
        state.internals.counterTicketAdded += 1;
    },
    decrementValue: (state) => {
        const counterTicket = state.internals.counterTicketAdded;

        if (counterTicket > 0) {
            state.internals.counterTicketAdded -= 1;
        }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExchangeInfos.fulfilled, (state, { payload }) => {
        
        if (payload !== undefined) {
            console.log(payload)
            state.data.home.volumes = payload;
        }
    })
  }
});

export const {
    decrementValue,
    incrementValue,

} = globalSlice.actions;

// For better perf :
export const selectExchangeSortedByVolume = createSelector(
    (state: RootState) => state.global.data.home.volumes,
    (allExchangeVolumes) => {
        console.log(allExchangeVolumes);

        if (allExchangeVolumes.length > 0) {
            return [
                ...allExchangeVolumes,
                {
                    exchangeId: 'dogecex',
                    name: 'DOGECex',
                    volumeUsd: 10861483693,
                    socket: true,
                    exchangeUrl: 'https://www.DOGECex.com/',
                }
            ].sort((a,b) => b.volumeUsd - a.volumeUsd);         
        }
    }
);

// Selector ex
// export const selectCount = (state: RootState) => state.counter.value

export default globalSlice.reducer;