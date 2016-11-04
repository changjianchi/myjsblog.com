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
            var myChart = ec.init(document.getElementById('xianjinliuyuce'));

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
                    show : true
                },
                calculable : true,
                grid: {
                    borderColor: '#161c22'
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : xAxis,
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
                yAxis : [
                    {
                        name : '左侧单位',
                        type : 'value',
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#515974'
                            }
                        }
                    },
                    {
                        name : '右侧单位',
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

var leg = ['存量本金','存量本金赎回','到期回购持仓', '存量资产到期', '存量资产', '未到期回购持仓', '当期流动性', '累计流动性', '杠杆'];
var axis = ['周一','周二','周三','周四','周五','周六','周日'];
var ser = [
    {
        name:'存量本金',
        type:'line',
        stack: '存量本金',
        data:[120, 132, 101, 134, 90, 230, 210]
    },
    {
        name:'存量本金赎回',
        type:'line',
        stack: '存量本金赎回',
        data:[220, 20, 191, 234, 290, 330, 310]
    },
    {
        name:'到期回购持仓',
        type:'line',
        stack: '到期回购持仓',
        data:[150, 232, 201, 154, 190, 330, 410]
    },
    {
        name:'存量资产到期',
        type:'line',
        stack: '存量资产到期',
        data:[120, 132, 101, 134, 90, 230, 210]
    },
    {
        name:'存量资产',
        type:'line',
        stack: '存量资产',
        yAxisIndex:1,
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
        name:'未到期回购持仓',
        type:'line',
        stack: '未到期回购持仓',
        yAxisIndex:1,
        data:[150, 232, 201, 154, 190, 330, 410]
    },
    {
        name:'当期流动性',
        type:'line',
        stack: '当期流动性',
        yAxisIndex:1,
        data:[120, 132, 101, 134, 90, 230, 210]
    },
    {
        name:'杠杆',
        type:'line',
        stack: '杠杆',
        yAxisIndex:1,
        data:[150, 232, 201, 154, 190, 330, 410]
    }
];

setData(leg, axis, ser);

$('.vipcheck_right').on('click', 'label', function () {
    var $this = $(this);
    var text = $.text($this.find('span'));

    if ($this.find('input').prop("checked")) {
        $this.find('input').prop("checked", false);

        for (var i=0; i<leg.length; i++) {
            if (leg[i] == text) {
                leg.splice(i,1);
                break;
            }
        }

        for (var i=0; i<ser.length; i++) {
            if (ser[i].name == text) {
                 ser.splice(i,1);
                 break;
            }
        }

    }
    else {
        $this.find('input').prop("checked", true);
        var data = {};
        var arr = $this.find('span').data('arr').split(',');

        leg.push(text);

        data.name = text;
        data.type = 'line';
        data.data = arr;

        ser.push(data);
    }

    setData(leg, axis, ser);
    return false;
});
