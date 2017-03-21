$(function(){
    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 7.5 + 'px');
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });
//菜单；
    var Menu = $('.menu');
    Menu.click(function(){
        if($(this).next().hasClass('none')){
            $(this).next().removeClass('none');
        }else{
            $(this).next().addClass('none');
        }
    });
//top
    var Totop = $('.totop');
    Totop.click(function(){
        $('body').animate({'scrollTop':0},300);
    });
//clos app
    var Appc = $('.xapp i');
    Appc.click(function(){
        $(this).parent().remove();
    });

//kefu
    var Cen = $('.cen');
    var Cenbt = $('.Aoe');
    var Kefu = $('.kefu');
    var winheight = $(window).height();
    var navheight = $('.nav').height();
    var Cenbtheight = $('.cenbt').height();
    var body = $('body');
    $(window).on('scroll',function(){
        var wintop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        if (wintop > 500){
            Kefu.animate({'left':'6.5rem'},300);
        }else{
            Kefu.stop(true).animate({'left':'100%'},300);
        }
        
        // if(parwint > cen1top - navheight){
        //     bodyd();
        //     console.log(3333);
        // }
    });
//cenbt
    var vid = $('.vid');
    var video = $('.video');
    var viddiv = $('.video div');
    var videok = $('.video video');
    vid.click(function(){
        video.removeClass('none');
        videok.get(0).play();
    });
    viddiv.click(function(){
        video.addClass('none');
        videok.get(0).pause();
    });
    $('body').on('touchmove',function(){
        video.addClass('none');
        videok.get(0).pause();
    });
// top t 

    
    


});
        
