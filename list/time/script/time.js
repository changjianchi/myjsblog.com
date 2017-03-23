function setTime(time) {
    var nowTime = new Date().getTime(); /* 获取当前时间戳，这里最好改成获取服务器时间 */
    var date = new Date(time);
    var second = date.getTime();  /* 文章发布时间戳 */
    var newTime = (nowTime - second) / 1000;    /* 秒数 */
    var value;
    
    if (newTime < 60) {
        value = '刚刚';
    }
    else {
        var minute = Math.round(newTime / 60);
        if (minute < 60) {
            value = minute + '分钟前';
        }
        else if (minute >= 60) {
            var hours = Math.floor(minute / 60);
            if (hours < 24) {
                value = hours + '小时前';
            }
            else if (hours < 240) {
                var days = Math.ceil(hours / 24);
                value = days + '天前';
            }
            else {
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                month = month < 10 ? '0' + month : month;
                var day = date.getDate();
                day = day < 10 ? '0' + day : day;
                value = year + '-' + month + '-' + day;
            }
        }
    }
    return value;
}
var time = setTime('2017/03/15/ 13:15:30');
console.log(time);
