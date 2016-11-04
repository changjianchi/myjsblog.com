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
            var myChart = ec.init(document.getElementById('huobishichangbiandong'));

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

var leg = ['指数一'];
var axis = ['2016-1-1','2016-1-5','2016-1-10','2016-1-20'];
var ser = [
    {
        name:'指数一',
        type:'line',
        data:[100, 50, 150, 200]
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
