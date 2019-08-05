var myUtils = {};
/**
 * 将秒数转化为小时
 * */
myUtils.transformSecond = function (sec) {
    let ret = "";
    var hours = parseInt(sec / 3600);
    var minutes = parseInt((sec - hours * 3600) / 60);
    var seconds = sec % 60;
    if (hours > 0) {
        ret += hours + "小时"
    }
    if (minutes > 0) {
        ret += minutes + "分"
    }
    ret += seconds + "秒";
    return ret;
}

myUtils.trim = function (str) {
    return str.replace(/\s+/g, "")
};

myUtils.hideName = function (name) {
    if (name === undefined) {
        return "路人甲"
    }
    if (name.length >= 3) {
        return name[0] + "*" + name[name.length - 1]
    } else if (name.length === 2) {
        return name[0] + '*'
    } else {
        return name
    }
}

myUtils.getMockData = function () {
    return new Promise((resolve, reject) => {
        $.get('static-rb/mock/callLog.json', function (callLog) {
            $.get('static-rb/mock/contacts.json', function (contacts) {
                resolve({callLog, contacts})
            })
        })
    })
}
var isChinaMobile = /^134[0-8]\d{7}$|^(?:13[5-9]|147|15[0-27-9]|178|18[2-478])\d{8}$/;
var isChinaUnion  = /^(?:13[0-2]|145|15[56]|176|18[56])\d{8}$/;
var isChinaTelcom = /^(?:133|153|177|18[019])\d{8}$/; //1349号段
myUtils.getYYS = function (number) {
    if (isChinaMobile.test(number)) {
        return 1;
    } else if (isChinaUnion.test(number)) {
        return 2;
    } else if (isChinaTelcom.test(number)) {
        return 3;
    } else {
        return 4;
    }
}

myUtils.datedifference = function(sDate1, sDate2) {    //sDate1和sDate2是2006-12-18格式
    var dateSpan,
        tempDate,
        iDays;
    sDate1 = Date.parse(sDate1);
    sDate2 = Date.parse(sDate2);
    dateSpan = sDate2 - sDate1;
    dateSpan = Math.abs(dateSpan);
    iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
    return iDays+1
};
//得到年月日
myUtils.getDate = function(date){
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}