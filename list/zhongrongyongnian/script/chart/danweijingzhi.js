require.config({
  paths: {
    echarts: '../build/dist'
  }
});
// 使用
require(
  [
    'echarts',
    'echarts/chart/line',
  ],
  function(ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.getElementById('danweijingzhi'));
    var shuzu = [-4, 0, 5, 8, 4, 1, 20];
    var height = $("#demo").height();
    option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销'],
        textStyle: {
            color: '#fff'
        }
      },
      calculable: true,
      grid: {
          borderColor: '#161c22'
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#515974'
            }
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }],
      yAxis: [{
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#515974'
            }
        }
      }],
      series: [{
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        symbol: 'none',
        smooth: 'true',
        data: shuzu,
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
      }]
    };

    function buildPieSeries() {
      var yAxis = myChart.component.yAxis.getAxis(0);
      var yheght = myChart.component.grid.getY();
      var chartHeight = myChart.component.grid.getHeight();
      var length = yAxis._valueList.length - 1;
      var arr = yAxis._valueList;
      var avg=0;
        var sum=0;
        for(var i=0;i<shuzu.length;i++)
        {
           sum+=shuzu[i];
        }

        avg=sum/shuzu.length;

      for (var i in arr) {
        if (arr[i] == '0') {
          biao = i;
        }
      }
      var bili = length - biao;
      if(Math.min.apply(null, shuzu) < 0){
        yhe = arr[length] - arr[0];
      }else{
        yhe = arr[length] - arr[0];
      }
      // var yhe = 
      var a = Number(chartHeight / yhe * (yhe - avg + arr[0])) + yheght;
      //var a = 60;
      var b = Number(a) + 1;
      option.series[0].itemStyle = {
        normal: {
          areaStyle: {
            //区域图， 纵向渐变填充
            color: (function() {
              var zrColor = require('zrender/tool/color');
              return zrColor.getLinearGradient(
                0, a, 0, b, [
                  [0, '#ff2a22'],
                  [0.5, '#fff'],
                  [1, '#52c253'],
                ]
              )
            })()
          }
        }
      }
      option.animation = true;
      myChart.setOption(option);
      window.onresize = buildPieSeries;
    }
    // 构造出有背景的图表，setTimeout！
    setTimeout(buildPieSeries, 100);

    // 为echarts对象加载数据
    myChart.setOption(option);
  }
);
