(function ($) {
    /**
     * 动画序列1：delay
     * 缺点：和duration变量耦合
     * */
    $('#div1').velocity(
        {
            width: '300px',
        },
        {
            duration: 3000
        }
    );

    $('#div2').velocity(
        {
            width: '300px',
        },
        {
            duration: 3000,
            delay: 3000
        }
    )
})(jQuery);
