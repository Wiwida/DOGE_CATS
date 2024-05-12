import { createSelector, createSlice } from '@reduxjs/toolkit';
import { CoinHistoryType, CoinType, ExchangeResponse } from '../../api/types';
import { fetchBitcoinHistoryInfos, fetchBitcoinInfos, fetchDogeHistoryInfos, fetchDogeInfos, fetchEthereumHistoryInfos, fetchEthereumInfos, fetchExchangeInfos } from '../../api/allCallApi';
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
    },
    confirmPayment: (state) => {
        state.internals.counterTicketAdded = 0;
        // Posibility for better understanding !
        // notifications.show({
        //     title: 'Paiement accepté !',
        //     message: 'En avant pour les JO jeune SHIBAWAN !',
        //     color: "green",
        //     autoClose: true,

        // })
    }
  },
  extraReducers: (builder) => {
    // Exchange :
    builder.addCase(fetchExchangeInfos.fulfilled, (state, { payload }) => {
        
        if (payload !== undefined) {
            state.data.home.volumes = payload;
        }
    }),
    // Notif better ...!
    builder.addCase(fetchExchangeInfos.rejected, (state, { payload }) => console.log(payload)),

    //Doge :
    builder.addCase(fetchDogeInfos.fulfilled, (state, { payload }) => {
        if (payload !== undefined) {
            state.data.market.doge = payload;
        }
    }),
    builder.addCase(fetchDogeInfos.rejected, (state, { payload }) => console.log(payload)),
    builder.addCase(fetchDogeHistoryInfos.fulfilled, (state, { payload }) => {
        if (payload !== undefined) {
            state.data.market.dogeHistory = payload;
        }
    }),
    builder.addCase(fetchDogeHistoryInfos.rejected, (state, { payload }) => console.log(payload)),

    //Bitcoin :
    builder.addCase(fetchBitcoinInfos.fulfilled, (state, { payload }) => {
        if (payload !== undefined) {
            state.data.market.bitcoin = payload;
        }
    }),
    builder.addCase(fetchBitcoinInfos.rejected, (state, { payload }) => console.log(payload)),
    builder.addCase(fetchBitcoinHistoryInfos.fulfilled, (state, { payload }) => {
        if (payload !== undefined) {
            state.data.market.bitcoinHistory = payload;
        }
    }),
    builder.addCase(fetchBitcoinHistoryInfos.rejected, (state, { payload }) => console.log(payload)),

    //Ethereum :
    builder.addCase(fetchEthereumInfos.fulfilled, (state, { payload }) => {
        if (payload !== undefined) {
            state.data.market.ethereum = payload;
        }
    }),
    builder.addCase(fetchEthereumInfos.rejected, (state, { payload }) => console.log(payload)),
    builder.addCase(fetchEthereumHistoryInfos.fulfilled, (state, { payload }) => {
        if (payload !== undefined) {
            state.data.market.ethereumHistory = payload;
        }
    }),
    builder.addCase(fetchEthereumHistoryInfos.rejected, (state, { payload }) => console.log(payload))
  }
});

export const {
    decrementValue,
    incrementValue,
    confirmPayment,

} = globalSlice.actions;

// Selector :
// For better perf :
export const selectExchangeSortedByVolume = createSelector(
    (state: RootState) => state.global.data.home.volumes,
    (allExchangeVolumes) => {
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

export const selectAllValuesVolumeDoge = createSelector(
    (state: RootState) => state.global.data.market.dogeHistory,
    (dogeValuesHistory) => {
        return dogeValuesHistory.map(el => parseFloat(el.priceUsd));
    }
);

export const selectAllValuesVolumeBitcoin = createSelector(
    (state: RootState) => state.global.data.market.bitcoinHistory,
    (bitcoinValuesHistory) => {
        return bitcoinValuesHistory.map(el => parseFloat(el.priceUsd));
    }
);

export const selectAllValuesVolumeEthereum = createSelector(
    (state: RootState) => state.global.data.market.ethereumHistory,
    (ethereumValuesHistory) => {
        return ethereumValuesHistory.map(el => parseFloat(el.priceUsd));
    }
);

// Classic selector :
export const selectDoge = (state: RootState) => state.global.data.market.doge;
export const selectBitcoin = (state: RootState) => state.global.data.market.bitcoin;
export const selectEthereum = (state: RootState) => state.global.data.market.ethereum;

export const selectTicketAdded = (state: RootState) => state.global.internals.counterTicketAdded;

export default globalSlice.reducer;