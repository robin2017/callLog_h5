(function ($) {
    /**
     * 动画序列2：回调
     * 缺点：回调深渊
     * */
    $('#div1').velocity(
        {
            width: '300px',
        },
        {
            duration: 3000,
            complete: function () {
                $('#div2').velocity(
                    {
                        width: '300px',
                    },
                    {
                        duration: 3000,
                    }
                )
            }
        }
    )
})(jQuery);
