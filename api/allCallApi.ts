import { createAsyncThunk } from '@reduxjs/toolkit';
import { BITCOIN_HISTORY_URL, BITCOIN__URL, DOGE_HISTORY_URL, DOGE_URL, ETHEREUM_HISTORY_URL, ETHEREUM_URL, EXCHANGE_URL } from './constants';
import { CoinHistoryType, CoinType, ExchangeResponse } from './types';

export const fetchExchangeInfos = createAsyncThunk(
    'global/fetchExchangeInfos',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(EXCHANGE_URL);
            
            if (response?.ok) {
                console.log(response)
                const responseJson: {data: ExchangeResponse[]} = await response.json();

                const responseJsonFormatted = responseJson.data.map((el) => ({
                    exchangeId: el.exchangeId,
                    name: el.name === "Coinbase Pro" ? "Coinbase" : el.name,
                    volumeUsd: parseInt(el.volumeUsd),
                    socket: el.socket,
                    exchangeUrl: el.exchangeUrl,
                }));      

                return responseJsonFormatted as (ExchangeResponse & {volumeUsd: number})[];
            }
            rejectWithValue("Oups un problème est apparu !");

        } catch (error) {
            rejectWithValue("Oups un problème est apparu !");
        }
    },
);

export const fetchDogeInfos = createAsyncThunk(
    'global/fetchDogeInfos',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(DOGE_URL);
            return (await response.json()) as CoinType;      

        } catch (error) {
            rejectWithValue("Oups un problème est apparu !");
        }
    },
);

export const fetchDogeHistoryInfos = createAsyncThunk(
    'global/fetchDogeHistoryInfos',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(DOGE_HISTORY_URL);
            const responseJson: CoinHistoryType[] = await response.json();

            // Last 7 days history price
            return responseJson.slice(-7);      

        } catch (error) {
            rejectWithValue("Oups un problème est apparu !");
        }
    },
);

export const fetchBitcoinInfos = createAsyncThunk(
    'global/fetchBitcoinInfos',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(BITCOIN__URL);
            return (await response.json()) as CoinType;      

        } catch (error) {
            rejectWithValue("Oups un problème est apparu !");
        }
    },
);

export const fetchBitcoinHistoryInfos = createAsyncThunk(
    'global/fetchBitcoinHistoryInfos',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(BITCOIN_HISTORY_URL);
            const responseJson: CoinHistoryType[] = await response.json();

            // Last 7 days history price
            return responseJson.slice(-7);      

        } catch (error) {
            rejectWithValue("Oups un problème est apparu !");
        }
    },
);

export const fetchEthereumInfos = createAsyncThunk(
    'global/fetchEthereumInfos',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(ETHEREUM_URL);
            return (await response.json()) as CoinType;      

        } catch (error) {
            rejectWithValue("Oups un problème est apparu !");
        }
    },
);

export const fetchEthereumHistoryInfos = createAsyncThunk(
    'global/fetchEthereumHistoryInfos',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(ETHEREUM_HISTORY_URL);
            const responseJson: CoinHistoryType[] = await response.json();

            // Last 7 days history price
            return responseJson.slice(-7);    

        } catch (error) {
            rejectWithValue("Oups un problème est apparu !");
        }
    },
);