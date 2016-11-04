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
            var myChart = ec.init(document.getElementById('chengben'));

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
                toolbox: {
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
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

var leg = ['成本','平均资金成本'];
var axis = ['周一','周二','周三','周四','周五','周六','周日'];
var ser =  [
    {
        name:'成本',
        type:'line',
        stack: '成本',
        data:[120, 132, 101, 134, 90, 230, 210]
    },
    {
        name:'平均资金成本',
        type:'line',
        stack: '平均资金成本',
        data:[-220, -182, -191, -234, -290, -330, -310]
    }
];

setData(leg, axis, ser);
