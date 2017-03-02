$(function(){
    
    function FunWindow(){
        var winHeight = $(window).height();
        $('html').css('font-size',winHeight / 12.8 + 'px');
    }
    $(window).on('resize',function(){
        FunWindow();
    });

    FunWindow();
    var winHeight = $(window).height();
    $('.zhonge').css('height',winHeight+'px');

    var Cen = $('body'),
        Cena = $('.cena'),
        diaz = $('.dia'),
        yeshu = 0,
        swiperSlide = $('.swiper-slide'),
        xZong = 0,
        Dia = $('.dia tr td span');
        
        

//And
    var sp = 200,
        Sd = 300;

    var upMosImg = $('.up-mos img');
    //one-cen
    var oneXiazai = $('.one-xiazai');
    var oneJieshao = $('.one-jieshao');
    var appGame = $('.cen1t');
    var cen1bt = $('.cen1bt');
    //two-cen
    var cen2bt = $('.cen2bt');
    var dianhua2 = $('.j2-ph');
    var ka2 = $('.j2-ak');
    //three-cen
    var cen3bt = $('.cen3bt');
    var chaoren = $('.chaoren');
    var weimu = $('.weimu');
    //four-cen
    var cen4bt = $('.cen4bt');
    var zhujiao = $('.j4-zhujiao');
    var app41 = $('.j4-1');
    var app42 = $('.j4-2');
    var app43 = $('.j4-3');
    //five-cen
    var erweis = $('.erweis');
    var cen5bt = $('.erweima');
    var lianxiSpanHoverI = $('.lianxi-span-hover i');
    var lianxiSpanDi = $('.lianxi-span-di');
    var linxiandB = $('.linxiand b');
    var lianxiSpanDing = $('.lianxi-span-ding');
    var lianxiHover = $('.lianxi-hover');

    $(window).on('touchend mouseup',function(a){
        // if(a.type === 'touchend'){
        //     swiperSlide.each(function(i){
        //         if(xZong != i){
        //             if($(this).hasClass('swiper-slide-active')){
        //                 xZong = i;
        //                 oneAni(i);
        //             }
        //         }
        //     });
        // }else if(a.type === 'touchend'){
            
        // }
        swiperSlide.each(function(i){
                if(xZong != i){
                    if($(this).hasClass('swiper-slide-active')){
                        xZong = i;
                        oneAni(i);
                    }
                }
            });
    });

    $('.swiper-pagination').on('click',function(){
        swiperSlide.each(function(i){
            if(xZong != i){
                if($(this).hasClass('swiper-slide-active')){
                    xZong = i;
                    oneAni(i);
                }
            }
        });
    });

//右侧导航
    var thi = 0;
    // Dia.on('click',function(e){
    //     // thi = $(this).index();
    //     // Cen.css({
    //     //     'top':'-'+$('.zhonge').eq(thi).position().top+'px',
    //     //     'overflow':'hidden'
    //     // });
    //     Dia.removeClass('active');
    //     $(this).addClass('active');
    //     oneAni(thi);
    //     yeshu = thi;
    // });
    oneAni(0);

    function oneAni(a){
        Ani(diaz,'dia-ani',sp*9);
        // setTimeout(function(){
        //     Cen.css({
        //     'top':'-'+$('.zhonge').eq(thi).position().top+'px',
        //     'overflow':'visible',
        //     'overflow-y':'auto'
        // });
        // },sp*8);
        Ani(upMosImg,'up-mos-img-ani',sp*5);
        if(a === 0){
            Ani(cen1bt,'bt-down',sp*1);
            Ani(oneJieshao,'bottom-ann',sp*3);
            Ani(oneXiazai,'bottom-ann',sp*4);
            Ani(appGame,'app-tan',sp*6);
        }else if(a === 1){
            Ani(cen2bt,'bt-up',sp*1);
            Ani(dianhua2,'j2-ph-ani',sp*3);
            Ani(ka2,'j2-ak-ani',sp*4);
        }else if(a === 2){
            Ani(cen3bt,'bt-down',sp*1);
            Ani(chaoren,'chaoren-ani',sp*3);
            Ani(weimu,'weimu-ani',sp*3.5);
        }else if(a === 3){
            Ani(cen4bt,'bt-up',sp*1);
            Ani(zhujiao,'zhujiao-ani',sp*3);
            Ani(app41,'j4-1-ani',sp*5);
            Ani(app42,'j4-2-ani',sp*5.6);
            Ani(app43,'j4-3-ani',sp*6);
        }else if(a === 4){
            linxiandB.eq(0).trigger('click');
            Ani(cen5bt,'bt-up',sp*1);
            Ani(erweis,'erweis-ani',sp*2);
            Ani(oneJieshao,'bottom-ann',sp*3.5);
            Ani(oneXiazai,'bottom-ann',sp*4.5);
            Ani(lianxiHover,'lianxi-hover-ani',sp*6);
            Ani(linxiandB.eq(2),'qqhao-ani',sp*6);
            Ani(linxiandB.eq(1),'qqhao-ani',sp*6.5);
            Ani(linxiandB.eq(0),'qqhao-ani',sp*7);
            Ani(linxiandB.eq(2),'active',sp*6.5);
            setTimeout(function(){
                upMosImg.removeClass('up-mos-img-ani');
            },sp*5.1);
            setTimeout(function(){
                linxiandB.removeClass('active');
                linxiandB.eq(1).addClass('active');
            },sp*7);
            setTimeout(function(){
                linxiandB.removeClass('active');
                linxiandB.eq(0).addClass('active');
            },sp*7.5);
        }
    }

    function Ani(a,b,c){
        a.removeClass(b);
        var oneAni = setTimeout(function(){
            a.addClass(b);
        },c);
    }

    linxiandB.on('click',function(){
        var thInd = $(this).index();
        dig(thInd);
        linxiandB.removeClass('active');
        $(this).addClass('active');
    });
    
    function dig(a){
        lianxiSpanDi.width(lianxiSpanHoverI.eq(a).width()+18+'px');
        lianxiSpanDi.css('left',a*1.94+0.97+'rem');
        lianxiSpanDing.width(lianxiSpanHoverI.eq(a).width()+18+'px');
        lianxiSpanDing.css('left',a*1.94+0.97+'rem');
        lianxiSpanHoverI.removeClass('lianxiSpanHoverI-ani');
        lianxiSpanHoverI.eq(a).addClass('lianxiSpanHoverI-ani');
    }
    dig(0);

    var Bleft = linxiandB.eq(0).position().left;
    lianxiHover.css('left',Bleft + 'px');

// 视频
    var oneJieshaoA = $('.one-jieshao a');
    var video = $('.video');
    var videoplay = $('.video video');
    var vida = $('.vidcolimg');
    oneJieshaoA.on('click',function(){
        video.removeClass('none');
        videoplay.get(0).load();
        videoplay.get(0).play();
    });
    vida.on('click',function(){
        videoplay.get(0).pause();
        video.addClass('none');
    });

//移动端滑屏
    // var xAnd = null,
    //     yAnd = null,
    //     xyAnd = null,
    //     xyNo = null,
    //     xCtop = null,
    //     xTop = null;
    // $(window).on('touchstart touchend',function(a){
    //     if(diaz.hasClass('dia-ani')){
    //         if(a.type === 'touchstart'){
    //             xyNo = null,
    //             yAnd = a.touches[0].pageY;
    //             xCtop = Cen.position().top;
                
    //             $(this).on('touchmove',function(b){
    //                 xTop = xAnd = Cen.position().top;
    //                 xyAnd = b.touches[0].pageY;
    //                 xyNo = xyAnd-yAnd;
                    
    //             }); //move

    //         }else{
                
    //             $(this).unbind('touchmove');
    //             if(xyNo < -50 || xyNo > 50){
    //                 if(xyNo > 0){
    //                     yeshu--;
    //                 }else{
    //                     yeshu++;
    //                 }
    //                 yeshu %= Dia.length;
    //                 Dia.eq(yeshu).trigger('click');
    //             }else{
    //                 Cen.css('top',xCtop+'px');xCtop
    //             }//xyNo
    //         } //if a.type
    //     }//dia-ani
    // }); //over
    // 

});