function handle() {

    const {mobileTime, unionTime, telcomTime} = window.globalObject;
    console.log('三足鼎立：',mobileTime,unionTime,telcomTime)
    var showData = [
        {value: mobileTime, name: '移动',},
        {value: unionTime, name: '联通',},
        {value: telcomTime, name: '电信'}
    ]
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['移动', '联通', '电信']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: showData
            }
        ]
    };

    var myChart = echarts.init(document.getElementById('echarts-yys'));
    myChart.setOption(option);


}

setTimeout(handle, 1000);