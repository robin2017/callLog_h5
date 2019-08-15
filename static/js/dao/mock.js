define('dao/mock', ['jquery', 'utils/index'],
    function ($, utils) {
        function getMockData() {
            console.log('come into getMockData');
            return Promise.all([utils.getStaticData('static/mock/callLog.json'),
                utils.getStaticData('static/mock/contacts.json')]).then(data => {
                return {
                    callLog: data[0],
                    contacts: data[1]
                };
            })
        }

        return {
            getMockData
        }
    });
