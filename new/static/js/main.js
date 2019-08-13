require.config({
    baseUrl: './static/js',
    paths: {
        swiper: './lib/swiper/swiper.min',
        jquery: './lib/jquery/jquery-3.1.1'
    }
});
//require内部不能再进行define
//require(name,callback) <===> define(name,factory)

require(['swiper'], function (Swiper) {
    new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    require(['dao/index'], function (a) {
        a.getData().then(data => {
            console.log(data)
        })
    });
});

