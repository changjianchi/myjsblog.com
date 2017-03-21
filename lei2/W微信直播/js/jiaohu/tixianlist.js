$(function(){

    //获取http链接里面的uid
    function GetQueryString(name){
         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
         var r = window.location.search.substr(1).match(reg);
         if(r!=null)return  unescape(r[2]); return null;
    }

    //从时间戳转为日期格式
    function getLocalTime(nS) {     
       return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");      
    }

    var Uid = GetQueryString('uid');
    var newData = null;
    //console.log(Uid)

    $.ajax({
        type:'GET',
        url: 'http://bs.51rebo.cn/?service=User.GetCshRecord',
        data: {
            'uid':Uid
        },
        dataType: 'json',   //一个域名下用json  异步请求用jsonp
        beforeSend:function(){
            console.log('加载前');
        },
        success:function(data){
            var newData = data;
            //console.log(newData,newData.data.code,newData.data.info.id);
            if(newData.data.info.total == 0 ){
                $(".txlistmain").css('display','none');
                $(".txlistmainno").css('display','block');
            }else{
                $(".txlistmain").css('display','block');
                $(".txlistmainno").css('display','none');
                var str = '';
                $.each(newData.data.info.list,function (key,val){
                    var starttime = getLocalTime(val.addtime); 
                    str += '<div class="tixian-b-list"><span><p>' + val.money + '元人民币</p><em>'+starttime+'</em></span><i>';
                    if(val.status == 0 ){
                        str += '审核中';
                    }else if(val.status == 1){
                        str += '成功';
                    }else{
                        str += '失败';
                    }
                    str += '</i></div>'
            });
            $(".txlistmain").html(str);
            }
        },
        error:function(){
            console.log('出错');
        }
    });
})