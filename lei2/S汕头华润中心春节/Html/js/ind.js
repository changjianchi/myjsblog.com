$(function(){
    
    function FunWindow(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 6.4 + 'px');
    }
    $(window).on('resize',function(){
        FunWindow();
        ssBottom();
    });

    //$('.s-s-bottom')
    function ssBottom(){
        var winHeight = $(window).height();
        var ssBjHeight = $('.s-s-bj').height();
        var cen1Height = $('.cen1').height();
        var shareTopHeight = $('.share-top').height();
        $('.s-s-bottom').css({
            'height':(winHeight - ssBjHeight) + 'px'
        });
        $('.cen-but').css({
            'height':(winHeight - cen1Height) + 'px'
        });
        $('.share-time').css({
            'height':(winHeight - shareTopHeight) + 'px'
        });
    }
    ssBottom();

    // tab
    var ssDiv = $('.s-s');
    var ssS = ssDiv.find('.s-s-s');
    var ssH = ssDiv.find('.s-s-h');
    setTimeout(function(){
        ssH.addClass('active');
    },500);

    //摇一摇
});