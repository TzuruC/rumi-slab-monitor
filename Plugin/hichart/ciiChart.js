const chartOptions = {
    chart: {
        inverted: true,
        marginLeft: 0,
        marginRight: 0,
        type: 'bullet',
    },
    title: {
        text: null,
    },
    legend: {
        enabled: false,
    },
    yAxis: {
        gridLineWidth: 0,
        max: 10,
    },
    plotOptions: {
        series: {
            pointPadding: 0.25,
            borderHight: 10,
            borderWidth: 0,
            color: 'transparent',
            targetOptions: {
                width: '500%',
                height: 5,
                color: 'red',
            },
        },
    },
    credits: {
        enabled: false,
    },
    exporting: {
        enabled: false,
    },
};

Highcharts.chart('containerCii', {
    ...chartOptions, // 只影響這個圖表
    chart: {
        ...chartOptions.chart,
        backgroundColor: '#323639',
        marginTop: 40,
    },
    yAxis: [
        {
            plotBands: [
                { from: 0, to: 2, color: '#57D637' },
                { from: 2, to: 3, color: '#94BF3B' },
                { from: 3, to: 7, color: '#C6C918' },
                { from: 7, to: 8, color: '#C7AA1D' },
                { from: 8, to: 10, color: '#98560A' },
            ],
            tickPositions: [1.5, 2.5, 5, 7.5, 8.5],
            categories: ['A', 'B', 'C', 'D', 'E'],
            title: null,
            labels: {
                formatter: function () {
                    let positionIndex = this.axis.tickPositions.indexOf(this.value);
                    if (positionIndex === -1) positionIndex = 0;
                    return this.axis.categories[positionIndex] || '';
                },
                style: {
                    color: '#FFFFFF',
                },
            },
            opposite: false,
        },
    ],
    series: [
        {
            data: [
                {
                    y: 100,
                    target: 2,
                },
            ],
        },
    ],
});
