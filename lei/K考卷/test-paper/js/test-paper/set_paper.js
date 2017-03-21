$(function(){
//add_paper.html
    //弹窗 选择我以往添加过的小卷
    var addpap_t9 = $('.addpap_t9 ul');
    addpap_t9.on('click','li',function(){
        if(!$(this).hasClass('A_N_P_Ali')){
            $(this).siblings().removeClass('A_N_P_Ali');
            $(this).addClass('A_N_P_Ali');
        }
    });
//set_paper.html
    //弹窗 T2 标签关闭
    var sp_t2c = $('.sp_Tc2-ttb ul li');
    sp_t2c.on('click','em',function(){
        $(this).parent().remove();
    });
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
    //点击弹窗规则
    var sp_tct = $('.set_p_r-2c'),
        sp_tst = $('.Add_Paper_l-tj'),
        sp_tcg = $('.A_N_yes');
    sp_tct.on('click',function(){
        $('.set_pap_tjcj').css('display','block');
    });
    sp_tst.on('click',function(){
        $('.set_pap_tjst').css('display','block');
    });
    sp_tcg.on('click',function(){
        $('.set_pap_tjcg').css('display','block');
    });
    //单双背景色
    var sp_T2li = $('.sp_T2-cul li');
    sp_T2li.each(function(i,k){
        if(i%=2){
            $(this).css('background','#fff');
        }
    });
    //清楚知识点
    var sp_Zzcol = $('.sp_T2-c2 span');
    sp_Zzcol.on('click',function(){
        $('.sp_T2-c2 input').eq(0).val(null);
    });
});