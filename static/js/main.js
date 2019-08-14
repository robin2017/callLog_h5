require.config({
    baseUrl: './static/js',
    paths: {
        swiper: './lib/swiper/swiper.min',
        jquery: './lib/jquery/jquery-3.1.1',
        velocity:'./lib/velocity/velocity',
        //velocity.ui源码中不能乱改，搞得自己浪费半个小时！！！
        velocityui:'./lib/velocity/velocity.ui',
        echarts:'./lib/echarts/echarts.latest'
    },
    shim:{
        velocity:{
            deps:['jquery'],
            exports:'velocity'
        },
        velocityui:{
            deps:['velocity'],
            exports:'velocityui'
        }
    }
});
//require内部不能再进行define
//require(name,callback) <===> define(name,factory)

require([], function () {
    require(['controller/index'])
    require(['service/index'], function (a) {
        console.log('service:',a)
        a.getDaoData().then(data=>{
            console.log('data:',data)
        })
        a.getCallDuration().then(data=>{
            console.log('bbbbbbbbbbbbbbbbbbbb')
            console.log('duration:',data)
        })
    });
});

