$(function(){

    // 自适应
    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 19.2 + 'px');
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });

    //表单选中
    $('tr').on('click',function(){
        if($(this).hasClass('datagrid-row-checked')){
            $(this).find('input').eq(0).prop("checked",false);
        }else{
            $(this).find('input').eq(0).prop("checked",true);
        }
        $(this).find('.inputone').prop("checked",false);
    });
    $('.inputone').on('click',function(){
        if($(this).prop("checked")){
            $(this).parents('.zhiding-baioge').find('tr').find('input').prop("checked",true);
        }else{
            $(this).parents('.zhiding-baioge').find('tr').find('input').prop("checked",false);
        }
    });

    //登陆选择
    var yonghuming = $('.yonghuming');
    var denglukuangSpanEm = $('.denglukuang span em');
    var xialaK = $('.xiala-k');
    denglukuangSpanEm.on('click',function(){
        if(xialaK.hasClass('none')){
            remc(xialaK,'none');
        }else{
            addc(xialaK,'none');
        }

        var xialaKB = $('.xiala-k b');
        xialaKB.on('click',function(){
            yonghuming.val($(this).html());
            addc($(this).parent(),'none');
        });
    });

    //登陆判断
    var dengluA = $('.denglu-a');
    dengluA.on('click',function(){
        onaClick();
    });

    function onaClick(){
        var yonghumingVal = $('.yonghuming').val();
        if(yonghumingVal === ''){
            alert('用户名为空');
            return false;
        }

        var mimaVal = $('.mima').val();
        
        if(mimaVal === ''){
            alert('密码为空');
            return false;
        }
        // $('.form-index').attr({'action':'index-x.html'});
        window.location.href = 'index-x.html';
    }

    //nav
    // var navA = $('.nav a');
    // var navActive = $('.nav .active');
    // navA.on('mouseover mouseout',function(a){
    //     // remc(navA,'active');
    //     if(a.type === 'mouseover'){
    //         addc($(this),'active');
    //     }else{
    //         addc(navActive,'active');
    //     }
    // });

    //搜索建议-nav
    var sousuoNav = $('.sousuo-nav span');
    var sousuoCenC = $('.sousuo-cen-c');
    var sousuoNavAIndex = 0;
    // sousuoNav.on('mouseover mouseout',function(a){
    //     remc(sousuoNav.find('a'),'active');
    //     if(a.type === 'mouseover'){
    //         addc($(this).find('a'),'active');
    //     }else{
    //         addc(sousuoNav.eq(sousuoNavAIndex).find('a'),'active');
    //     }
    // });
    sousuoNav.on('click',function(){
        sousuoNavAIndex = $(this).index();
        remc(sousuoNav.find('a'),'active');
        addc($(this).find('a'),'active');
        addc(sousuoCenC,'none');
        remc(sousuoCenC.eq(sousuoNavAIndex),'none');
    });

    //搜索输入添加 input
    var sousuoTianjiaImg = $('.sousuo-tianjia img');
    var sousuoInputTianjia = $('.sousuo-input-tianjia');
    var sousuoInputHtml = '<span><input type="text" maxlength="5" placeholder="此处输入"><em></em></span>';
    sousuoTianjiaImg.on('click',function(){
        sousuoInputTianjia.eq(sousuoNavAIndex).append(sousuoInputHtml);
        sousuoyichu();
        $('.sousuo-input-tianjia').eq(sousuoNavAIndex).find('span:last').find('input').focus();
        $('.sousuo-input-tianjia').eq(sousuoNavAIndex).find('span:last').find('input').addClass('act');
    });
    sousuoyichu();
    function sousuoyichu(){
        var sousuoInputTianjiaSpanEm = $('.sousuo-input-tianjia span em');
        sousuoInputTianjiaSpanEm.on('click',function(){
            $(this).parent().remove();
            $('.sousuo-input').find('input').addClass('act');
        });
    }

    //导航弹窗
        //menu
        var centopMenu = $('.centop-menu');
        var menu = $('.menu');
        centopMenu.on('click',function(){
            remc(menu,'none');
        });

        //city 切换
        var centopCity = $('.centop-city');
        var cityXuanze = $('.city-xuanze');
        centopCity.on('click',function(){
            addc($(this),'active');
            remc(cityXuanze,'none');
        });
        var cityCenYBSpan = $('.city-cen-y span');
        cityCenYBSpan.on('click',function(){
            var EmHtml = $(this).find('em').html();
            centopCity.find('em').find('i').html(EmHtml);
            guanbitanchuang($(this));
            remc(cityCenYBSpan,'active');
            addc($(this),'active');
        });

        //弹窗关闭
        var guanbiMenuSpanI = $('.guanbi-menu span i');
        guanbiMenuSpanI.on('click',function(){
            guanbitanchuang($(this));
        });
        function guanbitanchuang(a){
            addc(a.parents('.tanceng'),'none');
            remc(centopCity,'active');
        }

    //轮播管理
    function lunboguanli(a){
        var aSpan = a.find('span');
        var aSpanLength = aSpan.length;
        aSpan.each(function(i){
            $(this).attr('thind',i);
            $(this).find('em').find('b').eq(0).on('click',function(){
                var thI = $(this).parents('span').index() - 1;
                var thC = $(this).parents('span').html();
                thI<0?thI=0:thI;
                $(this).parents('span').html(aSpan.eq(thI).html());
                aSpan.eq(thI).html(thC);
                lunboguanli(a);
                lunbochuli();
                a.addClass('act');
            });
            $(this).find('em').find('b').last().on('click',function(){
                var thI = $(this).parents('span').index()+1;
                var thC = $(this).parents('span').html();
                thI>(aSpan.length-1)?thI=(aSpan.length-1):thI;
                $(this).parents('span').html(aSpan.eq(thI).html());
                aSpan.eq(thI).html(thC);
                lunboguanli(a);
                lunbochuli();
                a.addClass('act');
            });
            if(aSpan.length === 9){
                a.find('.tianjialunbo').addClass('none');
            }else{
                a.find('.tianjialunbo').removeClass('none');
            }
            
        });
    }
    lunboguanli($('.lunboguanli1'));
    lunboguanli($('.lunboguanli2'));
    lunboguanli($('.lunboguanli3'));
    lunboguanli($('.lunboguanli4'));
    lunboguanli($('.lunboguanli5'));


    //轮播管理弹层
    $('.tc-cen-col i').on('click',function(){
        if($(this).parents('.shangjia-tc').find('input').hasClass('xiugai')){
            $('.xiugai-tc').removeClass('none');
            return false;
        }
        $(this).parents('.lunbotc').addClass('none');
    });
    $('.gongneng-quxiao').on('click',function(){
        $(this).parents('.lunbotc').addClass('none');
    });
    $('.tc-cen-guanbi').on('click',function(){
        $(this).parents('.lunbotc').addClass('none');
    });
    $('.hei-a a').eq(0).on('click',function(){
        $(this).parents('.lunbotc').addClass('none');
    });
    $('.guanbi-hei').on('click',function(){
        $(this).parents('.hei-t').addClass('none');
    });
    $('.hei-ok').on('click',function(){
        $(this).parents('.hei-t').addClass('none');
    });
    var lShezhi = $('.l-shezhi');
    var lXiugai = $('.l-xiugai');
    var xzDizhi = $('.tianjialunbo');
    function lunbochuli(){
        $('.l-shezhi').on('click',function(){
            $('.tc-lianjie').removeClass('none');
        });
        // $('.l-xiugai').on('click',function(){
        //     $('.tc-dizhi').removeClass('none');
        // });
        $('.l-shanchu').on('click',function(){
            $('.shanchu-tc').removeClass('none');
            $('.lunboguanli').addClass('.act');
        });
    }
    lunbochuli();

    // $('.tianjialunbo').on('click',function(){
    //     $('.xz-dizhi').removeClass('none');
    // });
    
    $('.baocun-fabu').on('click',function(){
        $('.baocun-ok1').removeClass('none');
    });

    //新增弹窗
    $('.xinzeng-ce').on('click',function(){
        $('.tc-zhixingx').removeClass('none');
    });
    $('.xialakuang-xz-e').on('click',function(){
        $(this).parent().find('.xialakuang-xz').removeClass('none');
    });
    $('.baocun-ok').on('click',function(){
        $('.xiugai-tc').addClass('none');
        $('.baocun-ok1').removeClass('none');
    });
    $('.shangjia-text-baocun').on('click',function(){
        $('.baocun-ok1').removeClass('none');
        $('.shangjia-tc').addClass('none');
    });

    $('.shangjia-yichu').on('click',function(){
        $('.yichu-tc').removeClass('none');
    });

    //默认值菜单
    $('.shangjia-moren em').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).parent().find('.shangjia-morenzhi').addClass('none');
            $(this).parent().css('z-index','1');
        }else{
            $(this).addClass('active');
            $(this).parent().find('.shangjia-morenzhi').removeClass('none');
            $(this).parent().css('z-index','9');
        }
    });
    $('.shangjia-mo-col i').on('click',function(){
        $(this).parents('.shangjia-morenzhi').addClass('none');
        $(this).parents('.shangjia-moren').find('em').removeClass('active');
        $(this).parents('.shangjia-moren').css('z-index','1');
    });
    $('.shangjia-mo-baocun a').on('click',function(){
        $(this).parents('.shangjia-morenzhi').addClass('none');
        $(this).parents('.shangjia-moren').find('em').removeClass('active');
        $(this).parents('.shangjia-moren').css('z-index','1');
    });

    //弹窗显示-审核-商户
    $('.xianshizhong-img').on('click',function(){
        $('.xianshizhong-tc').removeClass('none');
    });
    $('.shenhe-img').on('click',function(){
        $('.shenhe-tc').removeClass('none');
    });
    $('.shangjia-img').on('click',function(){
        $('.shangjia-tc').removeClass('none');
    });

    //关闭提示
    $('.shangjia-tc input').on('click',function(){
        $(this).addClass('xiugai');
    });

    //弹窗编辑 商家
    $('.shangjia-ktv').on('click',function(){
        $('.ktv-tc').removeClass('none');
    });
    $('.shangjia-jiuba').on('click',function(){
        $('.jiuba-tc').removeClass('none');
    });
    $('.shangjia-canting').on('click',function(){
        $('.canting-tc').removeClass('none');
    });
    $('.shangjia-jiudian').on('click',function(){
        $('.jiudian-tc').removeClass('none');
    });

    //弹窗编辑 审核
    $('.ktv-img2').on('click',function(){
        $('.ktv-tc2').removeClass('none');
    });
    $('.jiuba-img2').on('click',function(){
        $('.jiuba-tc2').removeClass('none');
    });
    $('.canting-img2').on('click',function(){
        $('.canting-tc2').removeClass('none');
    });
    $('.jiudian-img2').on('click',function(){
        $('.jiudian-tc2').removeClass('none');
    });

    //弹窗编辑 显示
    $('.ktv-img3').on('click',function(){
        $('.ktv-tc3').removeClass('none');
    });
    $('.jiuba-img3').on('click',function(){
        $('.jiuba-tc3').removeClass('none');
    });
    $('.canting-img3').on('click',function(){
        $('.canting-tc3').removeClass('none');
    });
    $('.jiudian-img3').on('click',function(){
        $('.jiudian-tc3').removeClass('none');
    });

    //提交提示
    $('.gongneng-tijiao').on('click',function(){
        $('.tijiao-ok1').removeClass('none');
    });
    $('.gongneng-shanchu').on('click',function(){
        $('.shanchu-tc').removeClass('none');
    });

    //弹窗预定管理
    $('.xintixing-col').on('click',function(){
        $(this).parents('.lunbotc').addClass('none');
    });
    $('.yiyuliu-img').on('click',function(){
        $('.yuliuchuli-tc1').removeClass('none');
    });
    $('.shanchuyuliu-b').on('click',function(){
        $(this).parents('.lunbotc').addClass('none');
        $('.yuliuchuli-tc2').removeClass('none');
    });
    $('.shanchuyuliu-c').on('click',function(){
        $(this).parents('.lunbotc').addClass('none');
        $('.yuliuchuli-tc3').removeClass('none');
    });
    $('.tuikuanzhong-img').on('click',function(){
        $('.yuliuchuli-tc3').removeClass('none');
    });
    $('.yiquxiao-img').on('click',function(){
        $('.yuliuchuli-tc4').removeClass('none');
    });
    $('.yiguanbi-img').on('click',function(){
        $('.yuliuchuli-tc5').removeClass('none');
    });
    $('.yiyuliu-img').on('click',function(){
        $('.yuliuchuli-tc1').removeClass('none');
    });
    $('.dengdaifukuan-img').on('click',function(){
        $('.yuliuchuli-tc6').removeClass('none');
    });
    
    

    //预定栏目切换
    var yudingguanliNavSpan = $('.yudingguanli-nav span');
    yudingguanliNavSpan.on('click',function(){
        var thind = $(this).index();
        $('.yud-a').addClass('none');
        $('.yud-b').addClass('none');
        $('.yud-c').addClass('none');
        $('.yud-a').eq(thind).removeClass('none');
        $('.yud-b').eq(thind).removeClass('none');
        $('.yud-c').eq(thind).removeClass('none');
    });
    var xialakuangXzBI = $('.xialakuang-xz b i');
    xialakuangXzBI.on('click',function(){
        $(this).parents('.xialakuang-xz').addClass('none');
        var h1html = $(this).parent().find('p').html();
        $(this).parents('.tc-cen-te').find('.chazhao-input').val(h1html);

        //搜索。选取
        var tiH2 = $(this).parent().find('h2').html();
        var tiH3 = $(this).parent().find('h3').html();
        var tiH3 = tiH3.replace(/<.*?>/ig,"");
        if(tiH2 != ''){
            var c = tiH3+' - '+tiH2;
        }else{
            var c = tiH3;
        }
        $(this).parents('.table-cell').find('.xialakuang-xz-input').val(c);
    });

    var heiTXH1 = $('.hei-tc-x h1');
    var heiTXH1IB = $('.hei-tc-x h1 i b');
    heiTXH1.on('click',function(){
        var heiTXH1Ic = $(this).find('i');
        if(heiTXH1Ic.hasClass('none')){
            remc(heiTXH1Ic,'none');
        }else{
            addc(heiTXH1Ic,'none');
        }
    });
    heiTXH1IB.on('click',function(){
        var heiTXH1IHtml = $(this).html();
        $(this).parents('h1').find('p').html(heiTXH1IHtml);
        addc(heiTXH1,'active');
    });

    // $('.hei-a a').eq(1).on('click',function(){
    //     if(!$('.hei-tc-x h1').hasClass('active')){
    //         alert('请选择');
    //         return false;
    //     }
    // });

    $('.shangjia-xinzeng').on('click',function(){
        remc($('.shangjia-xinzeng-t'),'none');
        $('.tc-zhixingx').removeClass('none');
    });

    $('.xintixing-img').on('click',function(){
        remc($('.xintixing-tc'),'none');
    });

    $('.xintixing-img0').on('click',function(){
        remc($('.xintixing-tc0'),'none');
    });

    $('.xintixing-img1').on('click',function(){
        remc($('.xintixing-tc1'),'none');
    });

    //新增弹窗
    $('.shangjia-shanchu').on('click',function(){
        remc($('.shanchu-tc'),'none');
    });

    $('.yuding-shanchu').on('click',function(){
        remc($('.shanchu-tc'),'none');
    });

    $('.duanxin-fabu').on('click',function(){
        remc($('.tijiao-ok1'),'none');
        addc($(this).parents('.lunbotc'),'none');
    });

    $('.xinzengyuliu-a').on('click',function(){
        remc($('.xinzengyuliu-tc'),'none');
    });

    $('.zhuangtai-a').on('click',function(){
        remc($('.zhuangtai2-tc'),'none');
    });

    var yuliuguanli3IHtml = Number($('.yuliuguanli-3 i').html());
    yuliuguanli3IHtml > 9?$('.yuliuguanli-3 i').html('…'):$('.yuliuguanli-3 i').html(yuliuguanli3IHtml);



    var dingdanAChazhaoXialakuangXzBI = $('.dingdan-a-chazhao .xialakuang-xz b i');
    dingdanAChazhaoXialakuangXzBI.on('click',function(){
        var thhtml1 = $(this).parent().find('h1').html();
        var thhtml2 = $(this).parent().find('h2').html();
        $(this).parents('.dingdan-a-chazhao').find('input').val(thhtml1+' - '+thhtml2);

        console.log(thhtml1,thhtml2);
    });
    $('.dingdan-chazhao').on('click',function(){
        var thixi = $(this).parent().find('.xialakuang-xz');
        if(thixi.hasClass('none')){
            remc(thixi,'none');
        }else{
            addc(thixi,'none');
        }
    });

    var shangjiaTextInput4Html = '<div class="shangjia-text-input2 shangjia-text-input4"><em><img src="img/jia-b.png"><img src="img/jian-b.png"></em><input type="text"><input type="text"></div>';
    function biaoqiansy(){
        $('.shangjia-text-input4').each(function(){
            $(this).find('em').find('img').eq(0).unbind('click');
            $(this).find('em').find('img').eq(0).on('click',function(){
                $(this).parents('.shangjia-text-input4').after(shangjiaTextInput4Html);
                biaoqiansy();
            });
            $(this).find('em').find('img').eq(1).on('click',function(){
                $(this).parents('.shangjia-text-input4').remove();
            });
        });
    }
    biaoqiansy();

    var shangjiaMoCenHtml = '<i><input type="text"><img src="img/morenj.png"><img src="img/morenji.png"></i>';
    function biaoqiansy1(){
        $('.shangjia-mo-cen i').each(function(){
            $(this).find('img').eq(0).unbind('click');
            $(this).find('img').eq(0).on('click',function(){
                $(this).parent().after(shangjiaMoCenHtml);
                biaoqiansy1();
            });
            $(this).find('img').eq(1).on('click',function(){
                $(this).parent().remove();
            });
        });
    }
    biaoqiansy1();

    var shangjiaTextBiaoqianSpanHtml = '<span><input type="text"><img src="img/tianjia.png" class="tinajia-biaoqian"><img src="img/shanchu.png" class="shanchu-biaoqian"></span>';
    function biaoqiansy2(){
        $('.shangjia-text-biaoqian span').each(function(){
            $(this).find('img').eq(0).unbind('click');
            $(this).find('img').eq(0).on('click',function(){
                $(this).parent().after(shangjiaTextBiaoqianSpanHtml);
                biaoqiansy2();
            });
            $(this).find('img').eq(1).on('click',function(){
                $(this).parent().remove();
            });
        });
    }
    biaoqiansy2();

    function addc(a,b){return a.addClass(b)}
    function remc(a,b){return a.removeClass(b)}
    function t3d(name,x,y){return name.css({'transform':'translate3d('+x+', '+y+', 0)'})};

});