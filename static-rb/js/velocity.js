const seq1 = [
    {
        elements: $('.page1 main .title'),
        properties: "transition.bounceDownIn",
        options: {duration: 500, delay: 500}
    },
    {
        elements: $('.page1 main .content'),
        properties: "transition.bounceLeftIn",
        options: {duration: 800, stagger: 1200}
    },
    {
        elements: $('.page1 footer .reminder'),
        properties: "transition.swoopIn",
        options: {duration: 500, delay: 1000}
    }

];
//开始隐藏
$('.page1 main .title,.page1 main .content,.page1 footer .reminder').css("opacity", 0);


mySwiper.on('slideChange', function (index) {
    console.log('change:', mySwiper.activeIndex)
    if (mySwiper.activeIndex === 1) {
        //第一个页面动画
        $.Velocity.RunSequence(seq1);
        //bug,消失时没有及时停止动画
    } else {
        //开始隐藏
        $('.page1 main .title,.page1 main .content,.page1 footer .reminder').css("opacity", 0);
    }
});