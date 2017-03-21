$(function(){
    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 6.4 + 'px');
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });
// 自适应 end

    var body = $('body');
    var indList = $('.ind-list');
    var menu = $('.menu');
    var topRight = $('.top_right');
    var menuClose =$('.menu_close');
    var navList = $('.nav_list');
    var jinZhi = 1;

    //toTop-返回顶部
    var toTop = $('.totop');
    $(window).on('scroll',function(){
        navTopA();
    });

    function navTopA(){
        var bodyTop = body.scrollTop();
        if(bodyTop>500){
            toTop.css('display','block');
        }else{
            toTop.css('display','none');
        }
    }
    toTop.on('click',function(){
        body.animate({scrollTop:0},300);
    });

    //超出隐藏

    //index city
    var city = $('.city');
    var cityA = city.find('a');
    var cityShow = $('.city_show');
    var cityShowSpan = cityShow.find('span');
    cityShow.on('touchstart',function(){
        if(cityShow.hasClass('active')){
            allClose();
        }else{
            allClose();
            t3d(city,0,0);
            addc(cityShow,'active');
            alladd();
        }
    });
    cityA.on('touchstart',function(){
        cityShowSpan.html($(this).html());
        allClose();
    });
        //index2 city
        var cityShow2 = $('.city_show2');
        var cityShow2Span = cityShow2.find('span');
        var city2 = $('.city2');
        var city2A = city2.find('a');
        cityShow2.on('touchstart',function(){
            if(cityShow2.hasClass('active')){
                allClose();
            }else{
                allClose();
                t3d(city2,0,0);
                addc(cityShow2,'active');
                alladd();
            }
        });
        city2A.on('touchstart',function(){
            cityShow2Span.html($(this).html());
            allClose();
        });

    //searsh
    var search = $('.search');
    var searchNameUlLi = $('.search_name ul li');
    var cotSearchPInput = $('.cot_search p input');
    var searchBtn = $('.search_btn');
    var cotOff = $('#cot_off');
    searchBtn.on('touchstart',function(){
        allClose();
        t3d(search,0,0);
        alladd();
    });
    searchNameUlLi.on('click',function(){
        cotSearchPInput.val($(this).find('a').html());
    });
    cotOff.on('click',function(){
        cotSearchPInput.val(null);
    });

        //searsh herf
    var cotSearchEm = $('.cot_search em');
    cotSearchEm.on('click',function(){
        var inVal = cotSearchPInput.val();
        if(inVal === ''){
            window.location.href = 'SouSuo-No.html'; 
        }else{
            window.location.href = 'SouSuo-Yes.html'; 
        }
    });

    //menu
    var aside = $('#aside');
    menu.on('touchstart',function(){
        t3d(aside,0,0);
        alladd();
    });

    //my 切换
    var centerSpan = $('.centerSpan');
    centerSpan.on('touchstart',function(){
        var thInd = $(this).index();
        addc(indList,'none');
        remc(indList.eq(thInd),'none');
        remc(centerSpan.find('span'),'active');
        addc($(this).find('span'),'active');
    });

    //close
    menuClose.on('touchstart',function(){
        allClose();
    });

    //list-clear
    var listClear = $('.list-clear');
    listClear.on('click',function(){
        if(confirm('确定清除？') == false){return false;}
        if($(this).parents('.ind-list').find('b').length == 1){
            $(this).parents('.ind-list').find('.myIndent').css('display','block');
        }
        $(this).parents('b').remove();
    });

    //订单为空
    indList.each(function(){
        $(this).find('b').length==0?$(this).find('.myIndent').css('display','block'):$(this);
    });

    //取消订单
    var clearMeAbout = $('.clear-me-about');
    var state = $('.state');
    clearMeAbout.on('touchstart',function(){
        if(confirm('是否取消预定？') == false){return false;}
        $(this).remove();
        state.html('已关闭');
    });

    //用户协议
    var zhifuXieyiB = $('.zhifu-xieyi b');
    var zhifuXieyiI = $('.zhifu-xieyi i');
    var yonghuxieyi = $('.yonghuxieyi');
    var textClose = $('.text-close');
    zhifuXieyiB.on('touchstart',function(){
        $(this).hasClass('active')?remc($(this),'active'):addc($(this),'active');
    });
    zhifuXieyiI.on('touchstart',function(){
        addc(zhifuXieyiB,'active');
        addc(yonghuxieyi,'active');
    });
    textClose.on('touchstart',function(){
        remc($(this).parent(),'active');
    });

    //在线支付
    var zaixianzhifu = $('.zaixianzhifu');
    zaixianzhifu.on('touchstart',function(){
        var zhifuXieyiB = $('.zhifu-xieyi b');
        if(!zhifuXieyiB.hasClass('active')){alert('请先阅读并同意用户协议');return false;}
        window.location.href = 'Me-zhifu.html';
    });

    //支付方式切换
    var meZhifuXuanzeEm = $('.me-zhifu-xuanze em');
    meZhifuXuanzeEm.on('touchstart',function(){
        remc(meZhifuXuanzeEm,'active');
        addc($(this),'active');
    });

    //滑动禁制 jinZhi
    document.addEventListener("touchmove",function(e){
        if(jinZhi==0){
            e.preventDefault();
            e.stopPropagation();
        }
    },false);

    //index3 赞 收藏
    var topSc = $('.top_sc');
    var xqTishi = $('.xq_tishi');
    var dianzan = $('.dianzan');
    var dianzanHtml = Number(dianzan.html());
    topSc.on('touchstart',function(){
        if($(this).hasClass('active')){
            remc($(this),'active');
            textAppT('已取消收藏')
        }else{
            addc($(this),'active');
            textAppT('已收藏')
        }
    });
    dianzan.on('touchstart',function(){
        if($(this).hasClass('active')){
            remc($(this),'active');
            textAppT('已取消赞');
            $(this).html(dianzanHtml-1);
        }else{
            addc($(this),'active');
            textAppT('赞');
            $(this).html(dianzanHtml+1);
        }
    });
    function textAppT(a){
        xqTishi.html('');
        xqTishi.append('<span>'+a+'</span>');
    }

    //电子酒单
    var dianzijiudanTc = $('.dianzijiudan-tc');
    var dianzijiudanT = $('.dianzijiudan-t');
    dianzijiudanTc.on('click',function(){
        addc(dianzijiudanT,'active');
        addc(topSc,'none');
        remc(menuClose,'none');
    });


    //Share
    function alladd(){
        jinZhi = 0;
        remc(menuClose,'none');
        addc(menu,'none');
        addc(searchBtn,'none');
    }

    function allClose(){
        t3d(city,0,'-100%');
        t3d(city2,0,'-100%');
        t3d(search,0,'-100%');
        t3d(aside,'-101%',0);
        remc(cityShow,'active');
        remc(cityShow2,'active');
        remc(menu,'none');
        remc(topRight,'none');
        remc(searchBtn,'none');
        addc(menuClose,'none');
        jinZhi = 1;
        remc(dianzijiudanT,'active');
        remc(topSc,'none');
    }
    
    function addc(a,b){return a.addClass(b)}
    function remc(a,b){return a.removeClass(b)}
    function t3d(name,x,y){return name.css({'transform':'translate3d('+x+', '+y+', 0)'})};

});