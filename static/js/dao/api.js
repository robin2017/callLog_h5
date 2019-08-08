document.addEventListener('deviceready', function () {
    console.log('device ready !!!');
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
    window.plugins.callLog.getCallLog(filters, function (data) {
        console.log("data:", data);
    }, function () {
        // Error
    });


    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            console.log("name: ", contacts[i])
        }
    };

    function onError(contactError) {
        alert('onError!');
    };

    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    var filter = ["displayName", "name"];
    navigator.contacts.find(filter, onSuccess, onError, options);
});