    function GetQueryString(name){
         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
         var r = window.location.search.substr(1).match(reg);
         if(r!=null)return  unescape(r[2]); return null;
    }
$(function(){
    var dengluAnnA = $('.denglu-ann a');
    var faSong = $('.fasong');
    var daoJiShi = $('.daojishi');
    var daoJiShiI = $('.daojishi i');
    var shouJiHao = $('.shoujihao');
    var daoJiShiIHtml = $('.daojishi i').html();
    var nameInputSpan = $('.name-input span');
    var huoquAnnA = $('.huoqu-ann a');
    var tishiAbcd = $('.tishi-abcd');
    var tishiAbCenA = $('.tishi-ab-cen a');
    var yanZhengMa = $('.yanzhengma');
    var wangluoNo = $('.wangluo-no');
    var yanzhengNo = $('.yanzheng-no');
    var fasongNo = $('.fasong-no');
    var tishiDtSpan = $('.tishi-dt span');

    var newData = null;



    faSong.on('touchstart',function(){
        var nameInputValue = $('.shoujihao').get(0).value;

        if(nameInputValue.length === 11){

            $.ajax({
                type:'GET',
                url: 'http://bs.51rebo.cn/?service=User.GetCode',
                data: {
                    'mobile':nameInputValue
                },
                dataType: 'json',   //一个域名下用json  异步请求用jsonp
                beforeSend:function(){
                    console.log('加载前');
                },
                success:function(data){
                    newData = data;
                    console.log(newData,newData.data.code);
                    if( newData.data.code === 2){
                        Mtishi(fasongNo);
                        newData=null;
                    }else{
                        fasongyanzhengma();
                    }
                },
                error:function(){
                    Mtishi(wangluoNo);
                }
            });
        }else{
            nameInputSpan.removeClass('none');
        }
    });

    //判断登陆是否是手机号
    $('.shoujihao').on('blur',function(){
        var phone = $(this).val();
        var partten = /^1[3,5,8]\d{9}$/;
          if(partten.test(phone))
          {
               //alert('是手机号码');
               $(".denglu-ann a").removeClass('disabled');
               $(".name-input span").addClass('none');
               var id = 'tixianye.html?uid=' + '1000000007';
               window.location.href = id;
          }
          else
          {
               $(".name-input span").removeClass('none');
               $(".denglu-ann a").addClass('disabled');
               return false;
          }
    })

    dengluAnnA.on('touchstart',function(){
        var yanZhengMaValue = yanZhengMa.get(0).value;
        var nameInputValue = $('.shoujihao').get(0).value;

        $.ajax({
            type:'GET',
            url: 'http://bs.51rebo.cn/?service=User.UserLogin',
            data: {
                'user_login':nameInputValue,
                'code':yanZhengMaValue
            },
            dataType: 'json',   //一个域名下用json  异步请求用jsonp
            beforeSend:function(){
            console.log('加载前');
            },
            success:function(data){
                newData = data;
                console.log(newData,newData.data.code);
                if( newData.data.code === 1){
                    login(1);
                }else if(newData.data.code === 2){
                    login(2);
                }else if(newData.data.code === 3){
                    login(3);
                }else{
                    window.location.href = 'tixianye.html?uid=' + newData.data.info.id;
                    //window.location.href = 'tijiao-ok.html';
                }
            },
            error:function(){
                Mtishi(wangluoNo);
            }
        })
        // if(newData === null || (newData.data.info != yanZhengMaValue)){
        //     Mtishi(yanzhengNo);
        // }else{
        //     window.location.href = 'tijiao-ok.html';
        //     console.log(111);
        // }
    });

    function fasongyanzhengma(){  //倒计时
        faSong.addClass('none');
        daoJiShi.removeClass('none');
        var c = Number(daoJiShiIHtml);
        var daoJiShiTime = setInterval(function(){
            if(c>0){
                c--;
                daoJiShiI.html(c);
            }else{
                clearInterval(daoJiShiTime);
                faSong.removeClass('none');
                daoJiShi.addClass('none');
            }
        },1000)
    }

    shouJiHao.on('touchstart',function(){
        nameInputSpan.addClass('none');
    });

    huoquAnnA.on('touchstart',function(){
        tishiAbcd.removeClass('none');
    });

    tishiAbCenA.on('touchstart',function(){
        tishiAbcd.addClass('none');
    });

    function Mtishi(abc){
        tishiDtSpan.addClass('none');
        abc.removeClass('none');
        var yanzhengTime = setTimeout(function(){
            abc.addClass('none');
        },3000);
    }

    function login(a){
        if(a == 1){
            $('.login-dt').html('验证码错误！');
        }else if(a == 2){
            $('.login-dt').html('用户账号被禁用！');
        }else if(a == 3){
            $('.login-dt').html('短信手机和登陆手机不一致！');
        }
        $('.login-dt').show();
        setTimeout(function(){
            $('.login-dt').hide();
        },3000);
    }



    //上传身份证图片

    // $('#upload_card').on('touchstart',function(){
    //     $("#fileToUpload").trigger('click');
    // })
    // $('#fileToUpload').on('click',function(){
    //     alert('1');
    // });
    // $('#fileToUpload').live('change', function() {
    //     //$.ajaxFileUpload(config);
    //     // alert('1');
    //     var Uid = GetQueryString('uid');
    //     var token = GetQueryString('token');
    //     $.ajaxFileUpload({
    //         url:'http://bs.51rebo.cn/?service=User.Upload',
    //         secureuri:false,
    //         fileElementId:'fileToUpload',//file标签的id
    //         dataType: 'json',//返回数据的类型
    //         data:{
    //             uid:Uid,
    //             token:token,
    //             type:'1'
    //         },//一同上传的数据
    //         success: function (data, status) {
    //             // console.log(data);
    //             // alert('2');
    //             var newData = data;
    //             if(newData.data.code !== 0){
    //                 alert(newData.msg);
    //             }
    //             var str = '<img src="' + newData.data.info + '" class="uploadtu">';
    //             $('#upload_card').html(str);
    //          },
    //          error:function(data, status, e){
    //             alert(data);
    //          }
    //      })
    //     $("#fileToUpload").replaceWith($("#fileToUpload").clone(true));
    // })


    //上传手持图片
    // $('#upload_hand').on('touchstart',function(){
    //     $("#fileToUpload2").trigger('click');
    // })
    // $('#fileToUpload2').live('change', function() {
    //     var Uid = GetQueryString('uid');
    //     var token = GetQueryString('token');
    //     $.ajaxFileUpload({
    //         url:'http://bs.51rebo.cn/?service=User.Upload',
    //         secureuri:false,
    //         fileElementId:'fileToUpload2',//file标签的id
    //         dataType: 'json',//返回数据的类型
    //         data:{
    //             uid:Uid,
    //             token:token,
    //             type:'1'
    //         },//一同上传的数据
    //         success: function (data, status) {
    //             // console.log(data);
    //             // alert(data);
    //             var newData = data;
    //             if(newData.data.code !== 0){
    //                 alert(newData.data.msg);
    //             }
    //             var str = '<img src="' + newData.data.info + '" class="uploadtu">';
    //             $('#upload_hand').html(str);
    //          },
    //          error:function(data, status ,e){
    //             alert(e);
    //          }
    //      })
    //     $("#fileToUpload2").replaceWith($("#fileToUpload2").clone(true));
    // })

    //实名认证
    var tishiInput = $('.tishi-input');
    var tishiInputSpan = $('.tishi-input span');
    var reg = /^[\u4E00-\u9FA5]+$/;
    $(".smrzbtn a").on('touchstart',function(){
        if($('.smrzbtn').hasClass('active')){
            //var uid = GetQueryString('uid');
	    var uid = $("input[name=Uid]").val();
            var name = $('#smrz_name').val();
            var phone = $('#smrz_phone').val();
            var idcard = $('#smrz_idcard').val();
            var photo1 = $('#upload_card .uploadtu').attr('src');
            var photo2 = $('#upload_hand .uploadtu').attr('src');
            var photo = photo1 + ',' + photo2;
            if(photo1 == null){
                photo = photo2;
            }else if(photo2 == null){
                photo == '';
            }
            if(photo2 == null){
                photo = photo1;
            }

            $.ajax({
                type:'GET',
                url: '/appapi/?service=User.AddAuthentication',
                data: {
                    'userid':uid,
                    'name':name,
                    'idcard':idcard,
                    'phone':phone,
                    'photo':photo
                },
                dataType: 'json',   //一个域名下用json  异步请求用jsonp
                beforeSend:function(){
                    console.log('加载前');
                },
                success:function(data){
                    var newData = data;
                    console.log(newData,newData.data.code);
                    if(newData.data.code !== 0){
                        alert(newData.data.msg);
                    }else{
			window.location.href = "tijiao-ok2.html";
		    }
                },
                error:function(){
                    Mtishi(wangluoNo);
                }
            })
        }
    })



















});


