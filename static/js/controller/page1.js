//页面展示
define('controller/page1',['jquery','controller/index','velocityui'],function($,index){
	console.log('swiper:=====',index)

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
index.swiper.on('slideChange', function () {
    console.log('change:', index.swiper.activeIndex)
    if (index.swiper.activeIndex === 1) {
        //第一个页面动画
        $.Velocity.RunSequence(seq1);
        //bug,消失时没有及时停止动画
    } else {
        //并且终止序列(没实现)
        //开始隐藏
        $('.page1 main .title,.page1 main .content,.page1 footer .reminder').css("opacity", 0);
    }
});



})