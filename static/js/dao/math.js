console.log(2222)
define(function (){
    var add = function (x,y){
        return x+y;
    };
    return {
        add: add
    };
});
