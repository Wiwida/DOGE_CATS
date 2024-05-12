import { BarChart, BarChartSeries } from '@mantine/charts';
import "./style.scss"
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchExchangeInfos } from '../../api/allCallApi';
import { selectExchangeSortedByVolume } from '../../redux/slices/globalSlice';

export const Home = () => {

    const dispatch = useAppDispatch();

    const allExchangesSortedByVolume = useAppSelector(selectExchangeSortedByVolume);
    const exchangesValuesFormattedForChart = allExchangesSortedByVolume?.map(el => ({exchange: el.name, [el.name]: el.volumeUsd})) as Record<string, unknown>[];
    
    const exchangesValuesFormattedForChartSeries = allExchangesSortedByVolume?.map(el => ({
        name: el.name,
        label: el.name,
        color: `#006494ff`,
    })) as BarChartSeries[];

    useEffect(() => {
        dispatch(fetchExchangeInfos());
    },[dispatch]);

    return(
        <div className="page-home">
            <h1>DOGECEX</h1>
            <span className="home-first-place">
                Faites confiance au numéro un en <br/> termes de volumes sur les marchés *
            </span>
            <span className="home-first-place-details">
                * Dernières 24h, en dollars
            </span>
            <div className="home-barchart">
                <BarChart
                    h={300}
                    data={exchangesValuesFormattedForChart?.length ? exchangesValuesFormattedForChart : []}
                    dataKey="exchange"
                    yAxisProps={{ width: 80 }}
                    barProps={{ radius: 5 }}
                    type="stacked"
                    withLegend
                    unit="$"
                    legendProps={{ verticalAlign: 'top', height: 75}}
                    series={exchangesValuesFormattedForChartSeries?.length ? exchangesValuesFormattedForChartSeries : []}
                />
            </div>
        </div>
    );
};