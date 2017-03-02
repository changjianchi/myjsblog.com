$(function(){

    function GetQueryString(name){
         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
         var r = window.location.search.substr(1).match(reg);
         if(r!=null)return  unescape(r[2]); return null;
    }
    var osType = GetQueryString('osType');

    var newDataDown = null;
    $.ajax({
        type:'GET',
        url: 'http://bs.51rebo.cn/?service=User.SearchArea',
        data: {
            'ex':0,
            'key':'',
            'pageIndex':1,
            'pageSize':8,
            'isPaging':true
        },
        dataType: 'json',   //一个域名下用json  异步请求用jsonp
        beforeSend:function(){
            console.log('加载前');
        },
        success:function(data){
            var newDataDown = data;
            console.log(newDataDown,newDataDown.data.code);
            var str = '';
            $.each(newDataDown.data.info,function (key,val){
                str +='<a href="/H5/home.html?uid=' + val.id + '&osType='+ osType +'"><img src="' + val.avatar + '"><span><em>' + val.nums +'人</em><b class="cenbuju-cen">' + val.user_nicename+ '</b></span></a>';
            });
            $(".cenbuju").html(str);

        },
        error:function(){
            console.log('出错');
        }
    });

});


