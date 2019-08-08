<template>
    <div>
        <div v-if="legend" class="row">
            <div class="col-4">
                <h3>{{ title }}</h3>
            </div>
            <div class="col-4"></div>
            <div class="col-4">
                <div class="text-right"><a href="#">Mais Detalhes</a></div>
            </div>
        </div>
        <div v-else="legend" class="row">
            <div class="col-6">
                <h3>{{ title }}</h3>
            </div>
            <div class="col-6">
                <div class="text-right"><a href="#">Mais Detalhes</a></div>
            </div>
        </div>
        <GChart
            type="ColumnChart"
            :data="chartData"
            :options="chartOptions"
        />
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default{
    name: 'ColumnChart',
    props: ['title', 'lastname', 'chartData', 'legend'],
    data () {
        return {
            foo:'bar',
            legendChart: null,
            chartOptions: {
                chart: {
                title: 'Company Performance',
                subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                },
                legend: this.legend? this.legend: {position: 'none'}, 
            }
        }
    },
    components: {
        GChart
    }
}

</script>

<style>
</style>