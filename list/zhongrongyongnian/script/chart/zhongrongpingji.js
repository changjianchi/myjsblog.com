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
            var myChart = ec.init(document.getElementById('zhongrongpingji'));

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
                series : [
                    {
                        name:'AA-强',
                        type:'bar',
                        data:[50]
                    },
                    {
                        name:'AA-中',
                        type:'bar',
                        data:[100]
                    },
                    {
                        name:'AA-弱',
                        type:'bar',
                        data:[80]
                    }
                ]
            };

            // 为echarts对象加载数据
            myChart.setOption(option);
        }
    );

}

var leg = ['AA-强','AA-中', 'AA-弱'];
var axis = ['1月'];
var ser =  [
    {
        name:'AA-强',
        type:'bar',
        data:[50]
    },
    {
        name:'AA-中',
        type:'bar',
        data:[100]
    },
    {
        name:'AA-弱',
        type:'bar',
        data:[80]
    }
];

setData(leg, axis, ser);
