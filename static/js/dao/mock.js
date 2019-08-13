define('dao/mock', ['jquery'],
    function ($) {
        function getMockData() {
            console.log('come into getMockData');
            return new Promise((resolve) => {
                $.get('static/mock/callLog.json', function (callLog) {
                    $.get('static/mock/contacts.json', function (contacts) {
                        resolve({callLog, contacts})
                    })
                })
            })
        }

        return {
            getMockData
        }
    });
