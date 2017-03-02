$(function(){
//导航隐藏、显示
    var UserMenuUl = $('.user-menu ul'),
        UserMenuLi = $('.user-menu ul li'),
        UserMenuS = 80,
        UserMenuDl = $('.user-menu ul li dl');
    UserMenuUl.on('click','li',function(){
        if($(this).hasClass('user-back')){
            UserMenuLi.removeClass('user-back');
            UserMenuLi.stop(true).animate({'height':'35px'},UserMenuS);
        }else{
            UserMenuLi.removeClass('user-back');
            $(this).addClass('user-back');
            UserMenuLi.stop(true).animate({'height':'35px'},UserMenuS);
            var Menudd = $(this).find('dd'),
                MenuddH = 0;
            Menudd.each(function(){
                MenuddH += $(this).height();
            });
            $(this).stop(true).animate({'height':35+MenuddH+'px'},UserMenuS);
        }
    });
    UserMenuDl.on('click','dd',function(){
        $(this).parents('li').removeClass('user-back');
    });
//滚动条效果
    var Fselect = $('.fselect'),
        Fsbar = $('.f-s-bar'),
        Fselectz = $('.fselect-z'),
        Fselzul = $('.fselect-z ul'),
        Fselzulli = $('.fselect-z ul li'),
        Fsel_li = $('.fselect-li'),
        Fselli = Fsel_li.height();
    Fselect.on('click',function(){
        if($(this).hasClass('fselecthover')){
            $(this).removeClass('fselecthover');
            $(this).next().css('display','none');
        }else{
            $(this).addClass('fselecthover');
            $(this).next().css('display','block');
        }
    });
    Fsbar.on('mousedown mouseup',function(a){
        if(a.type === 'mousedown'){
            var Fsbx = a.pageY,
                Fsbl = $(this).position().top,
                Fselzultop = $(this).parents('.fselect-z').find('ul').position().top,
                Fselzulheight = $(this).parents('.fselect-z').find('ul').height();
            $(this).on('mousemove',function(e){
                var Fsbr = e.pageY,
                    b = $(this).position().top,
                    c = $(this).parents('.fselect-z').find('ul').position().top,
                    i = Fsbr - Fsbx,
                    n = (i+Fsbl-40)*(Fselzulheight-Fselli)/b;
                if(40 < b && b < 135){
                    $(this).stop(true).css('top',i+Fsbl+'px');
                    Fselzul.css('top','-'+n+'%');
                }else if(40 >= b ){
                    $(this).unbind('mousemove');
                    $(this).css('top',41+'px');
                }else if(b >= 135){
                    $(this).unbind('mousemove');
                    $(this).css('top',134+'px');
                }
                $(this).on('mouseout',function(){
                    $(this).unbind('mousemove');
                });
            });
        }else{
            $(this).unbind('mousemove');
        }
        
    });

//滑轮滑动
    /*Fsel_li.on('mouseover mouseout',function(a){
        var l = $(this).parents('.fselect').find('.f-s-bar'),
            Fsbl = l.position().top,
            Fselzultop = $(this).find('ul').position().top,
            Fselzulheight = $(this).find('ul').height(),
            i = 0;
        if(a.type === 'mouseover'){
            $(this).mousewheel(function(event,del){
                var b = l.position().top,
                    c = $(this).children('ul').position().top,
                    n = (i+Fsbl-40)*(Fselzulheight-Fselli)/b;
                if(40 < b && b < 135){
                    if(del < 0){
                        i++;
                        if(i>95){
                            i = 95;
                        }else if(i<0){
                            i = 0;
                        }
                    }
                    l.css('top',i+Fsbl+'px');
                    $(this).find('ul').css('top','-'+n+'%');
                }else if(40 >= b ){
                    l.css('top',41+'px');
                }else if(b >= 135){
                    l.css('top',134+'px');
                }
                console.log(i)
            });
        }else{
            console.log(3)
        }
    });*/

    Fselzul.on('click','li',function(){
        var thsfse = $(this).parents(Fselectz).prev(),
            thshtml = $(this).html();
        thsfse.find('span').html(thshtml);
        $(this).parents('.fselect-z').css('display','none');
        thsfse.removeClass('fselecthover');
    });
});