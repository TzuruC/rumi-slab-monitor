// Highcharts 全域隱藏 Highcharts LOGO
Highcharts.setOptions({
    credits: {
        enabled: false,
    },
    exporting: {
        enabled: false,
    },
});

// CII RANK 的4個分界值
let ciiRankValue = {
    rankAB: '11.27',
    rankBC: '12.76',
    rankCD: '14.53',
    rankDE: '16.16',
};

// 色BAR與下標籤
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
        max: 10, // 最大值
        // 第一個 Y 軸
        plotBands: [
            // 共用的區域背景
            { from: 0, to: 2, color: '#27FF96' },
            { from: 2, to: 4, color: '#02EB7A' },
            { from: 4, to: 6, color: '#149E5B' },
            { from: 6, to: 8, color: '#FFCB2B' },
            { from: 8, to: 10, color: '#FF5C5C' },
        ],
        title: null,
        labels: {
            formatter: function () {
                const labelMap = {
                    1: 'A',
                    3: 'B',
                    5: 'C',
                    7: 'D',
                    9: 'E',
                };
                return labelMap[this.value] || '';
            },
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#FFFFFF',
            },
            opposite: true,
        },
    },
    series: [
        {
            data: [
                {
                    y: 10, // 最大值
                    target: 2, // 紅槓位置
                },
            ],
        },
    ],
    pointFormat: '<b>{point.y}</b> (with target at {point.target})',
});

// 上方標籤
Highcharts.chart('containerCiiTitle', {
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
        max: 10, // 上方標籤最大值
        plotBands: [
            { from: 0, to: 2, color: '#27FF96' },
            { from: 2, to: 4, color: '#02EB7A' },
            { from: 4, to: 6, color: '#149E5B' },
            { from: 6, to: 8, color: '#FFCB2B' },
            { from: 8, to: 10, color: '#FF5C5C' },
        ],
        tickPositions: [0, 2, 4, 6, 8, 10],
        title: null,
        labels: {
            formatter: function () {
                const labelMap = {
                    0: '',
                    2: ciiRankValue.rankAB,
                    4: ciiRankValue.rankBC,
                    6: ciiRankValue.rankCD,
                    8: ciiRankValue.rankDE,
                    10: '',
                };
                return labelMap[this.value] || '';
            },
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#FFFFFF', // 第一個 Y 軸的文字顏色
            },
            opposite: true,
        },
    },
    series: [
        {
            data: [
                {
                    y: 10,
                },
            ],
        },
    ],
    // End 這裡保持和下標籤一樣的值
    pointFormat: '<b>{point.y}</b> (with target at {point.target})',
});
