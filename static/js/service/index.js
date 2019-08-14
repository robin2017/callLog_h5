/**
 * 处理数据
 */
//缓存数据，只从dao层加载一次数据
let daoData = null;
//业务层结果数据
let serviceData = {done: false};
//相关业务数据
define('service/index', ['dao/index', 'utils/index'],
    function (dao, myUtils) {
        //将dao层数据直接返回
        function getDaoData() {
            return daoData ? Promise.resolve(daoData) :
                dao.getData().then(data => {
                    console.log('从dao层加载一次数据:', daoData);
                    daoData = data;
                    return daoData;
                })
        }

        //分析数据
        function handleData() {
            return getDaoData().then(data => {
                const {callLog, contacts} = data;
                let mockData = callLog, mockContacts = contacts;
                console.log('处理数据：', mockData);
                let callTimes = mockData.length;
                let callDuration = 0;
                let callInDuration = 0;
                let callOutDuration = 0;
                let callPersonMap = {};//也可以用map
                let mobileTime = 0, unionTime = 0, telcomTime = 0;
                mockData.forEach(item => {
                    let type = myUtils.getYYS(item.number);
                    if (type === 1) {
                        mobileTime += item.duration;
                    } else if (type === 2) {
                        unionTime += item.duration;
                    } else if (type === 3) {
                        telcomTime += item.duration;
                    } else {
                        console.log('未知运营商号码：' + item.number)
                    }
                    item.dateStr = new Date(item.date);
                    callDuration += item.duration;
                    let it = callPersonMap[item.number] ?
                        callPersonMap[item.number] : {totalDuration: 0, totalTimes: 0}
                    it.totalDuration += item.duration;
                    it.callIn = it.callIn || 0;
                    it.callOut = it.callOut || 0;
                    if (item.type === 1) {
                        callInDuration += item.duration;
                        it.callIn += item.duration;
                    } else {
                        callOutDuration += item.duration;
                        it.callOut += item.duration;
                    }
                    it.totalDurationTransform = myUtils.transformSecond(it.totalDuration);
                    it.totalTimes++;
                    it.averageDuration = parseInt(it.totalDuration / it.totalTimes)
                    it.name = item.cachedName || mockContacts[item.number];
                    it.displayName = myUtils.hideName(it.name)
                    callPersonMap[item.number] = it;
                });
                console.log('总时长：', callDuration, myUtils.transformSecond(callDuration));
                console.log('接听：', callInDuration, myUtils.transformSecond(callInDuration));
                console.log('打出：', callOutDuration, myUtils.transformSecond(callOutDuration));
                console.log('通话人数:', callPersonMap);
                let array = Object.values(callPersonMap)
                array.sort(compare('totalDuration'))

                Object.assign(serviceData, {callTimes, callDuration, callInDuration, callOutDuration, callPersonMap})
                Object.assign(serviceData, {mobileTime, unionTime, telcomTime})
                serviceData.sortData = array;


                //计算每天每时的数据
                //计算每天，每时的数据
                var eachDays = {}, eachHours = {}, eachDayHours = {};
                mockData.forEach(item => {
                    //将日期转化
                    let date = new Date(item.date);

                    let d = (date.getMonth() + 1) + '-' + date.getDate();
                    let h = date.getHours();
                    if (eachDays[d] === undefined) {
                        eachDays[d] = 0;
                    }
                    if (eachHours[h] === undefined) {
                        eachHours[h] = 0;
                    }
                    if (eachDayHours[d + '*' + h] === undefined) {
                        eachDayHours[d + '*' + h] = 0;
                    }

                    if (date.getHours() > 1 && date.getHours() < 5) {
                        console.log('深夜：', item)
                    }
                    eachDays[d] += item.duration;
                    eachHours[h] += item.duration;
                    eachDayHours[d + '*' + h] += item.duration
                });
                Object.assign(serviceData, {eachDays, eachHours, eachDayHours});

                serviceData.done = true;
                console.log('在service层处理一次数据:', serviceData);
                return serviceData;
            })
        }


        function compare(property) {
            return function (a, b) {
                var value1 = a[property];
                var value2 = b[property];
                return value2 - value1;
            }
        }

        function getCallDuration() {
            return serviceData.done ? Promise.resolve(serviceData.callDuration) :
                handleData().then(data => {
                    return data.callDuration
                })
        }

        function getServiceData() {
            return serviceData.done ? Promise.resolve(serviceData) :
                handleData()
        }

        return {
            getDaoData,
            getCallDuration,
            getServiceData,
            name: 'service.js'
        }
    });
