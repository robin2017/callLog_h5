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

        //得到年月日
        function getDate(date){
            return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        }

        function transformSecond(sec) {
            let ret = "";
            var hours = parseInt(sec / 3600);
            var minutes = parseInt((sec - hours * 3600) / 60);
            var seconds = sec % 60;
            if (hours > 0) {
                ret += hours + "小时"
            }
            if (minutes > 0) {
                ret += minutes + "分"
            }
            ret += seconds + "秒";
            return ret;
        }

         function hideName(name) {
            if (name === undefined) {
                return "路人甲"
            }
            if (name.length >= 3) {
                return name[0] + "*" + name[name.length - 1]
            } else if (name.length === 2) {
                return name[0] + '*'
            } else {
                return name
            }
        }

        var isChinaMobile = /^134[0-8]\d{7}$|^(?:13[5-9]|147|15[0-27-9]|178|18[2-478])\d{8}$/;
        var isChinaUnion  = /^(?:13[0-2]|145|15[56]|176|18[56])\d{8}$/;
        var isChinaTelcom = /^(?:133|153|177|18[019])\d{8}$/; //1349号段
        function getYYS(number) {
            if (isChinaMobile.test(number)) {
                return 1;
            } else if (isChinaUnion.test(number)) {
                return 2;
            } else if (isChinaTelcom.test(number)) {
                return 3;
            } else {
                return 4;
            }
        }

        return {
            deviceDetect,
            getDate,
            getYYS,
            hideName,
            transformSecond
        }
    });
