$(function(){
    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 6.4 + 'px');
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });
});
        
