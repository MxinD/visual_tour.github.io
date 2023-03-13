function animate(obj,target,callback){
    // console.log(callback) //调用的时候 callback()

    // 清除之前的定时器，防止点击多次造成非正常速度
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target){
            clearInterval(obj.timer);
            // 回调函数写在定时器结束里面
            if(callback){
                callback();
            };
        };
        obj.style.left = obj.offsetLeft + step + 'px';
        }, 15);
}