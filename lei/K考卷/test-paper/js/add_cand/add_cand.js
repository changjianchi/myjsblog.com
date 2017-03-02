$(function(){
    var anp_ul_li = $('.proXsz ul');
    anp_ul_li.on('click','li',function(){
        if(!$(this).hasClass('proXsz1')){
            $(this).siblings().removeClass('proXsz1');
            $(this).addClass('proXsz1');
        }
    });
});