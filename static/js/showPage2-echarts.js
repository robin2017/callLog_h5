function handle() {
    //1、处理数据
    const {sortData, callInDuration, callOutDuration} = window.globalObject;
    const showNumber = 7;//只显示前10，剩下为其他


// 2、上图显示
// 基于准备好的dom，初始化echarts实例
  //  var callInColor='#ffdb5c',callOutColor='#67e0e3';
    var callInColor='#FF7304',callOutColor='#B70DFF';
    var myChart = echarts.init(document.getElementById('main'));
    var yAxisData = [], callInData = [], callOutData = [], callInSum = 0, callOutSum = 0;
    for (let i = 0; i < showNumber; i++) {
        yAxisData.push(sortData[i]['displayName']);
        callInData.push(0 - sortData[i]['callIn']);
        callInSum += sortData[i]['callIn'];
        callOutData.push(sortData[i]['callOut']);
        callOutSum += sortData[i]['callOut'];
    }
    yAxisData.push('其他');
    callInData.push(0 - (callInDuration - callInSum));
    callOutData.push(callOutDuration - callOutSum);

    console.log('====:', yAxisData, callInData, callOutData)


    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['接听', '拨打']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: 'white',
                    fontSize: 14
                },

            }

        ],
        yAxis: [
            {
                type: 'category',
                axisLabel: {
                    color: 'white',
                    fontSize: 12
                },
                axisTick: {show: false},
                data: yAxisData
                // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        series: [

            {
                name: '拨打',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                itemStyle: {
                    normal: {
                        color: callOutColor
                    }
                },
                data: callOutData
                // data: [320, 302, 341, 374, 390, 450, 420]
            },
            {
                name: '接听',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                itemStyle: {
                    normal: {
                        color: callInColor
                    }
                },
                data: callInData
                //data: [-120, -132, -101, -134, -190, -230, -210]
            }
        ]
    };


// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

// 基于准备好的dom，初始化echarts实例


    var option2 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            data: ['接听总时长', '拨打总时长']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
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
                data: [
                    {
                        value: callInDuration,
                        name: '接听总时长',
                        itemStyle: {
                            normal: {
                                color: callInColor
                            }
                        },
                    },
                    {
                        value: callOutDuration,
                        name: '拨打总时长',
                        itemStyle: {
                            normal: {
                                color: callOutColor
                            }
                        },
                    },
                ]
            }
        ]
    };
    var myChart2 = echarts.init(document.getElementById('aside'));
//使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);
}

setTimeout(handle, 1000);