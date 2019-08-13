define('utils/index', [],
    function () {
        function deviceDetect() {
            var isMobile = navigator.userAgent.match(/Android|iPhone/);
            if (isMobile) {
                console.log('移动端设备')
            } else {
                console.log('pc端设备')
            }
            return isMobile;
        }

        return {
            deviceDetect
        }
    });
