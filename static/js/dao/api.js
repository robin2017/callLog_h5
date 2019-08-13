define(function () {
    console.log('after device ready !!!');
    function getCallLog(date1, date2) {
        let data = "2019-07-01";
        let filters = [
            {
                "name": "date",
                "value": new Date(data).getTime(),
                "operator": ">="
            }
        ];
        console.log(window.plugins.callLog);
        window.plugins.callLog.hasReadPermission(
            () => {
                console.log('suc has')
            },
            () => {
            });
        window.plugins.callLog.requestReadPermission(() => {
            console.log('suc request')
        }, () => {
        })
        return new Promise((resolve, reject) => {
            window.plugins.callLog.getCallLog(filters,resolve, reject);
        })
    }

    function getContact() {
        return new Promise((resolve,reject)=>{
            var options = new ContactFindOptions();
            options.filter = "";
            options.multiple = true;
            var filter = ["displayName", "name"];
            navigator.contacts.find(filter,resolve, reject, options);
        })

    }

    return {
        getCallLog,
        getContact
    }
});
