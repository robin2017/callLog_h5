//页面展示
define('controller/page0', ['jquery', 'controller/index', 'utils/index'],
    function ($, index, utils) {
        console.log('come into page0')
        $('.page0 #btn').on('click', function () {
            console.log('立即开启');
            index.swiper.slideNext(500)
        });
        $('.page0 #btn1').on('click', function () {
            console.log('进入设置页');
            window.location = "./settings.html"
        });
        var today = new Date();
        var monthBefore = new Date(today.getTime() - 1000 * 3600 * 24 * 30);
        $('#starttime').html('2019-6-9');
        $('#endtime').html('2019-7-9');
    });