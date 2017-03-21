$(function(){
    var toper = $('.toper');
    var topertop = toper.offset().top;
    $(window).on('scroll',function(){
        var wintop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        if(wintop >= topertop){
         toper.stop(true).css({'position':'fixed'});
         $('.vipvid').css({'top':'-0px'});
        }else{
         $('.vipvid').css({'top':'-17px'});
         toper.stop(true).css({'position':'relative'});
        }
    });
    
    var toperc = $('.toperc');
    toperc.append('<i></i>')
    var toperci = $('.toperc i');
    toperci.css({
        width:'0'
    });
    var ziyex = $('.ziyex');
    $(window).on('scroll',function(){
        var wintop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        if(wintop < topertop - 85){
                 toperci.stop(true).animate({'width':0},300);
                 $('.toperc li a').css('color','#666');
            }
        ziyex.each(function(i,n){
            var ziyextop = $(this).offset().top;
            var ziyextophei = $(this).height();
            var ziyexli = $('.toperc li').eq(i).position().left;
            var ziyexliwid = $('.toperc li').eq(i).innerWidth();
            console.log(ziyexliwid)
            if(wintop >= ziyextop - 85){
                toperci.stop(true).animate({'width':ziyexliwid,'left':ziyexli},300);
                $('.toperc li a').css('color','#666');
                $('.toperc li a').eq(i).css('color','#f1b629');
            }else if(wintop > ziyextop + ziyextophei - 85){
                 return false;
            }
        });
    });
    $('.toperc').on('click','li',function(){
        $('html').stop(true).animate({scrollTop:ziyex.eq($(this).index()).offset().top-80+'px'},1000);
        $('body').stop(true).animate({scrollTop:ziyex.eq($(this).index()).offset().top-80+'px'},1000);
        console.log(1);
    });
    
    // $(window).on('scroll',function(){
    //     var wintop = document.body.scrollTop,
    //         Otop = $('.top').offset().top+wintop;
    //     top.css('background-position','50% '+Otop/2+'px');
    //     if(wintop > 150){
    //         nav.stop(true).animate({opacity:'1',filter:'alpha(opacity=100)'},50);
    //     }else{
    //         nav.stop(true).animate({opacity:'0',filter:'alpha(opacity=1)'},50);
    //     }
    // });
});

