$(function(){
        //标签选择
        var tianjialunxunBiaoqianxuanze = $('.tianjialunxun-biaoqianxuanze');
        tianjialunxunBiaoqianxuanze.each(function(){
            $(this).attr('title',$(this).find('em').html());
        });

        tianjialunxunBiaoqianxuanze.on('click',function(){
            if(!$(this).hasClass('activenone')){
                if($(this).hasClass('danxuan-time')){
                    $(this).parent().find('.danxuan-time').removeClass('active');
                }
                if($(this).hasClass('active')){
                    $(this).removeClass('active');
                }else{
                    $(this).addClass('active');
                }
            }
        });

        $('.c4time-t-s .tianjialunxun-biaoqianxuanze').on('click',function(){
            if($(this).hasClass('fenduanjishi-cen4-time')){
                $('.cen4-fenduanjishi').show();
            }else{
                $('.cen4-fenduanjishi').hide();
            }
        });

        $('.fenduanjishi-time-danxuan').on('click',function(){
            $('.fenduanjishi-time-danxuan').removeClass('active');
            $(this).addClass('active');
            $('.biaozhunjishi-time-a').removeClass('active'); 
            if($(this).hasClass('biaozhunjishi-time')){
                $('.biaozhunjishi-time-a').eq(1).addClass('active'); 
            }else{
                $('.biaozhunjishi-time-a').eq(0).addClass('active');
            }
        });

        //time-cen4
        var youxiaozhuangtaiTime = $('.youxiaozhuangtai-time')
        youxiaozhuangtaiTime.on('click',function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).parents('tr').addClass('active');
                var a = Number($(this).parents('tr').find('.lunxun-shezhi-a').attr('data-id'));
                $('.table-bocta-cell-bt').eq(a).addClass('none');
                $('.table-bocta-cell').eq(a).addClass('none');
                $(this).parents('tr').find('.lunxun-shezhi-a').removeClass('active');
                $(this).parents('tr').css({'border-bottom-width':'2px'});
            }else{
                $(this).addClass('active');
                $(this).parents('tr').removeClass('active');
            }
        });


        var cenNone = $('.cen-none');
        var cen1None = $('.cen1-none');
        var cen2None = $('.cen2-none');
        var cen3None = $('.cen3-none');
        var cen4None = $('.cen4-none');
        var cen3Tanchuang = $('.cen3-tanchuang');

        // $('.cen1-none .wj-renyuan-tianjia').click(function(){
        //     cen1None.hide();
        //     cen2None.show();
        // });
        // $('.cen2-none .xiayibu').click(function(){
        //     cen2None.hide();
        //     cen3None.show();
        // });
        // $('.cen2-none .fanhui').click(function(){
        //     cen2None.hide();
        //     cen1None.show();
        // });
        $('.cen3-none1 .wj-renyuan-xiugai1').click(function(){
            cen3None.addClass('active');
            cen3Tanchuang.hide();
        });
        $('.cen4-none .fanhui').click(function(){
            cen3None.removeClass('active');
        });
        $('.cen4-none .xiayibu').click(function(){
            cen3None.removeClass('active');
        });

        //移动框
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        // cen3Tanchuang.css({
        //     'left':(winWidth - cen3Tanchuang.width())/2+'px',
        //     'top':(winHeight - cen3Tanchuang.height())/2+'px'
        // });
        // var xAnd = 0,yAnd = 0,xBnd = 0,yBnd = 0,
        //     xxAnd = 0,yyAnd = 0,xTop = 0,xLeft = 0;
        // cen3Tanchuang.on('mousedown mouseup mouseout',function(a){
        //     var xAnd = 0,yAnd = 0,xBnd = 0,yBnd = 0,
        //         xxAnd = 0,yyAnd = 0,xTop = 0,xLeft = 0;
        //     var thths = $(this);
        //     if(a.type === 'mousedown'){
        //         xAnd = a.pageX;
        //         yAnd = a.pageY;
        //         $(this).on('mousemove',function(b){
        //             xBnd = b.pageX;
        //             yBnd = b.pageY;
        //             xxAnd = xBnd - xAnd;
        //             yyAnd = yBnd - yAnd;
        //             thths.css({
        //                 'transform':'translate3d('+xxAnd+'px,'+yyAnd+'px,0)'
        //             });
        //         }); //move
        //     }else{
        //         $(this).unbind('mousemove');
        //         yyAnd = thths.position().top;
        //         xxAnd = thths.offset().left;
        //         thths.css({
        //             'top':yyAnd+'px',
        //             'left':xxAnd+'px',
        //             'transform':'translate3d('+0+'px,'+0+'px,0)'
        //         });
        //     } //if a.type
        // }); //over
        
        $('.tanchuang3-col').click(function(){
            $(this).parents('.cen3-tanchuang').hide();
        });

        $('.lunxun-shezhi').on('click',function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                cen3Tanchuang.hide();
            }else{
                $(this).addClass('active');
                cen3Tanchuang.css({
                    'left':(winWidth - cen3Tanchuang.width())/2+'px',
                    'top':(winHeight - cen3Tanchuang.height())/2+'px'
                });
                cen3Tanchuang.show();
            }
        });

        $('.wj-depsel-content').on('click',function(){
            var cbd = $(this).parents('.table-bocta-i-5');
            if($(this).parent().find('.caret-self-set').hasClass('active')){
                cbd.css('z-index','80');
            }else{
                clearTimeout(timeclset);
                var timeclset = setTimeout(function(){
                    cbd.css('z-index','0');
                },100);
            }
        });

        //cen4-联动菜单
        var cen4LiandongMenu = $('.cen4-liandong-menu');
        cen4LiandongMenu.on('click','li',function(){
            var c = Number($(this).attr('data-id'));

            eachLiandong($('.cen4-liandong'),c);
            eachLiandong($('.cen4-liandong1'),c);
            eachLiandong($('.cen4-liandong2'),c);
            eachLiandong($('.cen4-liandong3'),c);
        });

        function eachLiandong(a,b){
            a.addClass('none');
            a.each(function(){
                var c = Number($(this).attr('data-i'));
                if(b === c){
                    $(this).removeClass('none');
                }
            });
        } 

        // cen3Tanchuang.hide();
        // cen4None.hide();
});