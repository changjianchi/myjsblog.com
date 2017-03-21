$(function(){
    var inputgr = $('.input_group');
    var inputgrtop = inputgr.offset().top;
    var sub_btn = $('.sub_btn').offset().top;
    $(window).on('scroll',function(){
        cbd();
    });
    cbd();
    function cbd(){
        var wintop = document.body.scrollTop;
        if(wintop >= inputgrtop - $(window).height() + 50){
         inputgr.animate({'left':'0','opacity':'1','filter':'alpha(opacity=100)'},350);
        }
        if(wintop >= sub_btn - $(window).height() + 50){
         $('.sub_btn').animate({'top':'0','opacity':'1','filter':'alpha(opacity=100)'},350);
        }
    }
    var banzhong = $('.ban-zhong ul li');
    var ci = 0;
    
    var bzhonge = setInterval(function(){
        if(ci < banzhong.length){
            banzhong.eq(ci).animate({'left':'0','opacity':'1','filter':'alpha(opacity=100)'},600);
            ci++;
            console.log(ci)
        }else{
            clearInterval(bzhonge);
        }
    },200);
        
    
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

