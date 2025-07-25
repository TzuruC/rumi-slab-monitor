// 折線圖資料 - CII實際值(黃色)
let CIIOverviewChart14_chart_Series_data01 = [7.5, 8, 9, 7, 9.5, 9, 7.5, 10, 8.5, 17, 17.2, 18];
// 折線圖資料 - 運輸量(綠色)
let CIIOverviewChart14_chart_Series_data02 = [
    7500, 8200, 9000, 7000, 9500, 10000, 14300, 14400, 14500, 17000, 17800, 18000,
];
// 長條圖資料 - 運輸量總和(水藍色)
let CIIOverviewChart14_chart_Series_data03 = [
    4000, 5100, 6800, 7500, 9000, 12300, 12010, 12100, 12500, 17500, 18000, 22000,
];

// 找出最大值，以定義Y軸高度
const CIIOverviewChart14allData = [
    ...CIIOverviewChart14_chart_Series_data02,
    ...CIIOverviewChart14_chart_Series_data03,
];
const CIIOverviewChart14maxVal = Math.max(...CIIOverviewChart14allData);
const CIIOverviewChart14maxYLeft = Math.ceil(CIIOverviewChart14maxVal * 1.05);
const CIIOverviewChart14maxYRight = Math.ceil(Math.max(...CIIOverviewChart14_chart_Series_data01) * 1.25);

Highcharts.chart('CIIOverviewChart14', {
    chart: {
        zooming: {
            type: 'xy',
        },
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
            max: CIIOverviewChart14maxYLeft,
            labels: {},
            title: {
                text: '運輸工作量 (mt × nm)',
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
            // 右側Y軸
            max: CIIOverviewChart14maxYRight,
            title: {
                text: 'CII 數值',
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
            borderWidth: 0,
            borderRadius: 0,
        },
    },
    series: [
        {
            name: 'CII實際值',
            type: 'line',
            yAxis: 1,
            data: CIIOverviewChart14_chart_Series_data01,
            tooltip: {
                valueSuffix: '',
            },
            zIndex: 1,
            color: '#FFE100',
        },
        {
            name: '運輸量',
            type: 'line',
            data: CIIOverviewChart14_chart_Series_data02,
            tooltip: {
                valueSuffix: ' mt × nm',
            },
            zIndex: 2,
            color: '#00E272',
        },
        {
            name: '運輸量總和',
            type: 'column',
            data: CIIOverviewChart14_chart_Series_data03,
            tooltip: {
                valueSuffix: ' mt × nm',
            },
            zIndex: 0,
            color: '#2CAFFE',
        },
    ],
});
