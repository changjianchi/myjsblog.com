$(function(){
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
    // 
    var fn = $('.lb');
    $.each(fn,function(i,n){
        var oDiv = $(n);
        var oUl = oDiv.find('ul');
        var aLi = oUl.children('li');
        var oBtn = oDiv.children('.lb_btn');
        var aLen = aLi.length;
        var aWid = parseInt(oDiv.width())/4;
        var iTimer = null;
        var iTime = 5000;               // 间隔运动时间
        var speed = 350;                // 运动时间
        var fs = 'easeInOutQuart';      // 运动方式
        var oNum = 3;
        var iNum = 3;
        var aLi1 = $('.lb ul li');
        for(var c=0;c<4;c++){
            oUl.append('<li>'+aLi1.eq(c).html()+'</li>');
            oUl.prepend('<li>'+aLi1.eq(aLi1.length-1-c).html()+'</li>');
        }

        $('.lb ul li').css('width',aWid+'px');
        aLi = oUl.children('li');
        oUl.css({'width':(aWid*aLi.length)+'px','left':-aWid*4+'px'});
        
        oBtn.children('span:first').addClass('active1');
        
        oBtn.children('span').on('click',function(){
            oNum = $(this).index();
            iNum = oNum;
            oUl.stop(true).animate({left:-aWid*(oNum+1)+'px'},{duration:speed,complete:fs});
            $(this).addClass('active1').siblings().removeClass('active1');
        });
        
        var prev = function(){
            oNum--;
            oNum = oNum%aLen;
            iNum--;
            iNum = iNum%(aLen+1);
            
            oUl.stop(true).animate({left:-aWid*(iNum+1)+'px'},{duration:speed,easing:fs,complete:function(){
                if(iNum == -1){
                    oUl.css({'left':-((aWid*aLi.length)-(8*aWid))+'px'});
                    iNum = aLen-1;
                }
            }});
            oBtn.children('span').eq(oNum).addClass('active1').siblings().removeClass('active1');
        }
        
        var next = function(){
            oNum++;
            oNum = oNum%aLen;
            iNum++;
            iNum = iNum%(aLen+1);
            oUl.stop(true).animate({left:-aWid*(iNum+1)+'px'},{duration:speed,easing:fs,complete:function(){
                if(iNum == aLen){
                    oUl.css({'left':-aWid+'px'});
                    iNum = 0;
                }
            }});
            oBtn.children('span').eq(oNum).addClass('active1').siblings().removeClass('active1');
        }
        
        
        oDiv.children('.prev1').click(function(){
            if(!oUl.is(':animated')){
                prev();
            }
        });
        oDiv.children('.next1').click(function(){
            if(!oUl.is(':animated')){
                next();
            }
        });

        fn.mouseover(function(){
            $(this).find('.prev1').stop(true).animate({'left':'-20px','opacity':'1','filter':'alpha(opacity=100)'},300);
            $(this).find('.next1').stop(true).animate({'left':'100%','opacity':'1','filter':'alpha(opacity=100)'},300);
        }).mouseout(function(){
            $(this).find('.prev1').stop(true).animate({'left':'20px','opacity':'0','filter':'alpha(opacity=0)'},300);
            $(this).find('.next1').stop(true).animate({'left':fn.width() - 40 +'px','opacity':'0','filter':'alpha(opacity=0)'},300);
        })

    });

var fn1 = $('.lbc');
$.each(fn1,function(i,n){
    var oDiv = $(n);
    var oUl = oDiv.find('ul');
    var aLi = oUl.children('li');
    var oBtn = oDiv.children('.lb_btn');
    var aLen = aLi.length;
    var bUss = 3;
    var aWid = parseInt(oDiv.width())/bUss;
    var iTimer = null;
    var iTime = 3000;               // 间隔运动时间
    var speed = 600;                // 运动时间
    var fs = 'easeInOutQuart';      // 运动方式
    var oNum = bUss-1;
    var iNum = bUss-1;
    aLi.css('width',aWid+'px');
    var aLi1 = $('.lbc ul li');
    for(var c=0;c<bUss;c++){
        oUl.append('<li>'+aLi1.eq(c).html()+'</li>');
        oUl.prepend('<li>'+aLi1.eq(aLi1.length-1-c).html()+'</li>');
    }

    $('.lbc ul li').css('width',aWid+'px');

    aLi = oUl.children('li');
    oUl.css({'width':(aWid*aLi.length)+'px','left':-aWid*bUss+'px'});
    
    oBtn.children('span:first').addClass('active');
    
    oBtn.children('span').on('click',function(){
        oNum = $(this).index();
        iNum = oNum;
        oUl.stop(true).animate({left:-aWid*(oNum+1)+'px'},{duration:speed,complete:fs});
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    var prev = function(){
        oNum--;
        oNum = oNum%aLen;
        iNum--;
        iNum = iNum%(aLen+1);
        
        oUl.stop(true).animate({left:-aWid*(iNum+1)+'px'},{duration:speed,easing:fs,complete:function(){
            if(iNum == -1){
                oUl.css({'left':-((aWid*aLi.length)-(bUss*2*aWid))+'px'});
                iNum = aLen-1;
            }
        }});
        oBtn.children('span').eq(oNum).addClass('active').siblings().removeClass('active');
    }
    
    var next = function(){
        oNum++;
        oNum = oNum%aLen;
        iNum++;
        iNum = iNum%(aLen+1);
        oUl.stop(true).animate({left:-aWid*(iNum+1)+'px'},{duration:speed,easing:fs,complete:function(){
            if(iNum == aLen){
                oUl.css({'left':-aWid+'px'});
                iNum = 0;
            }
        }});
        oBtn.children('span').eq(oNum).addClass('active').siblings().removeClass('active');
    }
    
    // var setLb = function(){
    //     iTimer = setInterval(function(){
    //         next();
    //     },iTime);
    // }
    // setLb();
    
    oDiv.children('.prev1').click(function(){
        if(!oUl.is(':animated')){
            prev();
        }
    });
    oDiv.children('.next1').click(function(){
        if(!oUl.is(':animated')){
            next();
        }
    });
    fn1.mouseover(function(){
            $(this).find('.prev1').stop(true).animate({'left':'-20px','opacity':'1','filter':'alpha(opacity=100)'},300);
            $(this).find('.next1').stop(true).animate({'left':'100.6%','opacity':'1','filter':'alpha(opacity=100)'},300);
        }).mouseout(function(){
            $(this).find('.prev1').stop(true).animate({'left':'20px','opacity':'0','filter':'alpha(opacity=0)'},300);
            $(this).find('.next1').stop(true).animate({'left':fn.width() - 110 +'px','opacity':'0','filter':'alpha(opacity=0)'},300);
        })
    
    // oDiv.mouseover(function(){
    //     clearInterval(iTimer);
    // }).mouseout(function(){
    //     setLb();
    // })

});
 $('.chanpin2a ul li').on('mouseover mouseout',function(e){
    var c_i = $(this).find('i');
    if(e.type === 'mouseover'){
        c_i.stop(true).animate({'opacity':'1','filter':'alpha(opacity=100)'},500);
    }else{
        c_i.stop(true).animate({'opacity':'0','filter':'alpha(opacity=0)'},500);
    }
 });

 $('.lbc ul li a').on('mouseover mouseout',function(e){
    var a_i = $(this).find('i');
    if(e.type === 'mouseover'){
        a_i.stop(true).animate({'opacity':'1','filter':'alpha(opacity=100)'},500);
    }else{
        a_i.stop(true).animate({'opacity':'0','filter':'alpha(opacity=0)'},500);
    }
 });


    var chanpindl = $('.chanpindl dd');
    var lbinfotop = $('.lb_info').offset().top;
    var chanpin2aem = $('.chanpin2a ul li em');
    var chanpin2atop = $('.chanpin2a').offset().top;
    var chanpinxxp = $('.chanpinxx');
    var chanpimg = $('.chanpin2a img');
    var chanpinlbc = $('.lbc ul li');
    var chanpinlbctop = $('.lbc').offset().top;
    $(window).on('scroll',function(){
        cbdc();
    });
    cbdc();
    function cbdc(){
        var hi = 0,ei = 0,vi = 0;
        var wintop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        if(wintop >= lbinfotop - $(window).height() + 50){
            var zidongg = setInterval(function(){
                if(hi < chanpindl.length){
                    zidon(hi);
                    hi++;
                }else{
                    clearInterval(zidongg);
                }
            },250);
        }
        if(wintop >= chanpinlbctop - $(window).height() + 50){
            var zidongge = setInterval(function(){
                if(vi < chanpindl.length){
                    zidonbc(vi);
                    vi++;
                }else{
                    clearInterval(zidongge);
                }
            },250);
        }
        if(wintop >= chanpin2atop - $(window).height() + 50){
            var zidonge = setInterval(function(){
                if(ei < chanpin2aem.length){
                    chanpin2aem.eq(ei).css({'display':'block'});
                    chanpin2aem.eq(ei).animate({'width':'100%'});
                    ei++;
                }else{
                    clearInterval(zidonge);
                }
            },200);
            chanpimg.animate({'left':'0px','opacity':'1','filter':'alpha(opacity=100)'},600);
        }
        chanpinxxp.each(function(){
            var chanpinxxptop = $(this).offset().top;
            if(wintop >= chanpinxxptop - $(window).height() + 50){
                $(this).animate({'top':'0px','opacity':'1','filter':'alpha(opacity=100)'},1600);
            }
        });
    }
    function zidon(a){
        chanpindl.eq(a).animate({'left':'0px','opacity':'1','filter':'alpha(opacity=100)'},600);
        chanpindl.eq(a-1).children('i').animate({
            'font-size':'47px'
        },200).animate({
                'left':'127px','top':'127px'
        },800);
        chanpindl.eq(a-1).find('b').animate({
             'width':'70px','height':'70px',
             'opacity':'1','filter':'alpha(opacity=100)'
         },200);
    }
    function zidonbc(a){
        chanpinlbc.eq(a).animate({'top':'0px','opacity':'1','filter':'alpha(opacity=100)'},600);
    }
    
    function qishiyx(){
        chanpin2aem.css({'width':0,'display':'none'});
        chanpinlbc.css({'top':'100px','opacity':'0','filter':'alpha(opacity=0)','position':'relative'});
    }
    qishiyx();
});

