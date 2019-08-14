/**
 * 处理数据
 */
//缓存数据，只从dao层加载一次数据
let daoData = null;
//业务层结果数据
let serviceData = {down:false};
//相关业务数据
define('service/index', ['dao/index','utils/index'],
    function (dao,myUtils) {
    	//将dao层数据直接返回
       function getDaoData(){
       	return daoData?  Promise.resolve(daoData):	dao.getData().then(data=>{
       		console.log('从dao层加载一次数据')
       		daoData = data;
       		return daoData;
       	})
       }
       //分析数据
       function handleData(){
       	console.log('come into handleData')

       	return	getDaoData().then(data=>{

			  	const {callLog, contacts} = data;
			    let mockData = callLog, mockContacts = contacts;
			    console.log('模拟数据：', mockData);
			    let callTimes = mockData.length;
			    let callDuration = 0;
			    let callInDuration = 0;
			    let callOutDuration = 0;
			    let callPersonMap = {};//也可以用map

			    let mobileTime = 0, unionTime = 0, telcomTime = 0;

			    mockData.forEach(item => {
			        let type = myUtils.getYYS(item.number)
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
			    serviceData.callDuration = callDuration;
			    serviceData.callInDuration = callInDuration;
			    serviceData.callOutDuration = callOutDuration;
			    serviceData.callPersonMap = callPersonMap;
			    serviceData.down = true;
			    return serviceData;
       		})
       }

       function getCallDuration(){
       	return	serviceData.down?Promise.resolve(serviceData.callDuration):
       		handleData().then(data=>{
       		console.log('aaaaaaaaaaaaaaaaa',data)
       			return data.callDuration
       		})
       }

       return {
       	getDaoData,
       	handleData,
       	getCallDuration,
       	name:'service.js'
       }
    });
