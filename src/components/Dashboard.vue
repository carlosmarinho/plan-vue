<template>
    <div>
        <FeaturedBar>
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
            <FeaturedItem />
        </FeaturedBar>
        <div class="my-2">
            <div class="row my-3">
                <div class="col-6">
                    <ColumnChart :title="chart1.title" :chartData="chart1.chartData" :legend="{position: 'right'}"/>
                </div>
                <div class="col-6">
                    <ColumnChart :title="chart2.title" :chartData="chart2.chartData" />
                </div>
            </div>
            <div class="row my-3">
                <div class="col-12">
                    <ColumnChart :title="chart3.title" :chartData="chart3.chartData" />
                </div>
            </div>
            <div class="row my-3">
                <div class="col-12">
                    <ColumnChart :title="chart4.title" :chartData="chart4.chartData" />
                </div>
            </div>           

            <div class="row my-3">
                <div class="col-12">
                    <ColumnChart :title="chart5.title" :chartData="chart5.chartData" />
                </div>
            </div>
            <div class="row my-3">
                <div class="col-12">
                    <ColumnChart :title="chart6.title" :chartData="chart6.chartData" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FeaturedBar from './FeaturedBar';
import FeaturedItem from './FeaturedItem';
import ColumnChart from './reports/ColumnChart';

export default{
    name: 'Dashboard',
    data () {
        return {
            firstname: 'UserFirstName1111',
            lastname: 'UserLastName',
            foo:'bar',
            chart1:{
                title: 'Valor Estoque',
                chartData: [
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350]
                ],
            },
            chart2:{
                title: 'Balanceamento de Estoque',
                chartData: [
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350]
                ],
            },
            chart3:{
                title: 'Relatório 1',
                chartData: [
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350]
                ],
            },
            chart4:{
                title: 'Relatório 1',
                chartData: [
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350]
                ],
            },
            chart5:{
                title: 'Relatório 1',
                chartData: [
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350]
                ],
            },
            chart6:{
                title: 'Relatório 1',
                chartData: [
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350]
                ],
            },
        }
    },
    components:{
        FeaturedBar,
        FeaturedItem,
        ColumnChart,
    }
}
</script>
