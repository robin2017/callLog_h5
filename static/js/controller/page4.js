//页面展示
define('controller/page4', ['echarts', 'service/index'],
    function (echarts, service) {
        console.log('come into page4')
        service.getServiceData().then(serviceData => {
            const {eachDayHours, eachDays, eachHours} = serviceData;
            const hours = Object.keys(eachHours);
            const days = Object.keys(eachDays);
            //填充数据
            for (var i = 0; i < days.length; i++) {
                for (var j = 0; j < hours.length; j++) {
                    if (eachDayHours[days[i] + '*' + hours[j]] === undefined) {
                        eachDayHours[days[i] + '*' + hours[j]] = 0;

                    }
                }
            }
            var data = [];
            Object.keys(eachDayHours).forEach(item => {
                var strs = item.split('*');
                data.push([days.indexOf(strs[0]), hours.indexOf(strs[1]), eachDayHours[item]])
            })
            //必须添加此逻辑！！！
            data = data.map(function (item) {
                return [item[1], item[0], item[2]];
            });

            var option = {
                title: {
                    text: '通话散点图',
                },
                legend: {
                    data: ['Punch Card'],
                    left: 'right'
                },
                tooltip: {
                    position: 'top',
                    formatter: function (params) {
                        return `${days[params.value[1]]}日${ hours[params.value[0]]}时内通话${params.value[2]}(秒)`
                    }
                },
                grid: {
                    left: 2,
                    bottom: 10,
                    right: 10,
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: hours,
                    boundaryGap: false,

                    axisLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    data: days,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#999',
                            type: 'dashed'
                        }
                    },
                },
                series: [{
                    name: 'Punch Card',
                    type: 'scatter',
                    symbolSize: function (val) {
                        return val[2] * 0.02;//圆圈大小
                    },
                    itemStyle: {
                        normal: {
                            color: "#DE0CE8"
                        }
                    },
                    data: data,
                    animationDelay: function (idx) {
                        return idx * 50;//动画延时
                    }
                }]
            };
            var myChart = echarts.init(document.getElementById('echarts-month-day'));
            myChart.setOption(option);
        })
    });