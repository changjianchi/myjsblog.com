var setData = function (legend, xAxis, series) {
    require.config({
        paths: {
            echarts: '../build/dist'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/line'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('chicangjiazhi'));

            option = {
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data: legend,
                    textStyle: {
                        color: '#fff'
                    }
                },
                calculable : false,
                grid: {
                    borderColor: '#161c22'
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#515974'
                            }
                        },
                        data : xAxis
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#515974'
                            }
                        }
                    }
                ],
                series : series
            };

            // 为echarts对象加载数据
            myChart.setOption(option);
        }
    );
}

var leg = ['市值','买入成本值','摊余成本值'];
var axis = ['周一','周二','周三','周四','周五','周六','周日'];
var ser =  [
    {
        name:'市值',
        type:'line',
        stack: '市值',
        data:[120, 132, 101, 134, 90, 230, 210]
    },
    {
        name:'买入成本值',
        type:'line',
        stack: '买入成本值',
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
        name:'摊余成本值',
        type:'line',
        stack: '摊余成本值',
        data:[150, 232, 201, 154, 190, 330, 410]
    }
];

setData(leg, axis, ser);
