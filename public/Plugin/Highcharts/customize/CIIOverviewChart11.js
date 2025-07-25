// Y軸延伸紅線值(C級油耗區間)
let CIIOverviewChart11_chart_redLine = 6500;
// 長條圖資料 - 主機耗油(藍色)
let CIIOverviewChart11_chart_Series_data01 = [1000, 1800, 1500, 2300, 2200, 3000];
// 長條圖資料 - 電機耗油(黃色)
let CIIOverviewChart11_chart_Series_data02 = [600, 1200, 1500, 2400, 2200, 2800];

// 圖表寬度
const CIIOverviewChart11_chart_categories = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
// const CIIOverviewChart11_pointWidth = 40; // 每個資料點寬度（你可依需求微調）
// const CIIOverviewChart11_chartWidth = CIIOverviewChart11_chart_categories.length * CIIOverviewChart11_pointWidth;

Highcharts.chart('CIIOverviewChart11', {
    chart: {
        type: 'column',
        // width: CIIOverviewChart11_chartWidth,
        backgroundColor: '#292929',
    },
    title: null,
    xAxis: {
        title: null,
        categories: CIIOverviewChart11_chart_categories,
        lineColor: '#FFFFFF',
        labels: {
            style: {
                color: '#FFFFFF',
            },
        },
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: '燃油消耗量 (mt) ',
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
        // 參考紅線
        plotLines: [
            {
                value: CIIOverviewChart11_chart_redLine, // 參考線的 Y 值
                color: 'red',
                width: 2,
                zIndex: 5,
                dashStyle: 'Dash',
            },
        ],
    },

    legend: {
        align: 'left',
        verticalAlign: 'top',
        layout: 'horizontal',
        itemStyle: {
            color: '#FFFFFF',
            fontWeight: 'bold',
        },
    },
    tooltip: {
        format: '<b>{key}</b><br/>{series.name}: {y}<br/>' + 'Total: {point.stackTotal}',
    },
    plotBands: 6800,
    plotOptions: {
        column: {
            stacking: 'normal',
            borderWidth: 0,
            borderRadius: 0,
        },
    },

    series: [
        {
            name: '主機耗油',
            data: CIIOverviewChart11_chart_Series_data01,
            color: '#00AAFF',
        },
        {
            name: '電機耗油',
            data: CIIOverviewChart11_chart_Series_data02,
            color: '#FFE100',
        },
    ],
});
