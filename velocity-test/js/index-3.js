(function ($) {
    /**
     * 动画序列3：seq
     * 完美实现
     * */
    var seq = [
        {
            elements: $('#div1'),
            properties: {width: '300px;'},
            options: {duration: 3000}
        },
        {
            elements: $('#div2'),
            properties: {width: '300px;'},
            options: {duration: 3000}
        },
    ];
    $.Velocity.RunSequence(seq)
})(jQuery);
