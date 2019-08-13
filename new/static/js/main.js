require.config({
    baseUrl: 'static/js',
    paths: {
        swiper: 'lib/swiper/swiper'
    }
});
console.log('ddd')
define(['swiper'], function (Swiper) {
    console.log('hahahah')
    new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
})