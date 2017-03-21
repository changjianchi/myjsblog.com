$(function(){
    function GetQueryString(name){
         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
         var r = window.location.search.substr(1).match(reg);
         if(r!=null)return  unescape(r[2]); return null;
    }

    var Uid = GetQueryString('uid');
    var newData = null;
    var tixianjl = $(".huanzhanghu span a").attr('href');
    var tixianjl = tixianjl + '?uid=' + Uid;
        $(".huanzhanghu span a").attr('href',tixianjl);
    //console.log(Uid)

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
            var newData = data;
            //console.log(newData,newData.data.code,newData.data.info.id);
            $(".duihuan-t img").attr('src',newData.data.info.avatar);
            $(".duihuan-t p").html(newData.data.info.user_nicename);
            $(".duihuan-t em").html('热播号:' + Uid);
            $(".rebi-yue p").html(newData.data.info.votes);
            var yue = Number(newData.data.info.votes) / 20;
            $(".rebi-yue2 p").html(yue);

            console.log(newData)

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

    //提现热豆实时监控
    document.getElementById("tx_redou").oninput = function() {tx_redou()};

    function tx_redou() {
        var redou = $("#tx_redou").val();
        $(".rebi-yue2 p").html(redou/20);
    }

    var youxiangYz =  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var xingmingYz = /^[\u4E00-\u9FA5]+$/;
    var shoujiYz = /^1[3|4|5|7|8][0-9]{9}$/;
    var shuziYz = /^[0-9]*$/;

    //提现申请页面
    $('.tixianbtn a').on('touchstart',function(){
        if($('.tixianbtn').hasClass('active')){
            var id = $('.duihuan-t em').text();
            var id = id.substr(4);
            var redou = $('#tx_redou').get(0).value;
            var money = redou / 20;
            var account = $('#tx_account').get(0).value;
            var name = $('#tx_name').get(0).value;
            var redouP = $(".rebi-yue p").html();
            console.log(1)

            if(!shuziYz.test(redou) || redouP < redou || redou == ''){
                alert('热豆输入错误');
                return false;
            }
            if(!shoujiYz.test(account) && !youxiangYz.test(account)){
                alert('支付宝账号错误');
                return false;
            }
            if(!xingmingYz.test(name)){
                alert('姓名错误');
                return false;
            }

            $.ajax({
                type:'GET',
                url: 'http://bs.51rebo.cn/?service=User.UserCashH5',
                data: {
                    'uid':id,
                    'money':money,
                    'account':account,
                    'name':name
                },
                dataType: 'json',   //一个域名下用json  异步请求用jsonp
                beforeSend:function(){
                console.log('加载前');
                },
                success:function(data){
                    var newData = data;
                    console.log(newData);
                    if(newData.data.code != 0){
                        alert(newData.data.msg);
                    }else{
                        window.location.href = 'tijiao-ok.html?uid='+ Uid ;
                        console.log(newData.data.code,Uid)
                    }
                },
                error:function(){
                    Mtishi(wangluoNo);
                }
            })
        }
        function tixian(a){
            if(a == 1001){
                $('.tixian-dt').html('用户id无效！');
            }else if(a == 1002){
                $('.tixian-dt').html('提现金额超过当日上限！');
            }else if(a == 1003){
                $('.tixian-dt').html('热豆不足！');
            }else if(a == 1004){
                $('.tixian-dt').html('提现金额错误，最小提现金额1元！');
            }else if(a == 1005){
                $('.tixian-dt').html('三级才可提现！');
            }
            $('.tixian-dt').show();
            setTimeout(function(){
                $('.tixian-dt').hide();
            },3000);
        }
    })
})
