const isMock = true;
define('dao/index', ['dao/mock'],
    function (mock) {
        function getData() {
            return isMock ? mock.getMockData() : null;
        }

        return {
            getData
        }
    });
