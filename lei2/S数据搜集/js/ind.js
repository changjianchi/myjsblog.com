$(function(){
    
    function FunWindow(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 7.5 + 'px');
    }
    $(window).on('resize',function(){
        FunWindow();
    });
    FunWindow();

    

});