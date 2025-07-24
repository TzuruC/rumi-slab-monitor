// Highcharts 全域隱藏 Highcharts 品牌 mark
Highcharts.setOptions({
    credits: {
        enabled: false,
    },
    exporting: {
        enabled: false,
    },
});

Highcharts.chart('containerCiiMain', {
    chart: {
        marginLeft: 0,
        marginRight: 0,
        type: 'bullet',
        inverted: true, // 將圖形方向變成水平
        backgroundColor: '#292929',
        marginTop: 40,
        margin: [0, 0, 50, 0], // 去除所有邊距
        spacing: [0, 0, 0, 0],
    },
    title: null,
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {
            clip: false,
            pointPadding: 0.25,
            borderHight: 10,
            borderWidth: 0,
            color: 'transparent',
            targetOptions: {
                width: '400%',
                height: 5,
                color: 'red',
            },
        },
    },
    xAxis: {
        lineWidth: 0,
    },
    yAxis: {
        gridLineWidth: 0,
        max: 8,
        // 第一個 Y 軸
        plotBands: [
            // 共用的區域背景
            { from: 0, to: 5.4, color: '#27FF96' },
            { from: 5.4, to: 6.12, color: '#02EB7A' },
            { from: 6.12, to: 6.96, color: '#149E5B' },
            { from: 6.96, to: 7.75, color: '#FFCB2B' },
            { from: 7.75, to: 8, color: '#FF5C5C' },
        ],
        tickPositions: [0.1, 5.76, 6.54, 7.2, 7.9], // 第一個 Y 軸的標籤位置
        categories: ['A', 'B', 'C', 'D', 'E'], // 第一個 Y 軸的標籤
        title: null,
        labels: {
            formatter: function () {
                const positionIndex = this.axis.tickPositions.indexOf(this.value);
                return this.axis.categories[positionIndex] || '';
            },
            style: {
                color: '#FFFFFF', // 第一個 Y 軸的文字顏色
            },
            opposite: true,
        },
    },
    series: [
        {
            data: [
                {
                    y: 8,
                    target: 3.2,
                },
            ],
        },
    ],
    tooltip: {
        pointFormat: '<b>{point.y}</b> (with target at {point.target})',
    },
});
Highcharts.chart('containerCiiTitle', {
    chart: {
        marginLeft: 0,
        marginRight: 0,
        type: 'bullet',
        inverted: true, // 將圖形方向變成水平
        backgroundColor: '#292929',
        marginTop: 40,
        margin: [0, 0, 80, 0], // 去除所有邊距
        spacing: [0, 0, 0, 0],
    },
    title: null,
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {
            clip: false,
            pointPadding: 0.25,
            borderHight: 10,
            borderWidth: 0,
            color: 'transparent',
            targetOptions: {
                width: '0%',
                height: 5,
                color: 'red',
            },
        },
    },
    xAxis: {
        lineWidth: 0,
    },
    yAxis: {
        gridLineWidth: 0,
        max: 8,
        // 第一個 Y 軸
        plotBands: [
            // 共用的區域背景
            { from: 0, to: 5.4, color: '#27FF96' },
            { from: 5.4, to: 6.12, color: '#02EB7A' },
            { from: 6.12, to: 6.96, color: '#149E5B' },
            { from: 6.96, to: 7.75, color: '#FFCB2B' },
            { from: 7.75, to: 8, color: '#FF5C5C' },
        ],
        tickPositions: [0.1, 5.76, 6.54, 7.2, 7.9], // 第一個 Y 軸的標籤位置
        categories: ['A', 'B', 'C', 'D', 'E'], // 第一個 Y 軸的標籤
        title: null,
        labels: {
            formatter: function () {
                const positionIndex = this.axis.tickPositions.indexOf(this.value);
                return this.axis.categories[positionIndex] || '';
            },
            style: {
                color: '#FFFFFF', // 第一個 Y 軸的文字顏色
            },
            opposite: true,
        },
    },
    series: [
        {
            data: [
                {
                    y: 8,
                    target: 3.2,
                },
            ],
        },
    ],
    tooltip: {
        pointFormat: '<b>{point.y}</b> (with target at {point.target})',
    },
});
