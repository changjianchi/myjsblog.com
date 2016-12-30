$(function(){
    function fun(){
        var winHeight = $(window).height();
        $('html').css('font-size',winHeight / 9.25 + 'px');
    }
    fun();
    // $(window).on('resize',function(){
    //     fun();
    // });
    var Cen = $('.cen'),
        Cena = $('.cena'),
        Dia = $('.dia tr td span'),
        Sd = 800; 
    $(document).bind('mousewheel', function(e,i) {
        var cb = $('.dia tr td span.active').index();
        if(!Cen.is(":animated")){
            if(i > 0){
                cb<=0?cb=0:cb--;
            }else{
                cb>=Cena.length-1?cb=0:cb++;
            }
            Dia.eq(cb).trigger('click');
        }
    });
    Dia.on('click',function(e){
        Cen.stop(true).animate({
            'top':'-'+$(this).index()*100+'%'
        },Sd);
        Dia.removeClass('active');
        $(this).addClass('active');
        
    });
    Dia.eq(0).trigger('click');
    
    //start
    var aboutTopBjImg = $('.about-top-bj-img');
    aboutTopBjImg.animate({
        'top':'0',
        'height':'100%'
    },1300);


    //about


    var animateA = $('.animate-a');
    var winHeight = $(window).height();
    var aniC = 0;

    $(window).on('scroll',function(){
        AnimateA();
    });

    AnimateA();

    function AnimateA(){
        var winTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        $('.animate-a').each(function(){
            var thTop = $(this).offset().top;
            var This = $(this);
            if(winTop > thTop - winHeight){
                setTimeout(function(){
                    Animate(This);
                },aniC*300);
                if(This.hasClass('shuzi-deijia')){
                    var ThisMr = This.find('b').html();
                    setTimeout(function(){
                        shuzidiejia(This,ThisMr,58);
                    },(aniC+3)*300);
                    This.find('b').html(0);
                }
                aniC++;
                $(this).hasClass('ani-last')?aniC = 0:aniC;
                $(this).removeClass('animate-a');
            }
            
        });
    }

    function Animate(Name){ //淡入淡出
        Name.animate({
            'top':'0px',
            'left':'0px',
            'opacity':'1',
            'filter':'alpha(100)'
        },1000);
    }

    function shuzidiejia(a,s,b){ //数字叠加
        var a = a;
        var aHtml = Number(s);
        a.find('b').html(0);
        var b = parseInt(aHtml/b);
        b<=0?b=1:b;
        var rHtml = 0;
        var aHtmlTime = setInterval(function(){
            if(rHtml < aHtml){
                a.find('b').html(rHtml);
                rHtml = rHtml + b;
            }else{
                aHtml = format_number(aHtml);
                a.find('b').html(aHtml);
                clearInterval(aHtmlTime);
            }
        }, 8);
    }

    function format_number(n){  
        var b=parseInt(n).toString();  
        var len=b.length;  
        if(len<=3){return b;}  
        var r=len%3;  
        return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");  
    } 

});