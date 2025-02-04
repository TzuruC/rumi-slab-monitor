let indexofY = 0;
const chartOptions = {
    chart: {
        inverted: true,
        marginLeft: 0,
        marginRight: 0,
        type: 'bullet',
        height: 120,
        minWidth: 200,
    },
    title: {
        text: null,
    },
    legend: {
        enabled: false,
    },
    yAxis: {
        gridLineWidth: 0,
        max: 10, // 最大值
        // softMax: 1,
        startOnTick: false,
        endOnTick: false,
    },
    plotOptions: {
        series: {
            pointPadding: 0.25,
            borderHeight: 10,
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
    tooltip: {
        enabled: false, // 隐藏tooltip
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
            // 第一個 Y 軸
            plotBands: [
                { from: 0, to: 2, color: '#57D637' },
                { from: 2, to: 4, color: '#94BF3B' },
                { from: 4, to: 6, color: '#C6C918' },
                { from: 6, to: 8, color: '#C7AA1D' },
                { from: 8, to: 10, color: '#98560A' },
            ],
            tickPositions: [0.5, 2.9, 5, 7, 9.5], // B=3 會出問題
            categories: ['A', 'B', 'C', 'D', 'E'],
            gridLineWidth: 0,
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
        {
            // 第二個 Y 軸
            offset: 0,
            plotBands: null,
            tickPositions: [0, 2.1, 4.1, 6, 8, 10], // 請不要移動這些位置
            categories: ['', '5.4', '6.12', '6.96', '7.75', ''],
            gridLineWidth: 0,
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
            opposite: true,
        },
    ],
    series: [
        {
            data: [
                {
                    target: 5, // 紅色BAR位置
                },
            ],
        },
    ],
});
