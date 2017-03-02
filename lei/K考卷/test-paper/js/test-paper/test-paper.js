$(function(){
    var Cnav = $('.cnav');
    $('.cnavX').on('click',function(){
        Cnav.hide();
    });
//弹窗关闭 prof_T
    var prof_T_x = $('.profbt_T span'),
        prof_T = $('.prof_T');
    prof_T_x.click(function(){
        $(this).parents('.prof_T').css('display','none');
    });
//input全选
    var Pinp = $('.addman input'),
        Cinp = $('.procen input');
    Pinp.on('click',function(){
        if ($(this).hasClass('Input_zbsk')){
            Cinp.prop("checked",false);
            $(this).removeClass('Input_zbsk');
        }else{
            Cinp.prop("checked",true);
            $(this).addClass('Input_zbsk');
        }
    });
//下拉列表菜单
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
//下拉列表全选 
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