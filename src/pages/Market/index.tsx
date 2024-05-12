import { CardCrypto } from './component/CardCrypto';
import BitcoinLogo from '../../assets/img/logos/bitcoin.svg';
import EthereumLogo from '../../assets/img/logos/ethereum.svg';
import DogecoinLogo from '../../assets/img/logos/dogecoin.svg';
import { Sparkline } from '@mantine/charts';
import './style.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectAllValuesVolumeBitcoin, selectAllValuesVolumeDoge, selectAllValuesVolumeEthereum, selectBitcoin, selectDoge, selectEthereum } from '../../redux/slices/globalSlice';
import { useEffect } from 'react';
import { fetchBitcoinHistoryInfos, fetchBitcoinInfos, fetchDogeHistoryInfos, fetchDogeInfos, fetchEthereumHistoryInfos, fetchEthereumInfos } from '../../api/allCallApi';

export const Market = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        // One request with Promise.All --> better
        dispatch(fetchDogeHistoryInfos());
        dispatch(fetchBitcoinHistoryInfos());
        dispatch(fetchEthereumHistoryInfos());

        dispatch(fetchDogeInfos());
        dispatch(fetchBitcoinInfos());
        dispatch(fetchEthereumInfos());
    }, [dispatch]);

    const valuesPriceHistoryDoge = useAppSelector(selectAllValuesVolumeDoge);
    const valuesPriceHistoryBitcoin = useAppSelector(selectAllValuesVolumeBitcoin);
    const valuesPriceHistoryEthereum = useAppSelector(selectAllValuesVolumeEthereum);

    const valueDoge = useAppSelector(selectDoge);
    const valueBitcoin = useAppSelector(selectBitcoin);
    const valueEthereum = useAppSelector(selectEthereum);

    const cryptoConfig = [
        {title: valueDoge?.name ?? "Dogecoin", logo: DogecoinLogo, currentPrice: valueDoge?.priceUsd ?? "--|--", unit: '$', pricesWeek: valuesPriceHistoryDoge, className: 'doge-card'},
        {title: valueBitcoin?.name ?? "Bitcoin", logo: BitcoinLogo, currentPrice: valueBitcoin?.priceUsd ?? "--|--", unit: '$', pricesWeek: valuesPriceHistoryBitcoin, className: 'bitcoin-card'},
        {title: valueEthereum?.name ?? "Ethereum", logo: EthereumLogo, currentPrice: valueEthereum?.priceUsd ?? "--|--", unit: '$', pricesWeek: valuesPriceHistoryEthereum, className: 'ethereum-card'},
    ];

    return(
        <div className="page-market">
            <h2>L'essentiel des marchés</h2>
            <div className='cardscrypto'>
              {cryptoConfig.map(el => (
                    <CardCrypto 
                        key={el.title}
                        logo={el.logo}
                        title={el.title}
                        currentPrice={el.title === "Dogecoin" ? parseFloat(el.currentPrice).toFixed(2) : parseFloat(el.currentPrice).toFixed(1)}
                        titlechart='Evolution du prix (7D) :'
                        unitCurrentPrice={el.unit}
                        className={el.className}
                        chart={
                            <Sparkline
                                w={200}
                                h={60}
                                data={el.pricesWeek}
                                trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
                                curveType='monotone'
                                color='blue'
                                fillOpacity={0.6}
                                strokeWidth={2}
                            />
                        }
                    />                
                    ))
                }              
            </div>
        </div>
    );
};