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
    ret+=seconds+"秒";
    return ret;
}

myUtils.trim = function (str) {
    return str.replace(/\s+/g, "")
};

myUtils.hideName = function (name) {
    if(name===undefined){
        return "路人甲"
    }
    if(name.length>=3){
        return name[0]+"*"+name[name.length-1]
    }else if(name.length===2){
        return name[0]+'*'
    }else{
        return name
    }
}

myUtils.getMockData = function () {
    return new Promise((resolve,reject)=>{
        $.get('static-rb/mock/callLog.json',function (callLog) {
           $.get('static-rb/mock/contacts.json',function (contacts) {
               resolve({callLog,contacts})
           })
        })
    })
}