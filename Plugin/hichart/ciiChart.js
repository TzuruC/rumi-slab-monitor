Highcharts.setOptions({
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
        max: 10, // 設定Y軸最大值 10
        // 圖表高度在CSS設置
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
});

Highcharts.chart('containerCii', {
    chart: {
        backgroundColor: '#323639',
        marginTop: 40,
    },
    title: {
        text: '',
        color: '#fff',
    },
    yAxis: [
        {
            // 第一個 Y 軸
            plotBands: [
                // 共用的區域背景
                { from: 0, to: 2, color: '#55BF3B' },
                { from: 2, to: 3, color: '#7BAC31' },
                { from: 3, to: 7, color: '#9B9D28' },
                { from: 7, to: 8, color: '#C7881D' },
                { from: 8, to: 10, color: '#B88400' },
            ],
            tickPositions: [1.5, 2.5, 5, 7.5, 8.5], // 第一個 Y 軸的標籤位置
            categories: ['A', 'B', 'C', 'D', 'E'], // 第一個 Y 軸的標籤
            title: null,
            labels: {
                formatter: function () {
                    let positionIndex = this.axis.tickPositions.indexOf(this.value);
                    if (positionIndex === -1) {
                        positionIndex = 0;
                    }
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
            tickPositions: [0, 1.2, 2.5, 7.5, 8.8, 10], // 第一個 Y 軸的標籤位置
            categories: ['5', '5.4', '6.12', '6.96', '7.75', '8'], // 第一個 Y 軸的標籤
            title: null,
            labels: {
                formatter: function () {
                    let positionIndex = this.axis.tickPositions.indexOf(this.value);
                    if (positionIndex === -1) {
                        positionIndex = 0;
                    }
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
                    y: 100,
                    target: 2, // 紅色BAR位置，依照百分比
                },
            ],
        },
    ],
    tooltip: {},
});
