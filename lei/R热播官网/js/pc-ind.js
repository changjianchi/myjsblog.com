$(function(){

    var MinWidth = 768; //最低宽度
    var LoopImg = $('.loop img');
    var La = 0;
    var Lb = 1;
    var Stime = 500;  //图片停留时间
    var ImgTime = 400;  //图片切换时间
    var LoopBo = null;

    function FunWindow(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 7.5 + 'px');
        LoopAni(winWidth);
    }
    FunWindow();

    $(window).on('resize',function(){
        FunWindow();
    });

    function LoopAni(a){
        clearInterval(LoopBo);
        LoopBo = setInterval(function(){
            La %= LoopImg.length;
            Lb %= LoopImg.length;

            if(a>MinWidth){

                LoopImg.removeClass('loopru');
                LoopImg.removeClass('loopchu');

                LoopImg.eq(La).animate({
                    'opacity':'1',
                    'filter':'alpha(opacity=100)',
                },ImgTime/2);

                LoopImg.eq(Lb).animate({
                    'opacity':'0',
                    'filter':'alpha(opacity=0)',
                },ImgTime);
                
            }else{

                LoopImg.removeClass('loopru');
                LoopImg.removeClass('loopchu');
                LoopImg.eq(La).addClass('loopchu');
                LoopImg.eq(Lb).addClass('loopru');

            }

            La--;
            Lb--;
        },Stime);
    }

});