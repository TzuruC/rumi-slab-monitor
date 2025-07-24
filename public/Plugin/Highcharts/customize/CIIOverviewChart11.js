Highcharts.chart('CIIOverviewChart11', {
    chart: {
        type: 'column',
        backgroundColor: '#292929',
    },
    title: null,
    xAxis: {
        categories: ['Gold', 'Silver', 'Bronze'],
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Count medals',
        },
    },

    tooltip: {
        format: '<b>{key}</b><br/>{series.name}: {y}<br/>' + 'Total: {point.stackTotal}',
    },

    plotOptions: {
        column: {
            stacking: 'normal',
        },
    },

    series: [
        {
            name: 'Norway',
            data: [148, 133, 124],
            stack: 'Europe',
        },
        {
            name: 'Germany',
            data: [102, 98, 65],
            stack: 'Europe',
        },
        {
            name: 'United States',
            data: [113, 122, 95],
            stack: 'North America',
        },
        {
            name: 'Canada',
            data: [77, 72, 80],
            stack: 'North America',
        },
    ],
});
