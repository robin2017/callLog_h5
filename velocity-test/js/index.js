(function ($) {
    $('#div1').on('mouseover', function () {
        //velocity预定义动画：callout.shake
        $(this).velocity('callout.shake');
    });

    $.Velocity.RegisterEffect('robin.pulse', {
        defaultDuration: 300,
        calls: [
            [{scaleX: 1.1}, 0.5],
            [{scaleX: 1.0}, 0.5]
        ]
    });
    $('#div2').on('mouseover', function () {
        //velocity自定义动画：robin.pulse
        $(this).velocity('robin.pulse');
    });
})(jQuery);
