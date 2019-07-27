function handle() {
    var myColor='#67e0e3';
    var option = {
        title:{
            text:'一月通话时长',
            textStyle:{
                color:'white',

            },
            textVerticalAlign :'center'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                color: 'white',
                fontSize: 14
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: 'white',
                fontSize: 14
            },
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {},
            itemStyle: {
                normal: {
                    color: myColor
                }
            },
        }]
    };


    var myChart = echarts.init(document.getElementById('echarts-month'));
    myChart.setOption(option);


    var option2 = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                color: 'white',
                fontSize: 14
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: 'white',
                fontSize: 14
            },
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {},
            itemStyle: {
                normal: {
                    color: myColor
                }
            },
        }]
    };

    var myChart2 = echarts.init(document.getElementById('echarts-day'));
    myChart2.setOption(option2);
}

setTimeout(handle, 1000);