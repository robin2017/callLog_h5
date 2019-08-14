//页面展示
define('controller/page1', ['jquery', 'controller/index', 'velocityui', 'utils/index', 'service/index'],
    function ($, index, ui, myUtils, service) {
        const ele1 = $('.page1 main .title'), ele2 = $('.page1 main .content'),
            ele3 = $('.page1 footer .reminder');
        const seq1 = [
            {
                elements: ele1,
                properties: "transition.bounceDownIn",
                options: {duration: 500, delay: 500}
            },
            {
                elements: ele2,
                properties: "transition.bounceLeftIn",
                options: {duration: 800, stagger: 1200}
            },
            {
                elements: ele3,
                properties: "transition.swoopIn",
                options: {duration: 500, delay: 1000}
            }

        ];
        //开始隐藏
        ele1.css("opacity", 0);
        ele2.css("opacity", 0);
        ele3.css("opacity", 0);
        index.swiper.on('slideChange', function () {
            console.log('change:', index.swiper.activeIndex);
            if (index.swiper.activeIndex === 1) {
                //第一个页面动画
                $.Velocity.RunSequence(seq1);
                //bug,消失时没有及时停止动画
            } else {
                ele1.velocity('stop')
                ele2.velocity('stop')
                ele3.velocity('stop')
            }
        });
        service.getServiceData().then(data => {
            $('#callDuration').html(myUtils.transformSecond(data.callDuration))
            $('#callTimes').html(data.callTimes);
            $('#callPersonNumber').html(data.sortData.length);
            $('#callInDuration').html(myUtils.transformSecond(data.callInDuration))
            $('#callOutDuration').html(myUtils.transformSecond(data.callOutDuration));
        })
    });