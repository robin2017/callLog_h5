document.querySelector('.page0 #btn').addEventListener('click',function () {
    console.log('立即开启');
    mySwiper.slideNext(500)
});
document.querySelector('.page0 #btn1').addEventListener('click',function () {
    console.log('进入设置页');
   window.location = "./settings.html"
})  ;
var today = new Date(), monthBefore = new Date(today.getTime() - 1000 * 3600 * 24 * 30)


document.querySelector('#starttime').innerHTML = myUtils.getDate(monthBefore);
document.querySelector('#endtime').innerHTML = myUtils.getDate(today);