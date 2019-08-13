define('dao/index', ['exports', 'dao/mock'],
    function (exports, mock) {
        function getData() {
            return mock.getMockData();
        }
        //在factory中将需要导出的函数挂载在exports上
        exports.getData = getData
    });