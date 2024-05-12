export interface ExchangeResponse {
    exchangeId: string;
    name: string;
    volumeUsd: string;
    socket: boolean;
    exchangeUrl: string;
}

export interface CoinType {
    symbol: string;
    name: string;
    priceUsd: string;
}

export interface CoinHistoryType {
    priceUsd: string;
    date: string;
}