$(function(){


    function toPercent(point){
    var str=Number(point*100).toFixed(1);
    str+="%";
    return str;
}

    var Uid = GetQueryString('uid');
    var osType = GetQueryString('osType');
    var newData = null;
    console.log(Uid)

    //直播页面视频链接
    if(osType == 1){
        var str = 'rtmp://leplay.51rebo.cn/live/';
        var str = str + Uid;
        $(".zhibovideo").attr('src',str);
    }else if(osType == 2){
        var str = 'http://leplay.51rebo.cn/live/' + Uid + '/desc.m3u8';
        $(".zhibovideo").attr('src',str);
    }

    $.ajax({
        type:'GET',
        url: 'http://bs.51rebo.cn/?service=User.GetUserInfo',
        data: {
            'uid':Uid
        },
        dataType: 'json',   //一个域名下用json  异步请求用jsonp
        beforeSend:function(){
            console.log('加载前');
        },
        success:function(data){
            newData = data;
            console.log(newData,newData.data.code,newData.data.info.id);

            var level = 'Lv.' + newData.data.info.level;

            var nextlevel = Number(newData.data.info.level) + 1;
            var nextlevel = 'Lv.' + nextlevel;
            var baifenz = Number(newData.data.info.experience) + Number(newData.data.info.nextLevel);
            var baifen = newData.data.info.experience / baifenz;
            var baifen = toPercent(baifen);
            var pdlevel = newData.data.info.level;
            $(".dengji-dengji").html('Lv.' + newData.data.info.level);
            $(".dengji-nengliang span:first-child").html(level);
            $(".dengji-nengliang span:last-child").html(nextlevel);
            if(Number(newData.data.info.nextLevel) > 10000){
                $(".dengji-jieshao i.next").html(newData.data.info.nextLevel/10000 + 'W');
            }else{
                $(".dengji-jieshao i.next").html(newData.data.info.nextLevel);
            }
            if(Number(newData.data.info.experience) > 10000){
                $(".dengji-jieshao i.wode").html(newData.data.info.experience/10000 + 'W');
            }else{
                $(".dengji-jieshao i.wode").html(newData.data.info.experience);
            }
            $(".dengji-nengliang i").css('width',baifen);
            $(".dengji-touxiang").attr('src',newData.data.info.avatar);
            $(".guanzhu img").attr('src',newData.data.info.avatar); //直播页面头像
            $(".guanzhu p").html(newData.data.info.user_nicename); //直播页面昵称
            $(".guanzhu i").html(newData.data.info.nums); //直播页面在线人数
            $(".touxiang2 img").attr('src',newData.data.info.avatar); //直播结束后的头像
            $(".bjz-txname").html(newData.data.info.user_nicename); //直播结束后的昵称
            if(newData.data.info.islive == 0 ){
                $(".zbjs").removeClass('none');
            }else{
                $(".zbjs").attr('class','banjiazai zbjs none');
            }
            if(pdlevel >= 30){
                $(".tequan-xing").addClass('active');
                $(".tequan-zuan").addClass('active');
                $(".tequan-lian").addClass('active');
                $(".tequan-huojian").addClass('active');
            }else if(pdlevel >= 22){
                $(".tequan-xing").addClass('active');
                $(".tequan-zuan").addClass('active');
                $(".tequan-lian").addClass('active');
                $(".tequan-huojian").removeClass('active');
            }else if(pdlevel >= 17){
                $(".tequan-xing").addClass('active');
                $(".tequan-zuan").addClass('active');
                $(".tequan-lian").removeClass('active');
                $(".tequan-huojian").removeClass('active');
            }else if(pdlevel >= 1){
                $(".tequan-xing").addClass('active');
                $(".tequan-zuan").removeClass('active');
                $(".tequan-lian").removeClass('active');
                $(".tequan-huojian").removeClass('active');
            }
        },
        error:function(){
            console.log('出错');
        }
    });

    function GetQueryString(name){
         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
         var r = window.location.search.substr(1).match(reg);
         if(r!=null)return  unescape(r[2]); return null;
    }

});


