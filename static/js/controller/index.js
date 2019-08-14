//页面展示
define('controller/index',['swiper'], function (Swiper){
	console.log('ddd',Swiper)
	let swiper =  new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
	require(['controller/page0']);
	require(['controller/page1']);
	return {
	 	swiper
	 }
})