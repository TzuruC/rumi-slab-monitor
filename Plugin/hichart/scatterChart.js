Highcharts.chart('containerScatter', {
    chart: {
        type: 'line', // 設定為折線圖
        backgroundColor: '#323639',
        height: 300,
    },
    credits: {
        enabled: false, // 隱藏Highcharts連結
    },
    navigation: {
        buttonOptions: {
            enabled: false,
        },
    },
    xAxis: {
        labels: {
            style: {
                color: '#FFFFFF',
                fontWeight: 'bold',
            },
        },
    },
    yAxis: {
        title: {
            text: 'Y 軸標題',
            style: {
                color: '#FFFFFF',
                fontWeight: 'bold',
            },
        },
        labels: {
            style: {
                color: '#FFFFFF',
                fontWeight: 'bold',
            },
        },
    },
    series: [
        {
            name: '折線數據',
            data: [2, 4, 1, 5, 3], // 折線圖的數據
            marker: {
                enabled: true, // 啟用節點
            },
        },
        {
            name: '散點數據',
            type: 'scatter', // 設定為散點圖
            data: [
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4],
                [4, 5],
            ], // 散點圖的數據
            marker: {
                radius: 5, // 調整散點的大小
            },
        },
    ],
});
