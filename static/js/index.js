document.addEventListener('deviceready', function () {
    console.log('=====获取通话记录=====');
    let beforeTime = new Date();
    beforeTime.setMonth(beforeTime.getMonth() - 1);
    let filters = [
        {
            "name": "date",
            "value": beforeTime.getTime(),
            "operator": ">="
        }
    ];
    window.plugins.callLog.hasReadPermission(() => {
        console.log('拥有[通话记录]读的权限')
    }, () => {
        console.error('没有[通话记录]读的权限')
    })
    window.plugins.callLog.requestReadPermission(() => {
        console.log('成功请求[通话记录]读的权限')
    }, () => {
        console.error('失败请求[通话记录]读的权限')
    })
    window.plugins.callLog.getCallLog(filters, function (data) {
        console.log("获取通话记录数据:", data);
     //   console.log(JSON.stringify(data))
    }, function () {
        console.error("获取通话记录数据失败")
    });


    console.log('=====获取通讯录=====');


    function onSuccess(contacts) {
        let myContacts = {};
        for (var i = 0; i < contacts.length; i++) {
            let item = contacts[i];
            console.log("name: ", item);
            item.phoneNumbers&&item.phoneNumbers.forEach(num=>{
                myContacts[myUtils.trim(num.value)] = item.displayName;
            })
        }
        console.log("====",myContacts,JSON.stringify(myContacts),Object.keys(myContacts).length)
    }


    function onError(contactError) {
        alert('通讯录获取失败!');
    };

    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    var filter = ["displayName", "name"];
    navigator.contacts.find(filter, onSuccess, onError, options);
});