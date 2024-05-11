import { CardCrypto } from './component/CardCrypto';
import BitcoinLogo from '../../assets/img/logos/bitcoin.svg';
import EthereumLogo from '../../assets/img/logos/ethereum.svg';
import DogecoinLogo from '../../assets/img/logos/dogecoin.svg';
import { Sparkline } from '@mantine/charts';
import './style.scss';

export const Market = () => {

    const cryptoConfig = [
        {title: 'Doge', logo: DogecoinLogo, currentPrice: '10.00', unit: '$', pricesWeek: [5, 20, 40, 60, 90, 30, 150], className: 'doge-card'},
        {title: 'Bitcoin', logo: BitcoinLogo, currentPrice: '10.00', unit: '$', pricesWeek: [10, 20, 40, 20, 40, 10, 50], className: 'bitcoin-card'},
        {title: 'Ethereum', logo: EthereumLogo, currentPrice: '10.00', unit: '$', pricesWeek: [40, 20, 10, 10, 50, 80, 200], className: 'ethereum-card'},
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
                        currentPrice={el.currentPrice}
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