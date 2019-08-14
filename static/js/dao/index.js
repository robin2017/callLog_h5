const mustMock = false;
define('dao/index', ['dao/mock', 'dao/real', 'utils/index'],
    function (mock, real, utils) {
        function getData() {
            if (mustMock) {
                return mock.getMockData();
            }
            return !utils.deviceDetect() ? mock.getMockData()
                : real.getRealData();
        }

        return {
            getData
        }
    });
