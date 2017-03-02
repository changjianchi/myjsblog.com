$(function(){
    //次级导航栏隐藏
    var Cnav = $('.cnav');
    $('.cnavX').on('click',function(){
        Cnav.hide();
    });
    //弹窗关闭
    var Prof1 = $('.prof1'),
        Prof2 = $('.prof2'),
        Profb = $('.profbt span');
    Profb.on('click',function(){
        Prof2.css('display','none');
        Prof1.css('display','none');
    });
    //全选input
    var Pinp = $('.addman input'),
        Cinp = $('.procen input');
    Pinp.on('click',function(){
        if ($(this).hasClass('Input_zbsk')){
            Cinp.prop('checked',false);
            $(this).removeClass('Input_zbsk');
        }else{
            Cinp.prop('checked',true);
            $(this).addClass('Input_zbsk');
        }
    });
});