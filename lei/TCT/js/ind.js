$(function(){

    // 自适应
    // function fun(){
    //     var winWidth = $(window).width();
    //     $('html').css('font-size',winWidth / 7.5 + 'px');
    // }
    // fun();
    // $(window).on('resize',function(){
    //     fun();
    // });

    var shouyeNav1NavMenu = $('.shouye-nav1 .nav-menu');
    shouyeNav1NavMenu.on('click',function(){
        if($('.shouye-nav1 span').hasClass('none')){
            remc($('.shouye-nav1 span'),'none');
        }else{
            addc($('.shouye-nav1 span'),'none');
        }
    });

    $('.daohang-a').on('click',function(){
        if($(this).find('em').hasClass('none')){
            addc($('.daohang-a').find('em'),'none');
            remc($(this).find('em'),'none');
        }else{
            addc($(this).find('em'),'none');
        }
    });

    function addc(a,b){return a.addClass(b)}
    function remc(a,b){return a.removeClass(b)}
    function t3d(name,x,y){return name.css({'transform':'translate3d('+x+', '+y+', 0)'})};

});