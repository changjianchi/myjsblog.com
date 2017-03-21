$(function(){

    //展开
    var sp_zk = $('.proMsx_zk');
    sp_zk.on('click',function(){
        if($(this).parents('.set_p_r-3').hasClass('sp_zk')){
            $(this).parents('.set_p_r-3').removeClass('sp_zk');
        }else{
            $(this).parents('.set_p_r-3').addClass('sp_zk');
        }
        console.log($(this).parents('set_p_r-3'))
    });
    var sp_x_clos = $('.set_p_r-bt span');
    sp_x_clos.on('click',function(){
        
        var sp_xclo1 = $(this).parents('.set_p_r').attr('class');
        var sp_xclo2 = sp_xclo1.split(' ');
        console.log(sp_xclo2[1]);
        $('.'+sp_xclo2[1]).remove();
    });

});