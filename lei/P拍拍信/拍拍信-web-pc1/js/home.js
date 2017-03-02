$(function(){
//导航隐藏、显示
    var Menuh = $('.menu-h em'),
        Menu = $('.menu'),
        Cont = $('.cont'),
        Menuul = $('.menu ul'),
        Menuli = $('.menu ul li'),
        MenuDl = $('.menu ul li dl'),
        Onepx = $('.onepx'),
        Menus = 80,  //速度 li宽度判定
        Wbody = $('body').width();
    function MenuWidth(c){
        Wbody = $('body').width();
        Menu.stop(true).animate({'width':c+'px'},Menus);
        Cont.stop(true).animate({'width':Wbody-c+'px'},Menus);
        Onepx.stop(true).animate({'width':c+'px'},Menus);
    }
    function ContWidth(c){
        Cont.css('width',Wbody-c+'px');
    }
    Menuh.on('click',function(){
        if (Menu.width() < Menus){
            MenuWidth(180);
        }else{
            MenuWidth(48);
        }
    });
    $(window).on('resize',function(){
        if($(window).width() > 1000){
            if (Menu.width() < Menus){
                Cont.css('width',$(window).width()-48+'px');
            }else{
                Cont.css('width',$(window).width()-180+'px');
            }
        contheight();
        }
    });
    Menuul.on('click','li',function(){
        if(!$(this).find('dd').hasClass('hover')){
            $('.menu dd').removeClass('hover');
        } 
        MenuWidth(180);
        if($(this).hasClass('back')){
            Menuli.removeClass('back');
            Menuli.stop(true).animate({'height':'60px'},Menus);
        }else{
            Menuli.removeClass('back');
            $(this).addClass('back');
            Menuli.stop(true).animate({'height':'60px'},Menus);
            var Menudd = $(this).find('dd');
                MenuddH = 0;
            Menudd.each(function(){
                MenuddH += $(this).height();
            });
            $(this).stop(true).animate({'height':60+MenuddH+'px'},Menus);
        }
    });
    // MenuDl.on('click','dd',function(){
    //     $(this).parents('li').removeClass('back');
    //     $(this).parents('ul').find('dd').removeClass('hover');
    //     $(this).addClass('hover');
    // });
    MenuDl.on('mouseover mouseout click','dd',function(e){
        if(e.type === 'mouseover'){
            $(this).parents('ul').find('dd').addClass('hoverc');
            $(this).removeClass('hoverc');
        }else if(e.type === 'click'){
            $(this).parents('li').removeClass('back');
            $(this).removeClass('hoverc');
            $(this).parents('ul').find('dd').removeClass('hover');
            $(this).addClass('hover');
        }else{
            $('.menu dd').removeClass('hoverc');
        }
    });
    //top-top
    var toptop = $('.top-top'),
        topS = 100;
    $(window).on('scroll',function(){
        var bodyTop = $('body').scrollTop();
        if(bodyTop > 300){
            toptop.stop(true).animate({'left':$('body').width()-60+'px'},topS);
        }else{
            toptop.stop(true).animate({'left':'100%'},topS);
        }
    });
    toptop.click(function(){
        $('body').animate({'scrollTop':0}, topS);
        return false;
    });
    function contheight(){
        var Conth = Cont.height(),
            bodyh = $(window).height() - 52;
        if(Conth < bodyh){
            Cont.css('height',bodyh);
        }
    }
    contheight();
//select kuang
    var select_a = $('select'),
        Fselect = $('.fselect');
    select_a.click(function(){
        $(this).addClass('inputc');
    });
    Fselect.click(function(){
        $(this).addClass('inputc');
    });

//错误提示取消
    var inputa = $('.inputa input');
    var inputc = $('.list-q-name input');
    inputa.each(function(){
        if(!$(this).parents('.inputa').hasClass('noinput')){
            var inputb = $(this).parents('.inputa');
            if(!inputa.hasClass('inputno')){
                inputb.css('top','0px');
                inputb.next().css('top','0px');
            }else{
                inputb.css('top','-5px');
                inputb.next().css('top','10px');
            }
        }
    });

    inputa.click(function(){
        $(this).removeClass('inputno');
        $(this).next().html(null);
        var inputa = $(this).parents('.inputa');
        if(!inputa.hasClass('noinput')){
            inputa.find('input').each(function(){
                if($(this).hasClass('inputno')){
                    inputa.css('top','-5px');
                    inputa.next().css('top','10px');
                    return false;
                }else{
                    inputa.css('top','0px');
                    inputa.next().css('top','0px');
                }
            });
        }
    });
    inputc.click(function(){
        $(this).removeClass('inputno');
        $(this).next().html(null);
        var inputa = $(this).parents('.inputa');
        if(!inputa.hasClass('noinput')){
            inputa.find('input').each(function(){
                if($(this).hasClass('inputno')){
                    inputa.css('top','-5px');
                    inputa.next().css('top','10px');
                    return false;
                }else{
                    inputa.css('top','0px');
                    inputa.next().css('top','0px');
                }
            });
        }
    });
    var contbt = $('.cont-bt ul');
    contbt.on('click','li',function(){
        contbt.find('li').removeClass('cont-bt-a');
        $(this).addClass('cont-bt-a');
    });
    $('.ssjl').on('click',function(){
        $('.cont-bt ul li').eq(3).trigger("click");
    });


});