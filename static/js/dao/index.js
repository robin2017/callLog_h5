//chrome上调试移动端设备时，需要mustMock为true
const mustMock = true;
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
