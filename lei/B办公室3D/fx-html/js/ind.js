$(function(){
    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 7.19 + 'px');
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });
    var text1 = $('.text');
    var htxm1 = $('.htxm');
    var animata = setTimeout(function(){
        text1.addClass('textop');
    },4200);
    var animatb = setTimeout(function(){
        htxm1.addClass('htxma');
    },3000);
    var textSpan = $('.text span');
    var textA = $('.text a');
    var cn = 0;
    var animatc = setTimeout(function(){
        var animatca = setInterval(function(){
            if(cn < textSpan.length){
                textSpan.removeClass('noneno');
                textSpan.eq(cn).addClass('noneno');
                cn++;
            }else{
                textA.addClass('noneno');
                clearInterval(animatca);
            }
        },3000);
    },1500);
});