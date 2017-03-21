$(function(){
    //center-cen-lunboapp
    var centerCenLunboappSpan = $('.center-cen-lunboapp span');
    var centerCenLunboappSpanAWidth = centerCenLunboappSpan.find('a').width();
    var centerCenLunboappSpanALength = centerCenLunboappSpan.find('a').length;
    centerCenLunboappSpan.css('width',centerCenLunboappSpanALength*centerCenLunboappSpanAWidth +'px');
    var centerCenLunboappLeft = $('.center-cen-lunboapp-left');
    var centerCenLunboappright = $('.center-cen-lunboapp-right');
    var lunboc = 0;
    centerCenLunboappright.click(function(){
        lunboc++;
        lunboc>centerCenLunboappSpanALength-7?lunboc=0:lunboc;
        centerCenLunboappSpan.stop(true).animate({'left':'-'+lunboc*centerCenLunboappSpanAWidth+'px'},300);
    });
    centerCenLunboappLeft.click(function(){
        lunboc--;
        lunboc<0?lunboc=centerCenLunboappSpanALength-7:lunboc;
        centerCenLunboappSpan.stop(true).animate({'left':'-'+lunboc*centerCenLunboappSpanAWidth+'px'},300);
    });

    function gundongt(){
    if(document.body.style.overflow!="hidden"&&document.body.scroll!="no"&&document.body.scrollHeight>document.body.offsetHeight){
            // console.log("无滚动条");
            $('.foot').css('position','fixed');
        }else{ 
            // console.log("有滚动条");
            $('.foot').css('position','relative');
        }
    }
    gundongt();

    //公告关闭
    var centerCenGonggaoI = $('.center-cen-gonggao i');
    centerCenGonggaoI.on('click',function(){
        $(this).parent().remove();
    });

    //内容关闭
    var centerCenBannerCol = $('.center-cen-banner i.center-cen-banner-img-ruzhu-col');
    centerCenBannerCol.on('click',function(){
        var thpa = $(this).parents('.center-cen-banner');
        thpa.css('height',thpa.height()+'px');
        thpa.css('opacity','0');
        setTimeout(function(){
            thpa.css({
                'height':'0',
                'margin':'0',
                'padding':'0'
            });
            setTimeout(function(){
                thpa.remove();
            },500);
        },400);
        // $(this).parents('.center-cen-banner').remove();
    });

    //悬浮导航
    var cenNav = $('.cen-nav');
    var cenNavLeft = cenNav.offset().left;
    var cenNavTop = cenNav.offset().top;
    $('.left-nav').css('height',cenNav.height()+20+'px');
    var centerCenWanmingjiazai = $('.center-cen-wanmingjiazai');
    var centerCenChakangengduo = $('.center-cen-chakangengduo');
    var centerCenBanner = $('.center-cen-banner');
    var centerCenBannerLength = centerCenBanner.length;
    var jiazai0 = 0;
    centerCenChakangengduo.addClass('none');
    centerCenBanner.addClass('none');
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var footHeight = $('.foot').height();

    var rightTextRuzhurenshuT = $('.right-text-ruzhurenshu-t');
    var rightTextRuzhurenshu = $('.right-text-ruzhurenshu');
    // var rightTextRuzhurenshuLeft = rightTextRuzhurenshu.offset().left;
    // var rightTextRuzhurenshuTop = rightTextRuzhurenshu.offset().top;
    var rightTextHeight = $('.right-text').height();
    rightTextRuzhurenshuT.css('height',rightTextRuzhurenshu.height()+'px');

    $(window).on('scroll',function(){
        var winTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        if(winTop > cenNavTop){
            cenNav.css({'position':'fixed','left':cenNavLeft+'px'});
        }else{
            cenNav.css({'position':'relative','left':0});
        }

        // if(winTop > rightTextRuzhurenshuTop+rightTextHeight){
        //     rightTextRuzhurenshu.css({'position':'fixed','left':rightTextRuzhurenshuLeft+'px','top':'0','z-index':'10'});
        //     rightTextRuzhurenshuT.removeClass('none');
        // }else{
        //     rightTextRuzhurenshu.css({'position':'relative','left':0});
        //     rightTextRuzhurenshuT.addClass('none');
        // }

        //到底加载
        if(winTop+windowHeight > documentHeight-footHeight/2){
            jiazai0 = jiazai0 +5;
            jiazai5(jiazai0);
        }
        centerCenBanner.each(function(){
            if($(this).hasClass('none')){
                return false;
            }else{
                centerCenWanmingjiazai.addClass('none');
                centerCenChakangengduo.removeClass('none');
            }
        });
        
    });
    jiazai5(0);
    function jiazai5(a){
        for(var i=0;i<5;i++){
            centerCenBanner.eq(a+i).removeClass('none');
        }
        documentHeight = $(document).height();
    }

    //右侧悬浮按钮
    var rightFixed = $('.right-fixed');
    var conCen = $('.con-cen');
    var conCenLeft = conCen.offset().left;
    rightFixed.css({'left':conCenLeft+conCen.width()+10+'px'});

    //返回顶部
    var rightFixedTotop = $('.right-fixed-totop');
    rightFixedTotop.on('click',function(){
        if(document.documentElement.scrollTop == 0){
            $('body').animate({
                'scrollTop':0
            },300);
            return false;
        }else{
            document.documentElement.scrollTop = 0;
        }
    });

    //推荐切换
    var tuijianCenTopSpan = $('.tuijian-cen-top span');
    tuijianCenTopSpan.find('a').on('click',function(){
        $(this).parent().find('a').removeClass('active');
        $(this).addClass('active');
    });

    //图片弹窗
    var imgTanchuang = $('.img-tanchuang');
    var imgTanchuangT = $('.img-tanchuang-t');
    var imgTanchuangTSpanEmI = $('.img-tanchuang-t span em i');
    imgTanchuang.on('click',function(){
        imgTanchuangT.removeClass('none');
    });
    imgTanchuangTSpanEmI.on('click',function(){
        $(this).parents('.img-tanchuang-t').addClass('none');
    });

    //招聘详细展示
    var zhaopinBiaoBSpan = $('.zhaopin-biao b span');
    zhaopinBiaoBSpan.on('click',function(){
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
        }else{
            $(this).parent().addClass('active');
        }
    });

    //视频弹窗
    var shipinTanchuang = $('.shipin-tanchuang');
    shipinTanchuang.on('click',function(){
        imgTanchuangT.removeClass('none');
    });
    imgTanchuangTSpanEmI.on('click',function(){
        $(this).parents('.img-tanchuang-t').addClass('none');
    });

    //数字叠加
    var rightTextRuzhurenshuBt = $('.right-text-ruzhurenshu-bt');
    var rightTextRuzhurenshuBtSpanHtml = Number(rightTextRuzhurenshuBt.find('span').html());
    var rHtml1 = 0;
    var rightTextRuzhurenshuBtTime = setInterval(function(){
        if(rHtml1 < rightTextRuzhurenshuBtSpanHtml){
            rightTextRuzhurenshuBt.find('span').html(rHtml1);
            rHtml1 = rHtml1 + 21;
        }else{
            rightTextRuzhurenshuBt.find('span').html(rightTextRuzhurenshuBtSpanHtml);
            clearInterval(rightTextRuzhurenshuBtTime)
        }
    }, 2);

    //公告轮播
    var centerCenGonggaoEm = $('.center-cen-gonggao em');
    var centerCenGonggaoEmBHeight = $('.center-cen-gonggao em a').height();
    centerCenGonggaoEm.html(centerCenGonggaoEm.html()+centerCenGonggaoEm.html());
    var boc = 0,coe = 0;
    var intgonggao = setInterval(function(){
        if(coe == 0){
            boc++;
            centerCenGonggaoEm.stop(true).animate({
                'top':'-'+centerCenGonggaoEmBHeight*boc+'px'
            },500);
            if(boc == 5){
                setTimeout(function(){
                    centerCenGonggaoEm.stop(true).css({
                        'top':0+'px'
                    });
                    boc = 0;
                },600);
            }
        }else{
            clearInterval(intgonggao);
        }
    }, 2100);
    centerCenGonggaoEm.on('mouseover mouseout',function(a){
        if(a.type === 'mouseover'){
            clearInterval(intgonggao);
        }else{
            intgonggao = setInterval(function(){
                if(coe == 0){
                    boc++;
                    centerCenGonggaoEm.stop(true).animate({
                        'top':'-'+centerCenGonggaoEmBHeight*boc+'px'
                    },500);
                    if(boc == 5){
                        setTimeout(function(){
                            centerCenGonggaoEm.stop(true).css({
                                'top':0+'px'
                            });
                            boc = 0;
                        },600);
                    }
                }else{
                    clearInterval(intgonggao);
                }
            }, 2100);
        }
    });

    //列表轮播
    var gundongwenziliebiaoI = $('.gundongwenziliebiao i');
    var gundongwenziliebiaoIA = $('.gundongwenziliebiao i a');
    var gundongwenziliebiaoIAHeight = $('.gundongwenziliebiao i a').height();
    gundongwenziliebiaoI.html(gundongwenziliebiaoI.html()+gundongwenziliebiaoI.html());
    
    var gboc = 0,gcoe = 0;
    var intliebiao = setInterval(function(){
        if(gcoe == 0){
            gboc++;
            gundongwenziliebiaoI.stop(true).animate({
                'top':'-'+gundongwenziliebiaoIAHeight*gboc+'px'
            },500);
            if(gboc == gundongwenziliebiaoIA.length){
                setTimeout(function(){
                    gundongwenziliebiaoI.stop(true).css({
                        'top':0+'px'
                    });
                    gboc = 0;
                },600);
            }
        }else{
            clearInterval(intliebiao);
        }
    }, 2100);
    gundongwenziliebiaoI.on('mouseover mouseout',function(a){
        if(a.type === 'mouseover'){
            clearInterval(intliebiao);
        }else{
            intliebiao = setInterval(function(){
                if(gcoe == 0){
                    gboc++;
                    gundongwenziliebiaoI.stop(true).animate({
                        'top':'-'+gundongwenziliebiaoIAHeight*gboc+'px'
                    },500);
                    if(gboc == gundongwenziliebiaoIA.length){
                        setTimeout(function(){
                            gundongwenziliebiaoI.stop(true).css({
                                'top':0+'px'
                            });
                            gboc = 0;
                        },600);
                    }
                }else{
                    clearInterval(intliebiao);
                }
            }, 2100);
        }
    });

    //省略字
    // var centerCenLunboappCen = $('.center-cen-lunboapp-cen');
    // var indListAH2 = $('.center-cen-lunboapp-cen span a i');
    // var rightTextKAB = $('.right-text-ruzhurenshu a b');
    // var rightTextKASpan = $('.right-text-ruzhurenshu a span');
    // var rightTextKASpanB = $('.right-text-k a span b');
    // var rightTextKASpanB = $('.right-text-k a span em');
    // var rightTextKASpanB = $('.right-text-k a span b');
    // var rightTextKASpanB = $('.right-text-k a span b');
    // var rightTextKASpanB = $('.right-text-k a span b');

    // shenglvezi(rightTextKAB,5);
    // shenglvezi(rightTextKASpan,6);
    // shenglvezi(indListAH2,5);
    // shenglvezi($('.right-text-k a span b'),10);
    // shenglvezi($('.right-text-k a span em'),17);
    // shenglvezi($('.center-cen-banner-text-logo b span p'),7);
    // shenglvezi($('.center-cen-banner-text-logo b em'),15);
    // shenglvezi($('.center-cen-gonggao em a p'),27);
    // function shenglvezi(a,b){
    //     a.each(function(){
    //         var thisHtml = $(this).html();
    //         if(thisHtml.length > b){
    //             $(this).html(thisHtml.substr(0, b)+'...');
    //         }
    //     });
    // }

    //右侧二维吗
    var morenxianshiRightB = $('.morenxianshi-right b');
    var rightFixedErweima = $('.right-fixed-erweima');
    morenxianshiRightB.on('click',function(){
        $(this).parent().remove();
        rightFixedErweima.removeClass('none');
    });

    //招聘页面切换
    var zhaopinBiao = $('.zhaopin-biao');
    var onghuiyeNavA = $('.gonghuiye-nav a');
    onghuiyeNavA.on('click',function(){
        var thind = $(this).index();
        onghuiyeNavA.removeClass('active');
        $(this).addClass('active');
        zhaopinBiao.addClass('none');
        zhaopinBiao.eq(thind).removeClass('none');
    });


    
    var fenyeqi = $('.fanyeqi');
    var fenyeqiALength = fenyeqi.find('a').length;
    console.log(fenyeqiALength,fenyeqi.find('a').index());
    if(fenyeqi.find('a:first').hasClass('active')){
        fenyeqi.find('b:first').addClass('active');
    }
    if(fenyeqi.find('a:last').hasClass('active')){
        fenyeqi.find('b:last').addClass('active');
    }


});
