define('dao/index', ['dao/mock', 'dao/real', 'utils/index'],
    function (mock, real, utils) {
        function getData() {
            return !utils.deviceDetect() ? mock.getMockData()
                : real.getRealData();
        }

        return {
            getData
        }
    });
