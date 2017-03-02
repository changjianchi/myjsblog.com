$(function(){
    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 7.5 + 'px');
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });

    var buyzyx = $('.buyz-yxuan');
    var buyzyxa = $('.buyz-yxuan a');
    buyzyxa.on('tap',function(){
        buyzyxa.removeClass('active');
        $(this).addClass('active');
    });
    var buyzjia = $('.buyz-sjia');
    var buyzjian = $('.buyz-sjian');
    var buyzssli = $('.buyz-ssl i');
    var buyzjiz = $('.buyz-ssm p i').html();
    var buyc = 1;
    buyzssli.html(buyc);
    buyzjia.on('tap',function(){
        buyc>=buyzjiz?buyc=buyzjiz:buyc++;
        buyzssli.html(buyc);
    });
    buyzjian.on('tap',function(){
        buyc<=1?buyc=1:buyc--;
        buyzssli.html(buyc);
    });
});
        
