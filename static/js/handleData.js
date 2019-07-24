let callLogData = mockData;
console.log('模拟数据：', mockData)
let callTimes = mockData.length;
let callDuration = 0;
let callInDuration = 0;
let callOutDuration = 0;
let callPersonMap = {};//也可以用map

mockData.forEach(item => {
    callDuration += item.duration;
    let it = callPersonMap[item.number] ?
        callPersonMap[item.number] : {totalDuration: 0, totalTimes: 0}
    it.totalDuration += item.duration;
    if(item.type===1){
       callInDuration+=item.duration
    }else{
        callOutDuration+=item.duration;
    }
    it.totalDurationTransform  = myUtils.transformSecond(it.totalDuration);
    it.totalTimes++;
    it.averageDuration = parseInt(it.totalDuration/it.totalTimes)
    it.name=item.cachedName||mockContacts[item.number];
    it.displayName = myUtils.hideName(it.name)
    callPersonMap[item.number] = it;
});
console.log('总时长：', callDuration, myUtils.transformSecond(callDuration));
console.log('接听：', callInDuration, myUtils.transformSecond(callInDuration));
console.log('打出：', callOutDuration , myUtils.transformSecond(callOutDuration));
console.log('通话人数:', callPersonMap);
let array = Object.values(callPersonMap)


array.sort(compare('totalDuration'))
console.log('排序后:',array);

function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    }
}


const rb$ = document.querySelector.bind(document);
rb$('#callDuration').innerText = myUtils.transformSecond(callDuration)
rb$('#callTimes').innerText = callTimes;
rb$('#callPersonNumber').innerText = array.length
rb$('#callInDuration').innerText = myUtils.transformSecond(callInDuration)
rb$('#callOutDuration').innerText = myUtils.transformSecond(callOutDuration)