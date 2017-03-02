$(function(){

//select_std_paper.html
    var ssp_xb = $('.ssp-xb ul'),
        ssp_xc = $('.ssp-xc ul');
    ssp_xb.on('click','li',function(){
        if(!$(this).hasClass('ssp-xbb')){
            $(this).siblings().removeClass('ssp-xbb');
            $(this).addClass('ssp-xbb');
        }
    });
    ssp_xc.on('click','li',function(){
        if(!$(this).hasClass('ssp-xcc')){
            $(this).siblings().removeClass('ssp-xcc');
            $(this).addClass('ssp-xcc');
        }
    });

});