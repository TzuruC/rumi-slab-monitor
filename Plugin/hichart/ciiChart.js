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
        max: 8,
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

Highcharts.chart('container1', {
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
                { from: 0, to: 5.4, color: '#55BF3B' },
                { from: 5.4, to: 6.12, color: '#7BAC31' },
                { from: 6.12, to: 6.96, color: '#9B9D28' },
                { from: 6.96, to: 7.75, color: '#C7881D' },
                { from: 7.75, to: 8, color: '#B88400' },
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
        {
            // 第二個 Y 軸
            plotBands: null,
            tickPositions: [5.4, 6.12, 6.96, 7.75], // 第二個 Y 軸的標籤位置，與第一個共享
            categories: ['5.4', '6.12', '6.96', '7.75'], // 第二個 Y 軸的標籤
            title: null,
            labels: {
                formatter: function () {
                    return this.value.toFixed(2);
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
                    y: 8,
                    target: 3.2,
                },
            ],
        },
    ],
    tooltip: {
        // pointFormat: '',
    },
});
