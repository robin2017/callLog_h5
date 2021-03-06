define('dao/real', [],
    function () {
        function getCallLog() {
            return new Promise((resolve) => {
                let data = "2019-07-01";
                let filters = [
                    {
                        "name": "date",
                        "value": new Date(data).getTime(),
                        "operator": ">="
                    }
                ];
                window.plugins.callLog.getCallLog(filters, function (data) {
                    resolve(data)
                });
            })
        }

        function getContacts() {
            return new Promise((resolve, reject) => {
                var options = new ContactFindOptions();
                options.filter = "";
                options.multiple = true;
                var filter = ["displayName", "name"];
                navigator.contacts.find(filter, resolve, reject, options);
            })
        }

        function getRealData() {
            console.log('come into getRealData');
            return Promise.all([getCallLog(), getContacts()]).then(data => {
                return {
                    callLog: data[0],
                    contacts: data[1]
                }
            })
        }

        return {
            getRealData
        }
    });
