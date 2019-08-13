console.log('hahahha3')
define(function () {
    var add = function (x,y){
        return x+y;
    };
    return {
        add: add
    };


    // function getData(isMock) {
    //     return new Promise((resolve, reject) => {
    //         console.log('hahahha4')
    //         if (!isMock) {
    //             require(['./api'],function (api) {
    //                 api.getCallLog.then(data=>{
    //                     console.log('====>12345:',data)
    //                    resolve(data)
    //                 })
    //             })
    //         }
    //     })
    // }
    // return {
    //     getData
    // }
});