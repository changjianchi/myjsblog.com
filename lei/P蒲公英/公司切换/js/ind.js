$(function(){
    
    //切换
    var navLeftSpan = $('.nav-left span');
    var thisAct = 0;
    var cenRight = $('.cen-right');

    navLeftSpan.on('mouseover mouseout',function(e){
        if(e.type === 'mouseover'){
            navLeftSpan.removeClass('active');
            $(this).addClass('active');
        }else{
            navLeftSpan.removeClass('active');
            navLeftSpan.eq(thisAct).addClass('active');
        }
    });

    navLeftSpan.click(function(){
        thisAct = $(this).index();
        $(this).addClass('active');
        cenRight.addClass('none');
        cenRight.eq(thisAct).removeClass('none');
    });

    //下拉菜单
    var formS = $('.form-s');
    var biaodanS1 = $('.biaodan-s1');
    var gb = 0;

    formS.on('click',function(){
        gb = 0;
        if($(this).hasClass('act')){
            $(this).removeClass('act');
            $(this).find('.biaodan-s1').addClass('none');
        }else{
            biaodanS1.addClass('none');
            formS.removeClass('act');
            $(this).addClass('act');
            $(this).find('.biaodan-s1').removeClass('none');
        }
    });

    biaodanS1.find('i').on('mousedown',function(){
        var thHtml = $(this).html();
        $(this).parents('.form-s').find('span').html(thHtml);
    });

    $(document).on('click', function () {
        if(gb != 0){
            biaodanS1.addClass('none');
        }
        gb = 1;
    });

    //textarea 字符长度
    function changdu150(){
        var chengyuanTextTextarea = $('.chang150');
        var changdu = 150;

        chengyuanTextTextarea.on('keyup',function(){
            if($(this).val().length > changdu){
                var thval = $(this).val().substring(0,changdu);
                $(this).val(thval);
            }
            $(this).parent().find('span').find('i').html($(this).val().length);
        });
    }
    changdu150();

    var houxuanrenTextTextarea = $('.chang1000');
    var changdu2 = 1000;

    houxuanrenTextTextarea.on('keyup',function(){
        if($(this).val().length > changdu2){
            var thval = $(this).val().substring(0,changdu2);
            $(this).val(thval);
        }
        $(this).parent().find('span').find('i').html($(this).val().length);
    });

    //图片删除
    function sanchuimg(){
        var huodongImgImg = $('.huodong-img img');
        var shanchukuangX = $('.shanchukuang-x img');
        huodongImgImg.on('mouseover',function(e){
            $(this).parent().find('span').removeClass('none');
        });

        $('.huodong-img span').on('mouseout',function(e){
            $(this).addClass('none');
        });

        shanchukuangX.on('mouseover',function(e){
            $(this).parent().find('span').removeClass('none');
        });

        $('.shanchukuang-x span').on('mouseout',function(e){
            $(this).addClass('none');
        });

        $('.shanchukuang-x span i').on('click',function(){
            $(this).parents('.shanchukuang').remove();
        });
    }
    sanchuimg();

    /*两个添加功能*/
    var cyxxHtml=$('.chengyuanxinxi').html();
    var huodongCenHtml = $('.huodong-cen').html();
    $('.tianjia1').click(function(){
         $('.chengyuanxinxi').append(cyxxHtml);
         changdu150();
         sanchuimg();
    })
    $('.tianjia2').click(function(){
        $('.huodong-cen-HTML').append(huodongCenHtml);
        changdu150();
        sanchuimg();
    });

    //气质+福利，添加标签
    var qizhitianjia = $('.qizhitianjia');
    var qizhispan = $('.qizhispan');
    var fulitianjia = $('.fulitianjia');
    var fulispan = $('.fulispan');

    qizhitianjia.on('click', function () {
        var thhtml = $(this).parent().find('input').val();
        if(thhtml != ''){
            qizhispan.prepend('<span>'+thhtml+'<i></i></span>');
            tinjiacol();
        }
    });

    fulitianjia.on('click', function () {
        var thhtml = $(this).parent().find('input').val();
        if(thhtml != ''){
            fulispan.prepend('<span>'+thhtml+'<i></i></span>');
            tinjiacol();
        }
    });

    //行业标签
    bcp = 0;
    var cenR1LingyuSpan = $('.cen-r1-lingyu1 span');
    cenR1LingyuSpan.on('click',function(){
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            bcp++;
            $(this).attr('data-index',bcp);
            qizhispan.prepend('<span data-index='+bcp+'>'+$(this).html()+'<i></i></span>');
            tinjiacol();
        }
    });

    var cenR2LingyuSpan = $('.cen-r1-lingyu2 span');
    cenR2LingyuSpan.on('click',function(){
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            bcp++;
            $(this).attr('data-index',bcp);
            fulispan.prepend('<span data-index='+bcp+'>'+$(this).html()+'<i></i></span>');
            tinjiacol();
        }
    });

    //标签添加删除
    function tinjiacol(){
        var hangyeBiaoqianSpanI = $('.hangye-biaoqian span i');
        hangyeBiaoqianSpanI.on('click',function(){
            var thbcp = Number($(this).parent().attr('data-index'));
            $('.cen-r1-lingyu span').each(function(){
                var thbc = Number($(this).attr('data-index'));
                if(thbcp === thbc){$(this).removeClass('active');}
            });
            $(this).parent().remove();
        });
    }

});