import { BarChart } from '@mantine/charts';
import "./style.scss"

export const Home = () => {

    return(
        <div className="page-home">
            <h1>DOGECEX</h1>
            <span className="home-first-place">
                Faites confiance au numéro un en <br/> terme de volumes sur les marchés *
            </span>
            <span className="home-first-place-details">
                * Dernières 24h, en milliards de dollars
            </span>
            <div className="home-barchart">
                <BarChart
                    h={300}
                    data={[
                        { month: 'Binance', Binance: 3000 },
                        { month: 'Kucoin', Kucoin: 1100},
                        { month: 'DogeCEX', DogeCEX: 20000 }, 
                    ]}
                    dataKey="month"
                    yAxisProps={{ width: 80 }}
                    barProps={{ radius: 5 }}
                    type="stacked"
                    orientation="vertical"
                    withLegend
                    legendProps={{ verticalAlign: 'bottom' }}
                    series={[
                        { name: 'Binance', label: 'Binance', color: 'violet.6' },
                        { name: 'Kucoin', label: 'Kucoin', color: 'blue.6' },
                        { name: 'DogeCEX', label: 'DogeCEX', color: 'teal.6' },
                    ]}
                />
            </div>

        </div>
    );
};