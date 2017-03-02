$(function(){
//input清空
    var input = $('input');
        input.click(function(){
            if (!$(this).hasClass('inputc')){
                $(this).val(null);
                $(this).addClass('inputc');
            }
        });
//关闭弹窗
    var Tcols = $('.t-indc-bt');
    Tcols.on('click','img',function(){
        $(this).parents('.t-index').css('display','none');
    });
//index.html
    //password转换
    var ICUp = $('.index-c-userp');
    ICUp.on('click','input',function(){
        $(this).attr('type','password');
    });
    //记住密码
    var ICRp = $('.index-c-rembp');
    ICRp.on('click','span',function(){
        if($(this).hasClass('ICRp')){
            $(this).removeClass('ICRp');
            $(this).html('<img src="../images/index-remy.png">');
        }else{
            $(this).addClass('ICRp');
            $(this).html(null);
        }
    });
    //忘记密码
    var ICFpa = $('.index-c-forgetp');
    ICFpa.on('click','a',function(){
        $('.t-index').css('display','block');
    });
    //滑动验证效果
    var ICYs = $('.index-c-y span');
    ICYs.on('mousedown mouseup',function(a){
        if(a.type === 'mousedown'){
            var ICYx = a.pageX,
                ICYl = $(this).position().left;
            $(this).on('mousemove',function(e){
                var ICYr = e.pageX,
                    i = ICYl+ICYr-ICYx;
                if(i > 195){
                    $(this).parent().css('display','none');
                    $('.index-c-rembp').css('display','block');
                }else if(i <= 10){
                    $(this).css('left','10px');
                }else{
                    $(this).css('left',i+'px');
                }
                $(this).on('mouseout',function(){
                    $(this).unbind('mousemove');
                    $(this).stop(true).animate({'left':'10px'},300);
                });
            });
        }else{
            $(this).unbind('mousemove');
            $(this).stop(true).animate({'left':'10px'},300);
        }
    });

});