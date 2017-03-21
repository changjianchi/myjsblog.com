$(function(){
    var dCenter = $('.d-center')
    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 7.5 + 'px');
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });
// 自适应 end
    var pingjiX = $('.pingji-x');
    var pingjiXB = $('.pingji-x b');
    pingjiX.find('b').on('touchstart',function(){
        var Bex = $(this).index();
        var thisB = $(this).parent().find('b');
        thisB.removeClass('active');
        for(var i=0;i<Bex;i++){
            thisB.eq(i).addClass('active');
        }
    });
});
        
