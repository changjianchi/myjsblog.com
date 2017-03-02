$(function () {
    /*À´∂À*/
    $('.CheckLabel input').click(function () {
        if($(this).parent().hasClass('cur')){
            $(this).parent().removeClass('cur');
        }else{
            $(this).parent().addClass('cur');
        }
    });

    //Œ Ã‚—°‘Ò
    $('.QuesLiSele a').click(function () {
            $(this).parent().addClass('cur').siblings().removeClass('cur');
     });

    var isPc=device.windows();

    /*pc*/
    if(isPc){
        $('.ans-state').mouseenter(function () {
            $(this).children('.state-pro').show();
        }).mouseleave(function () {
            $(this).children('.state-pro').hide();
        });


    }});
