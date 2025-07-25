// 折線圖資料 - CO₂排放量(黃色)
let CIIOverviewChart13_chart_Series_data01 = [
    11000, 16000, 14000, 17500, 10800, 14000, 16000, 13500, 13300, 13434, 16800, 14000,
];
// 長條圖資料 - LNG(淡藍色)
let CIIOverviewChart13_chart_Series_data02 = [0, 0, 0, 0, 5000, 0, 0, 0, 0, 0, 0, 0];
// 長條圖資料 - MGO(水藍色)
let CIIOverviewChart13_chart_Series_data03 = [4000, 1000, 4000, 800, 2000, 6000, 6000, 3000, 3000, 5000, 8000, 6000];
// 長條圖資料 - HFO(深藍色)
let CIIOverviewChart13_chart_Series_data04 = [0, 6000, 4000, 7000, 2500, 4800, 5000, 3000, 3500, 3235, 3844, 3210];

// 找出最大值，以定義Y軸高度
const CIIOverviewChart13allData = [
    ...CIIOverviewChart13_chart_Series_data01,
    ...CIIOverviewChart13_chart_Series_data02,
    ...CIIOverviewChart13_chart_Series_data03,
    ...CIIOverviewChart13_chart_Series_data04,
];
const CIIOverviewChart13maxVal = Math.max(...CIIOverviewChart13allData);
const CIIOverviewChart13maxY = Math.ceil(CIIOverviewChart13maxVal * 1.25);

Highcharts.chart('CIIOverviewChart13', {
    chart: {
        // zooming: {
        //     type: 'xy',
        // },
        backgroundColor: '#292929',
    },
    title: null,
    xAxis: [
        {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true,
            lineColor: '#FFFFFF',
            gridLineWidth: 1,
            gridLineColor: '#FFFFFF',
            labels: {
                style: {
                    color: '#FFFFFF',
                },
            },
        },
    ],
    yAxis: [
        {
            // 左側Y軸
            max: CIIOverviewChart13maxY,
            labels: {},
            title: {
                text: '油品燒油量 (mt)',
                style: {
                    color: '#FFFFFF',
                },
            },
            gridLineColor: '#FFFFFF',
            lineWidth: 1,
            lineColor: '#FFFFFF',
            tickColor: '#FFFFFF',
            labels: {
                style: {
                    color: '#FFFFFF',
                },
            },
        },
        {
            linkedTo: 0, // 同步使用第一個Y軸的 min/max
            // 右側Y軸
            max: CIIOverviewChart13maxY,
            title: {
                text: 'CO₂排放量 (mt)',
                rotation: 270,
                style: {
                    color: '#FFFFFF',
                },
            },
            gridLineColor: '#FFFFFF',
            lineWidth: 1,
            lineColor: '#FFFFFF',
            tickColor: '#FFFFFF',
            labels: {
                style: {
                    color: '#FFFFFF',
                },
            },
            opposite: true,
        },
    ],
    tooltip: {
        shared: true,
    },
    legend: {
        align: 'center',
        verticalAlign: 'top',
        itemStyle: {
            color: '#FFFFFF',
        },
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            borderWidth: 0,
            borderRadius: 0,
        },
    },
    series: [
        {
            name: 'CO₂排放量',
            type: 'line',
            yAxis: 1,
            data: CIIOverviewChart13_chart_Series_data01,
            tooltip: {
                valueSuffix: ' mt',
            },
            zIndex: 1,
            color: '#FFE100',
        },
        {
            name: 'LNG',
            type: 'column',
            data: CIIOverviewChart13_chart_Series_data02,
            tooltip: {
                valueSuffix: ' mt',
            },
            color: '#86D7FF',
        },
        {
            name: 'MGO',
            type: 'column',
            data: CIIOverviewChart13_chart_Series_data03,
            tooltip: {
                valueSuffix: ' mt',
            },
            color: '#00AAFF',
        },
        {
            name: 'HFO',
            type: 'column',
            data: CIIOverviewChart13_chart_Series_data04,
            tooltip: {
                valueSuffix: ' mt',
            },
            color: '#0084EA',
        },
    ],
});
