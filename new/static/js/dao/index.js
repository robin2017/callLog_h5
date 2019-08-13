define('dao/index', ['dao/mock'],
    function (mock) {
        function getData() {
            return mock.getMockData();
        }

        return {
            getData
        }
    });
