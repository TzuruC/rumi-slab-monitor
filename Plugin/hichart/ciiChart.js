const ciiRankValue = document.querySelector('.CII-rank');

const ciiInsertData = {
    ciiRangeLabelArray: ['', '5.4', '6.12', '6.96', '7.75', ''], // 索引值 0, -1 處需保留空值； 1, 2, 3, 4 代入運算出的級距值
    ciiCurrentValue: 5.87, // 船舶的CII值(最大值10)紅色BAR位置
};

// 動態改變矩形框中的RANK文字
let ciiRank = '';

if (ciiInsertData.ciiCurrentValue < ciiInsertData.ciiRangeLabelArray[1]) {
    ciiRank = 'A';
} else if (
    ciiInsertData.ciiCurrentValue > ciiInsertData.ciiRangeLabelArray[1] &&
    ciiInsertData.ciiCurrentValue < ciiInsertData.ciiRangeLabelArray[2]
) {
    ciiRank = 'B';
} else if (
    ciiInsertData.ciiCurrentValue > ciiInsertData.ciiRangeLabelArray[2] &&
    ciiInsertData.ciiCurrentValue < ciiInsertData.ciiRangeLabelArray[3]
) {
    ciiRank = 'C';
} else if (
    ciiInsertData.ciiCurrentValue > ciiInsertData.ciiRangeLabelArray[3] &&
    ciiInsertData.ciiCurrentValue < ciiInsertData.ciiRangeLabelArray[4]
) {
    ciiRank = 'D';
} else {
    ciiRank = 'E';
}

ciiRankValue.textContent = ciiRank;

// 另行宣告避免 hichart 之間衝突
const ciiChartOptions = {
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
    ...ciiChartOptions,
    chart: {
        ...ciiChartOptions.chart,
        backgroundColor: '#323639',
        marginTop: 40,
    },
    yAxis: [
        {
            // 第一個 Y 軸
            plotBands: [
                { from: 0, to: 2, color: '#149E5B' },
                { from: 2, to: 4, color: '#97C257' },
                { from: 4, to: 6, color: '#E3B731' },
                { from: 6, to: 8, color: '#D66D2E' },
                { from: 8, to: 10, color: '#AE2627' },
            ],
            tickPositions: [0.5, 2.9, 5, 7, 9.5], // 請不要更動這些數值，可能導致標籤消失
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
            tickPositions: [0, 2.1, 4.1, 6, 8, 10], // 請不要更動這些數值，可能導致標籤消失
            categories: ciiInsertData.ciiRangeLabelArray,
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
                    target: ciiInsertData.ciiCurrentValue,
                },
            ],
        },
    ],
});
