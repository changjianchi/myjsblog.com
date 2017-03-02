$(function(){
    var cenAniSpan = $('.cen-ani span');
    var cenAniFun = setInterval(function(){
        cenAniSpan.each(function(){
            if($(this).hasClass('none')){
                $(this).removeClass('none')
            }else{
                $(this).addClass('none')
            }
        });
    }, 500);

    var cenButA = $('.cen-but-a a').eq(1);
    var xuanyun = $('.xuanyun');

    cenButA.on('click',function(){
        xuanyun.removeClass('none');
    });
});