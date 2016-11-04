var setData = function (legend, xAxis, series) {
    require.config({
        paths: {
            echarts: '../build/dist'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/bar'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var myChart = ec.init(document.getElementById('zhaiquanzhonglei'));

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
                calculable : true,
                grid: {
                    borderColor: '#161c22'
                },
                xAxis : [
                    {
                        type : 'category',
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

var leg = ['公司债券','政府债券', '金融债券'];
var axis = ['1月'];
var ser =  [
    {
        name:'公司债券',
        type:'bar',
        data:[50]
    },
    {
        name:'政府债券',
        type:'bar',
        data:[100]
    },
    {
        name:'金融债券',
        type:'bar',
        data:[80]
    }
];

setData(leg, axis, ser);
