define('dao/mock', ['jquery'],
    function ($) {
        function getMockData() {
            return new Promise((resolve, reject) => {
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
    })