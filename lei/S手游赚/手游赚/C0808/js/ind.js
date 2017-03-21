$(function(){
    
    function FunWindow(){
        var winWidth = $(window).width();
        if(winWidth > 720){
            $('html').css('font-size',winWidth / 22 + 'px');
        }
    }
    $(window).on('resize',function(){
        FunWindow();
    });

    var Cen = $('.cen'),
        Cena = $('.cena'),
        diaz = $('.dia'),
        Dia = $('.dia tr td span');

    Cen.bind('mousewheel', function(e,i) {
        if(diaz.hasClass('dia-ani')){
            var cb = $('.dia tr td span.active').index();
            if(!Cen.is(':animated')){
                if(i > 0){
                    cb<=0?cb=0:cb--;
                }else{
                    cb>=Cena.length-1?cb=0:cb++;
                }
                Dia.eq(cb).trigger('click');
            }
        }
    });
        
//And
    var sp = 200,
        Sd = 300;
    
    //one-cen
    var oneXiazai = $('.one-xiazai');
    var oneJieshao = $('.one-jieshao');
    var appGame = $('.app-game');
    var erweima = $('.erweima');
    var dipanSpan = $('.dipan span').eq(0);
    //two-cen
    var cen2bt = $('.cen2bt');
    var dianhua2 = $('.dianhua2');
    var hongbao2 = $('.hongbao2');
    var ka2 = $('.ka2');
    //three-cen
    var cen3bt = $('.cen3bt');
    var chaoren = $('.chaoren');
    var weimu = $('.weimu');
    //four-cen
    var cen4bt = $('.cen4bt');
    var zhujiao = $('.zhujiao');
    var app41 = $('.app4-1');
    var app42 = $('.app4-2');
    var app43 = $('.app4-3');
    //five-cen
    var erweima5 = $('.erweima5');
    var cen5bt = $('.cen5bt');
    var sj5 = $('.sj5');
    var lianxiSpanHoverI = $('.lianxi-span-hover i');
    var lianxiSpanDi = $('.lianxi-span-di');
    var linxiandB = $('.linxiand b');
    var lianxiSpanDing = $('.lianxi-span-ding');
    var lianxiHover = $('.lianxi-hover');
    var linxi = $('.linxi');
    var chaju = $('.chaju');

//右侧导航
    Dia.on('click',function(e){
        var thInd = $(this).index();
        Cen.css('top','-'+thInd*100+'%');
        Dia.removeClass('active');
        $(this).addClass('active');
        oneAni(thInd);
    });
    Dia.eq(0).trigger('click');

    function oneAni(a){
        // Ani(diaz,'dia-ani',sp*9);
        if(a === 0){
            Ani(erweima,'zuoyou-erweima',sp*1);
            Ani(oneJieshao,'bottom-ann',sp*3);
            Ani(oneXiazai,'bottom-ann',sp*4);
            Ani(appGame,'app-tan',sp*6);
        }else if(a === 1){
            Ani(cen2bt,'cen2bt-ani',sp*1);
            Ani(dianhua2,'shouji2-hua',sp*3);
            Ani(hongbao2,'hongbao2-hua',sp*4);
            Ani(ka2,'ka2-hua',sp*5);
        }else if(a === 2){
            Ani(cen3bt,'cen3bt-ani',sp*1);
            Ani(chaoren,'chaoren-ani',sp*3);
            Ani(weimu,'weimu-ani',sp*3.5);
        }else if(a === 3){
            Ani(cen4bt,'cen3bt-ani',sp*1);
            Ani(zhujiao,'zhujiao-ani',sp*3);
            Ani(app41,'app41-ani',sp*5);
            Ani(app42,'app42-ani',sp*5.6);
            Ani(app43,'app43-ani',sp*6);
        }else if(a === 4){
            linxiandB.eq(0).trigger('mouseover');
            Ani(erweima5,'zuoyou-erweima5',sp*4);
            Ani(chaju,'zuoyou-erweima5',sp*4);
            Ani(sj5,'sj5-ani',sp*1);
            Ani(cen5bt,'cen5bt-ani',sp*2);
            Ani(linxi,'linxi-ani',sp*5);
            Ani(lianxiHover,'lianxi-hover-ani',sp*6);
            Ani(linxiandB.eq(2),'qqhao-ani',sp*6);
            Ani(linxiandB.eq(1),'qqhao-ani',sp*6.5);
            Ani(linxiandB.eq(0),'qqhao-ani',sp*7);
            Ani(linxiandB.eq(2),'active',sp*6.5);
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

    Ani(dipanSpan,'dipan-bowen2',2000*0.1);

    function Ani(a,b,c){
        a.removeClass(b);
        var oneAni = setTimeout(function(){
            a.addClass(b);
        },c);
    }

    linxiandB.on('mouseover',function(){
        var thInd = $(this).index();
        dig(thInd);
        linxiandB.removeClass('active');
        $(this).addClass('active');
    });
    
    function dig(a){
        lianxiSpanDi.width(lianxiSpanHoverI.eq(a).width()+18+'px');
        lianxiSpanDi.css('left',a*2+1+'rem');
        lianxiSpanDing.width(lianxiSpanHoverI.eq(a).width()+18+'px');
        lianxiSpanDing.css('left',a*2+1+'rem');
        lianxiSpanHoverI.removeClass('lianxiSpanHoverI-ani');
        lianxiSpanHoverI.eq(a).addClass('lianxiSpanHoverI-ani');
    }
    dig(0);

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

});