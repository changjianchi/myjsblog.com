$(function(){

//set_paper.html

    //删除小卷
    var sp_x_clos = $('.set_p_r-bt span');
    sp_x_clos.on('click',function(){
        
        var sp_xclo1 = $(this).parents('.set_p_r').attr('class');
        var sp_xclo2 = sp_xclo1.split(' ');
        console.log(sp_xclo2[1]);
        $('.'+sp_xclo2[1]).remove();
    });

//add_ques.html
    //添加试题弹窗
    var aq_tst = $('.aques_cen em');
    aq_tst.on('click',function(){
        $('.aq_tjst').css('display','block');
    });
//paper_list.html
    //table展开
    var plist_z = $('.plist-bt');
    plist_z.on('click','span',function(){
        if($(this).parents('.plist-table').hasClass('plisttab2')){
            $(this).parents('.plist-table').removeClass('plisttab2');
            $(this).html('-');
        }else{
            $(this).parents('.plist-table').addClass('plisttab2');
            $(this).html('+');
        }
    });
    //plist-table 不同色背景
    var plist_table = $('.plist-table');
    plist_table.each(function(i,k){
        if(i%=2){
            $(this).css('background','#fff');
        }
    });


});