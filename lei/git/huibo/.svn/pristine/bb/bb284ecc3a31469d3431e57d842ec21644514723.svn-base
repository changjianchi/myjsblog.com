$(function(){
    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 10.8 + 'px');
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });
// 自适应 end

    //nav
    var huiboNav = $('.huibo-nav');
    var huiboMenu = $('.huibo-menu');
    var huiboMenuA = $('.huibo-menu').find('i');
    var huiboMenuEm = $('.huibo-menu').find('em');
    var huiboMenuColEm = $('.huibo-menu-col em');
    var MenuCD = 0;

    huiboNav.on('click','b',function(){
        huiboMenu.css({'height':$(window).height()+1+'px'});
        MenuAAni(0);
    });
    huiboMenuColEm.on('click',function(){
        $(this).parents('.huibo-menu').css({'height':0});
        MenuAAni(1);
    });
    
    function MenuAAni(mathA){
        var math = mathA;
        MenuCD<0?MenuCD=0:MenuCD;
        clearInterval(setMenu);
        var setMenu = setInterval(function(){
            if(math==0){
                huiboMenuA.eq(MenuCD).stop(true).addClass('act');
                MenuCD++;
            }else{
                MenuCD--;
                huiboMenuA.eq(MenuCD).stop(true).removeClass('act');
                huiboMenuA.removeClass('active');
                huiboMenuEm.removeClass('act');
                huiboMenuEm.css({'height':0});
            }

            if(MenuCD > huiboMenuA.length || MenuCD < 0){
                clearInterval(setMenu);

            }

        }, 50);
    }



});