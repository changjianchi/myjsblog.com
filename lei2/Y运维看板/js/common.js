
var trendChart = echarts.init(document.getElementById('trendChart'));
trendChart.setOption({
    tooltip : {
        show:false
    },
    color:['#14b8d4'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '44',
        top: '21%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        name:'\/月份',
        splitLine: {show:false},
        data :  function (){
            var list = [];
            for (var i = 1; i <= 12; i++) {
                list.push(i<10?'0'+i:i);
            }
            return list;
        }()
    },
    yAxis: {
        splitLine:{
            interval:0
        },
        type : 'value',
        position:'left',
        name:'\/数量'

    },
    series: [
        {
            type:'bar',
            barWidth:'30',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:trendData
        }

    ]
});


var gdName=[];
for (var i=0 ;i < gdNameValue.length; i++) {
    gdName.push(gdNameValue[i].name);
}

var gdSource=echarts.init(document.getElementById('gdSource'));
gdSource.setOption({
    color:[
        '#0bd5de','#00d1a9','#14b8d4','#8bd06e','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'
    ],
    tooltip : {
        show: false
    },
    legend: {
        orient: 'vertical',
        top: 'middle',
        right:'20%',
        data: gdName,
        textStyle:{
            fontSize:18
        },
        formatter: function (name) {
            for (var i=0 ;i < gdNameValue.length; i++) {
                if(name == gdNameValue[i].name) return name+'：'+ gdNameValue[i].value;
            }
            return name;
        }
    },
    series : [
        {
            name: '工单来源',
            type: 'pie',
            radius : '55%',
            center: ['30%', '55%'],
            data:gdNameValue,
            label:{
                normal:{
                    position:'outside',
                    formatter: '{d}'+'%'
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
});

var typeName=[];
for (var i=0 ;i < typeNameValue.length; i++) {
    typeName.push(typeNameValue[i].name);
}

var gdType=echarts.init(document.getElementById('gdType'));
gdType.setOption({
    color:[
        '#f18f3e','#efbb6a','#fdd925','#8f4530','#d26355', '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'
    ],
    tooltip : {
        show: false
    },
    legend: {
        orient: 'vertical',
        top: 'middle',
        right:'20%',
        data: typeName,
        textStyle:{
            fontSize:18
        },
        formatter: function (name) {
            for (var i=0 ;i < typeNameValue.length; i++) {
                if(name == typeNameValue[i].name) return name+'：'+ typeNameValue[i].value;
            }
            return name;
        }
    },
    series : [
        {
            name: '工单类型占比',
            type: 'pie',
            radius : '55%',
            center: ['30%', '55%'],
            data:typeNameValue,
            label:{
                normal:{
                    position:'outside',
                    formatter: '{d}'+'%'
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
});

$(window).resize(function () {
    trendChart.resize();
    gdSource.resize();
    gdType.resize();
});
