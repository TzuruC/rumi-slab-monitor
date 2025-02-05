Highcharts.chart('containerAvgSpeed', {
    chart: {
        type: 'column',
        height: 200,
        backgroundColor: '#323639',
    },
    title: {
        text: '',
        style: {
            color: '#fff',
        },
    },
    legend: {
        enabled: false, // 隱藏series-name的圖例
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
        categories: [
            '19',
            '18',
            '17',
            '16',
            '15',
            '14',
            '13',
            '12',
            '11',
            '10',
            '9',
            '6',
            '2',
            '18',
            '17',
            '16',
            '15',
            '14',
            '13',
            '12',
            '11',
            '10',
            '9',
            '6',
            '2',
        ],
        crosshair: true,
        labels: {
            style: {
                color: '#FFFFFF',
                fontWeight: 'bold',
            },
        },
        gridLineWidth: 1,
        gridLineColor: '#e0e0e0',
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            style: {
                color: '#fff',
                fontSize: '16px',
                fontFamily: '微軟正黑體',
            },
        },
        labels: {
            format: '{value}', // 這裡可以自定義標籤格式
            style: {
                color: '#fff',
                fontSize: '14px',
                fontFamily: '微軟正黑體',
                fontWeight: 'bold',
            },
        },
        plotLines: [
            {
                value: 0, // 設置水平線的位置
                color: '#FFFFFF', // 設置顏色為白色
                width: 1, // 設置線的寬度
                zIndex: 2,
            },
        ],
        gridLineWidth: 1,
        gridLineColor: '#FFFFFF',
    },
    tooltip: {
        enabled: false, // 隐藏tooltip
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            groupPadding: 0.1,
            borderWidth: 0,
            borderRadius: 0,
        },
    },
    series: [
        {
            name: 'Corn',
            data: [
                { y: 2, color: '#CDC9C4' },
                { y: 13, color: '#8DC4ED' },
                { y: 13, color: '#75B8EC' },
                { y: 15, color: '#71A2C6' },
                { y: 11, color: '#79A5C8' },
                { y: 13, color: '#3357FF' },
                { y: 10, color: '#26455A' },
                { y: 11, color: '#032540' },
                { y: 11, color: '#8DC4ED' },
                { y: 9, color: '#104E7E' },
                { y: 2, color: '#CDC9C4' },
                { y: 5, color: '#3357FF' },
                { y: 2, color: '#CDC9C4' },
                { y: 3, color: '#CDC9C4' },
                { y: 13, color: '#8DC4ED' },
                { y: 13, color: '#75B8EC' },
                { y: 15, color: '#71A2C6' },
                { y: 11, color: '#79A5C8' },
                { y: 13, color: '#3357FF' },
                { y: 10, color: '#26455A' },
                { y: 11, color: '#032540' },
                { y: 11, color: '#8DC4ED' },
                { y: 9, color: '#104E7E' },
                { y: 2, color: '#CDC9C4' },
                { y: 5, color: '#3357FF' },
                { y: 2, color: '#CDC9C4' },
                { y: 3, color: '#CDC9C4' },
            ],
            dataLabels: {
                enabled: true, // 啟用數據標籤
                format: '{point.y}', // 長條圖上方顯示值
                style: {
                    color: '#fff',
                    fontSize: '14px',
                },
            },
            pointWidth: 25,
        },
    ],
});
