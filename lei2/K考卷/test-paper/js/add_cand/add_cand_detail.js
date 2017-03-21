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
    //下拉列表菜单 cand_mgt.html
    var 
        ProMb1span = $('.profbj_M_b1 span'),
        ProMtab = $('.profbj_M_b1 table'),
        ProMbinput = $('.profbj_M_binput'),
        ProMbinputz = $('.profbj_M_b1 input');
    ProMb1span.on('click',function(){
        if($(this).hasClass('profbj_M_span')){
            $(this).nextAll('table').hide();
            $(this).html('+');
            $(this).removeClass('profbj_M_span');
            $(this).nextAll('h5').removeClass('cenT29');
        }else{
            $(this).nextAll('table').show();
            $(this).html('-');
            $(this).addClass('profbj_M_span');
            $(this).nextAll('h5').addClass('cenT29');
        }

    });
    ProMtabHide()
    function ProMtabHide(){
        ProMtab.hide();
    }
    //下拉列表全选 cand_mgt.html
    ProMbinput.on('click',function(){
        if($(this).hasClass('Input_zbsk')){
            $(this).parent().find('input').prop("checked",false);
            $(this).removeClass('Input_zbsk');
        }else{
            $(this).parent().find('input').prop("checked",true);
            $(this).addClass('Input_zbsk');
        }
    });
});