$(function(){
    var apapp_ric = $('.apa_ri-cen');
    apapp_ric.on('click',function(){
        if(!$(this).hasClass('apa_ali')){
            $('.apa_ri-cen').removeClass('apa_ali');
            $(this).addClass('apa_ali');
        }
    });
});