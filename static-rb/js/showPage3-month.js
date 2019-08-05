function handle() {
    const {eachDays,eachHours} = window.globalObject;

    var myColor='#67e0e3';

    function getData(eachDays){
        let ret = [];
        Object.keys(eachDays).forEach(item=>{
            ret.push(["2019-"+item,eachDays[item]])
        })
        return ret;
    }


    function getVirtulData(year) {
        year = year || '2017';
        var date = +echarts.number.parseDate(year + '-01-01');
        var end = +echarts.number.parseDate((+year + 1) + '-01-01');
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time < end; time += dayTime) {
            data.push([
                echarts.format.formatTime('yyyy-MM-dd', time),
                Math.floor(Math.random() * 10000)
            ]);
        }
        return data;
    }

    console.log('getVirtulData(2016):',getVirtulData(2016),getData(eachDays))

  var  option = {
        title: {
            top: 30,
            left: 'center',
            text: '最近一月每日通话时长'
        },
        tooltip : {},
        visualMap: {
            min: 0,
            max: 3000,
            type: 'piecewise',
            orient: 'horizontal',
            left: 'center',
            top: 65,
            textStyle: {
                color: '#000'
            }
        },
        calendar: {
            top: 120,
            left: 30,
            right: 30,
            cellSize: ['auto', 13],
            range: ['2019-6-2','2019-7-20'],
            itemStyle: {
                normal: {borderWidth: 0.5}
            },
            yearLabel: {show: false}
        },
        series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data:getData(eachDays)
        }
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
            data:Object.keys(eachHours)
            //data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: 'white',
                fontSize: 14
            },
        },
        series: [{
            data:Object.values(eachHours),
          //  data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
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