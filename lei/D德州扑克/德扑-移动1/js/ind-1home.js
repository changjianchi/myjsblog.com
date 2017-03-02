$(function(){
    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 7.5 + 'px');
    }
    fun();
    var Totop = $('.totop');
    $(window).on('resize',function(){
        fun();
    });
    $(window).on('scroll',function(){
        var winTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        if(winTop > 500){
            Totop.removeClass('none');
        }else{
            Totop.addClass('none');
        }
    });
//totop
    Totop.on('touchstart',function(){
        $('body').animate({scrollTop:0},300);
    });
//提示页
    var noCol = $('.no-col');
    noCol.on('touchstart',function(){
        $(this).parents('.tan').addClass('none');
    });
//flss
    var listFlssList = $('.list-flss-list');
    var listFlssListA = $('.list-flss-list a');
    var listFlssLi = $('.list-flss-li');
    var listRumen = $('.list-rumen');
    var Rumen = $('.rumen');
    var listJinjie = $('.list-jinjie');
    var Jinjie = $('.jinjie');
    var listFlssTop = $('.list-flss-top');
    Rumen.on('touchstart',function(){
        listRumen.removeClass('none');
        listJinjie.addClass('none');
        listFlssListA.removeClass('active');
        $(this).addClass('active');
    });
    Jinjie.on('touchstart',function(){
        listJinjie.removeClass('none');
        listRumen.addClass('none');
        listFlssListA.removeClass('active');
        $(this).addClass('active');
    });
    listFlssTop.on('touchstart',function(){
        if($(this).hasClass('list-flss-top-active')){
            $(this).removeClass('list-flss-top-active');
            listFlssList.removeClass('none');
        }else{
            $(this).addClass('list-flss-top-active');
            listFlssList.addClass('none');
        }
    });

    var listP3NavUlLi = $('.list-p3-nav ul li');
    var listP3Cen =$('.list-p3-cen');
    listP3NavUlLi.on('touchstart',function(){
        listP3NavUlLi.removeClass('active');
        $(this).addClass('active');
        listP3Cen.addClass('none');
        listP3Cen.eq($(this).index()).removeClass('none');
    });
//联系我们
    var aboutCenSpan = $('.about-cen span');
    var aboutCenEm = $('.about-cen em');
    var aboutLianxi = $('.about-lianxi');
    var aboutLianxiSpan = $('.about-lianxi span');
    var aboutLianxiEm = $('.about-lianxi em');
    aboutLianxiSpan.on('touchstart',function(){
        aboutLianxiSpan.addClass('none');
        aboutCenSpan.addClass('none');
        aboutLianxiEm.removeClass('none');
        aboutCenEm.removeClass('none');
    });
    aboutLianxiEm.on('touchstart',function(){
        aboutLianxiSpan.removeClass('none');
        aboutCenSpan.removeClass('none');
        aboutLianxiEm.addClass('none');
        aboutCenEm.addClass('none');
    });
//价格切换
    var payJiageP = $('.pay-jiage p');
    var payJiageEm = $('.pay-jiage em');
    payJiageP.on('touchstart',function(){
        payJiageEm.removeClass('active');
        $(this).find('em').addClass('active');
    });
//index登录切换
    var dlFdl = $('.dl-fdl');
    var ptDl = $('.pt-dl');
    var ksDl = $('.ks-dl');
    var dlFleft = $('.dl-fleft');
    var dlFright = $('.dl-fright');
    dlFright.on('touchstart',function(){
        dlFleft.removeClass('active');
        dlFright.addClass('active');
        ptDl.removeClass('none');
        ksDl.addClass('none');
    });
    dlFleft.on('touchstart',function(){
        dlFright.removeClass('active');
        dlFleft.addClass('active');
        ksDl.removeClass('none');
        ptDl.addClass('none');
    });
//教练切换
    var jl1c11 = $('.jl1c11');
    var jl1c22 = $('.jl1c22');
    var jl1c1 = $('.jl1c1');
    var jl1c2 = $('.jl1c2');
    jl1c11.on('touchstart',function(){
        jl1c1.removeClass('none');
        jl1c2.addClass('none');
        jl1c22.removeClass('active');
        $(this).addClass('active');
    });
    jl1c22.on('touchstart',function(){
        jl1c2.removeClass('none');
        jl1c1.addClass('none');
        jl1c11.removeClass('active');
        $(this).addClass('active');
    });
});
        
