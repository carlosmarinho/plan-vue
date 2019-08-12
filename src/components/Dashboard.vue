<template>
    <div>
        <SearchBar></SearchBar>
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
                    <ColumnChart :title="chart6.title" :chartData="chart6.chartData" :options="chart6.chartOptions" charType="area" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const globalTextOptions  = {
            color: '#333333',
            fontSize: 12,
            fontName: 'Lato, sans-serif',
            bold: false,
            italic: false,
        };

/* const globalStockValue ={
		type:'financialVolume',
		period: 'monthly_urgency'
	}; */

const globalAnimation =  {
		duration: 500,
		easing: 'out',
		startup: true
	};

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
                    ['Valores em Reais', 'Disponivel', 'Total'],
                    [17087, 660, 550  ],
                    [2019, 1030, 10000]
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
                chartData: {"cols":
                            [
                                {"id":"","label":"Data","pattern":"","type":"string","p":{}},
                                {"id":"","label":"Aprovações no Plannexo (%)","pattern":"","type":"number","p":{}},
                                {"type":"string","role":"tooltip","p":{"html":true,"role":"tooltip"}},
                                {"id":"","label":"Aprovações no ERP (%)","pattern":"","type":"number"},
                                {"type":"string","role":"tooltip","p":{"html":true,"role":"tooltip"}}
                            ],
                            "rows":
                            [
                                {"c":
                                    [{"v":"Ago/2018"},
                                     {"v":0},
                                     {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Ago/2018</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},
                                     {"v":0},
                                     {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Ago/2018</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}
                                     ]
                                },
                                {"c":
                                    [
                                        {"v":"Set/2018"},
                                        {"v":0},
                                        {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Set/2018</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},
                                        {"v":0},
                                        {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Set/2018</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}]},{"c":[{"v":"Out/2018"},{"v":0},{"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Out/2018</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},
                                        {"v":0},
                                        {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Out/2018</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}
                                    ]
                                },
                                {"c":[
                                    {"v":"Nov/2018"},
                                    {"v":0},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Nov/2018</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},
                                    {"v":0},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Nov/2018</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}
                                ]},
                                {"c":[
                                    {"v":"Dez/2018"},
                                    {"v":0},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Dez/2018</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},
                                    {"v":0},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Dez/2018</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}]},
                                    {"c":[{"v":"Jan/2019"},
                                    {"v":0},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Jan/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},{"v":0},{"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Jan/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}
                                ]},
                                {"c":[
                                    {"v":"Fev/2019"},
                                    {"v":0},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Fev/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},
                                    {"v":0},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Fev/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}
                                ]},
                                {"c":[
                                    {"v":"Mar/2019"},
                                    {"v":0},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Mar/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},{"v":0},{"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Mar/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}
                                ]},
                                {"c":[
                                    {"v":"Abr/2019"},
                                    {"v":0},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Abr/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 100%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},{"v":100},{"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Abr/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 100%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}]},
                                    {"c":[
                                        {"v":"Mai/2019"},
                                        {"v":0},
                                        {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Mai/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 100%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},
                                        {"v":100},
                                        {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Mai/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 100%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}
                                    ]},
                                    {"c":[
                                        {"v":"Jun/2019"},
                                        {"v":0},
                                        {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Jun/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 100%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},
                                        {"v":100},
                                        {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Jun/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 100%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}
                                    ]},
                                {"c":[
                                    {"v":"Jul/2019"},
                                    {"v":0},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Jul/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 100%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},
                                    {"v":100},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Jul/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 100%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}
                                    ]},
                                {"c":[
                                    {"v":"Ago/2019"},{"v":0},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Ago/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}},
                                    {"v":0},
                                    {"v":"<div class='p-2 pln-tooltip-chart' style='min-width:220px'>\n\t\t\t\t<div class='d-flex flex-column'>\n\t\t\t\t\t<span class='pln-tooltip-chart-bold'>Ago/2019</span>\n\t\t\t\t\t<hr class='pln-tooltip-chart-hr' >\n\t\t\t\t\t<span>Aprovações no Plannexo: 0%</span>\n\t\t\t\t\t<span>Aprovações no ERP: 0%</span>\n\t\t\t\t</div>\n\t\t\t</div>","p":{}}
                                ]
                            }
                        ]},
                chartOptions: {
                    tooltip: {isHtml: true},
                    animation: globalAnimation,
                    height: '350',
                    pointSize: 5,
                    dataOpacity: 0.5,
                    colors:['#29859A', '#F96737'],
                    chartArea: {
                        width: '100%',
                        left: 120,
                        right: 50,
                    },
                    legend: { 
                        position: 'top', 
                        alignment: 'center',
                        textStyle: globalTextOptions,
                    },
                    hAxis: {
                        textStyle: globalTextOptions,
                    },
                    vAxis: {
                        title: 'ADERÊNCIA (%)',
                        titleTextStyle: globalTextOptions,
                        textStyle: {...globalTextOptions, color: '#888888'},
                        viewWindow: {
                            min: 0,
                            max: 100
                        },
                    },
                    /*seriesType: 'area',*/
                    series: {1: {type: 'line'}}
                }
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
