$(function(){
    var windowHeight = $(window).height();
    var imgc = $('.imgc');
    var body = $('body');
    var jiaruCenTop = $('.jiaru-cen').offset().top;

    var diannao = $('.diannao');
    var taideng = $('.taideng');
    var shubiao = $('.shubiao');
    var zhuozi = $('.zhuozi');
    var pingban = $('.pingban');
    var jianpan = $('.jianpan');

    var jiaruBanner = $('.jiaru-banner');
    var jiaruBannerAfter = $('.jiaru-banner-after');
    var c = 0;

    $(window).on('scroll',function(){
        var bodyTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        imgc.each(function(){
            var thisTop = $(this).offset().top;
            if(thisTop-windowHeight<bodyTop){
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
        });
        if(bodyTop>10){
            if(!body.hasClass('active')){
                body.animate({
                    scrollTop:jiaruCenTop-70+'px'
                },300);
                body.addClass('active');
            }
        }else{
            body.removeClass('active');
            if(!jiaruBannerAfter.hasClass('active')){
                doani();
            }
        }
        console.log(bodyTop)
    });

    jiaruBannerAfter.on('mouseover',function(a){
        if(!$(this).hasClass('active')){
            doani();
        }
    });

    imgc.each(function(){
        var thisTop = $(this).offset().top;
        if(thisTop-windowHeight>0){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });

    function acre(a,b){
        a.addClass(b);
        setTimeout(function(){
            a.removeClass(b);
        },2500);
    }

    function doani(){
        acre(diannao,'bani1');
        acre(taideng,'bani2');
        acre(shubiao,'bani3');
        acre(zhuozi,'bani4');
        acre(pingban,'bani5');
        acre(jianpan,'bani6');
        acre(jiaruBannerAfter,'active');
    }
    doani();

    var divi = $('.divi');
    var ca = null;
    setInterval(function(){
        if($('.img1').hasClass('active')){
            ca++;
            ca%=$('.imgc.active').length;
            imgc.removeClass('imga');
            divi.removeClass('active');
            imgc.eq(ca).addClass('imga');
            divi.eq(ca).addClass('active');
        }
    },1000)
    
});