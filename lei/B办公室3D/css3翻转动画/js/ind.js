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
    },2500)
    var animatb = setTimeout(function(){
        htxm1.addClass('htxma');
    },2000)
});