$(function(){
    var dCenter = $('.d-center')
    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 7.5 + 'px');
        if(winWidth < 352){
            dCenter.css('overflow','hidden');
        }else{
            dCenter.css('overflow','visible');
        }
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });
// 自适应 end
    var carNav = $('.car-nav');
    var carNavTop = carNav.offset().top;
    var carList = $('.car-list');
    $(window).on('scroll',function(){
        var winTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        if(winTop > carNavTop){
            Xtop();
            // carNav.css('top',winTop-carNavTop);
        }else{
            Dtop();
            // carNav.css('top',0);
        }
    });
    function Xtop(){
        carNav.css({'position':'fixed'});
    }
    function Dtop(){
        carNav.css({'position':'relative'});
    }
// 导航 end
    var dCar = $('.d-car'),
        qieHhuan = $('.qiehuan'),
        qH = 0;
    dCar.on('touchstart touchend',function(e){
        if(e.type === 'touchstart'){
            var dC1 = e.touches[0].pageX;
            dC21 = 0;
            $(this).on('touchmove',function(e){
                var dC2 = e.touches[0].pageX;
                dC21 = dC2-dC1;
            });  
        }else{
            $(this).unbind('touchmove');
            if(dC21 < -100){
                qH--;qH<0?qH=qieHhuan.length-1:qH;
            }else if(dC21 > 100){
                qH++;qH>qieHhuan.length-1?qH=0:qH;
            }
            qieHhuan.addClass('none');
            qieHhuan.eq(qH).removeClass('none');
            dC21 = 0;
        }
    });
    var leftFront = $('.left-front'),
        rightFront = $('.right-front'),
        leftBack = $('.left-back'),
        rightBack = $('.left-back');
    //滑屏切换部分
    var Acheding = $('.cheding-a'),
        Ahoubaoxiangang = $('.houbaoxiangang-a'),
        Ahouchegai = $('.houchegai-a'),
        Ajigai = $('.jigai-a'),
        Aqianbaoxiangang = $('.qianbaoxiangang-a'),
        Ayouhoushijing = $('.youhoushijing-a'),
        Azuohoumen = $('.zuohoumen-a'),
        Azuohouyiziban = $('.zuohouyiziban-a'),
        Azuoqianmen = $('.zuoqianmen-a'),
        Azuoqianyiziban = $('.zuoqianyiziban-a'),
        Azuoqunbian = $('.zuoqunbian-a'),
        Azuohoushijing = $('.zuohoushijing-a'),
        Azuohoumenbashou = $('.zuohoumenbashou-a'),
        Azuoqianmenbashou = $('.zuoqianmenbashou-a'),
        Ayouqianmenbashou = $('.youqianmenbashou-a'),
        Ayouhoumenbashou = $('.youhoumenbashou-a'),
        Ayouqianmen = $('.youqianmen-a'),
        Ayouhoumen = $('.youhoumen-a'),
        Ayouqianyiziban = $('.youqianyiziban-a'),
        Ayouhouyiziban = $('.youhouyiziban-a'),
        Ayouqunbian = $('.youqunbian-a');
    //汽车点击部分 end
    var cheding = $('.cheding'),
        houbaoxiangang = $('.houbaoxiangang'),
        houchegai = $('.houchegai'),
        jigai = $('.jigai'),
        qianbaoxiangang = $('.qianbaoxiangang'),
        youfanguangjing = $('.youfanguangjing'),
        zuohoumen = $('.zuohoumen'),
        zuohouyiziban = $('.zuohouyiziban'),
        zuoqianmen = $('.zuoqianmen'),
        zuoqianyiziban = $('.zuoqianyiziban'),
        zuoqunbian = $('.zuoqunbian'),
        zuohoushijing = $('.zuohoushijing'),
        zuoqianmenbashou = $('.zuoqianmenbashou'),
        zuohoumenbashou = $('.zuohoumenbashou'),
        youhoushijing = $('.youhoushijing'),
        youqianmenbashou = $('.youqianmenbashou'),
        youhoumenbashou = $('.youhoumenbashou'),
        youqianmen = $('.youqianmen'),
        youhoumen = $('.youhoumen'),
        youqianyiziban = $('.youqianyiziban'),
        youhouyiziban = $('.youhouyiziban'),
        youqunbian = $('.youqunbian');

    var zuohoumenbashouX = $('.zuohoumenbashou-x'),
        zuohoushijingX = $('.zuohoushijing-x'),
        zuoqianmenbashouX = $('.zuoqianmenbashou-x'),
        zuoqunbianX = $('.zuoqunbian-x'),
        youhoumenbashouX = $('.youhoumenbashou-x'),
        youhoushijingX = $('.youhoushijing-x'),
        youqianmenbashouX = $('.youqianmenbashou-x'),
        youqunbianX = $('.youqunbian-x');
    //汽车覆盖部分
    dianji(Acheding,cheding);
    dianji(Ahoubaoxiangang,houbaoxiangang);
    dianji(Ahouchegai,houchegai);
    dianji(Ajigai,jigai);
    dianji(Aqianbaoxiangang,qianbaoxiangang);
    dianji(Ayouhoushijing,youhoushijing);
    dianji(Azuohoumen,zuohoumen);
    dianji(Azuohouyiziban,zuohouyiziban);
    dianji(Azuoqianmen,zuoqianmen);
    dianji(Azuoqianyiziban,zuoqianyiziban);
    dianji(Azuoqunbian,zuoqunbian);
    dianji(Azuohoushijing,zuohoushijing);
    dianji(Azuohoumenbashou,zuohoumenbashou);
    dianji(Azuoqianmenbashou,zuoqianmenbashou);
    dianji(Ayouqianmenbashou,youqianmenbashou);
    dianji(Ayouhoumenbashou,youhoumenbashou);
    dianji(Ayouqianmen,youqianmen);
    dianji(Ayouhoumen,youhoumen);
    dianji(Ayouqianyiziban,youqianyiziban);
    dianji(Ayouhouyiziban,youhouyiziban);
    dianji(Ayouqunbian,youqunbian);
    //小部件
    xiaobujian(zuohoumenbashouX,zuohoumenbashou);
    xiaobujian(zuohoushijingX,zuohoushijing);
    xiaobujian(zuoqianmenbashouX,zuoqianmenbashou);
    xiaobujian(zuoqunbianX,zuoqunbian);
    xiaobujian(youhoumenbashouX,youhoumenbashou);
    xiaobujian(youhoushijingX,youhoushijing);
    xiaobujian(youqianmenbashouX,youqianmenbashou);
    xiaobujian(youqunbianX,youqunbian);

    function dianji(aa,ab){
        aa.on('click',function(){
            tuqi(ab);
        });
    }
    function tuqi(ac){
        ac.hasClass('none')?ac.removeClass('none'):ac.addClass('none');
    }
    function xiaobujian(ad,ac){
        ad.on('touchstart',function(){
            if($(this).find('img').hasClass('none')){
                $(this).find('img').removeClass('none');
            }else{
                $(this).find('img').addClass('none');
            }
            tuqi(ac);
        });
    }
    //小部件弹出
    var xbj = $('.xiaobujian'),
        csax = $('.cheshenaoxian'),
        xbjCen = $('.xiaobujian-cen'),
        csaxCen = $('.cheshenaoxian-cen'),
        shangfunav = $('.shangfunav'),
        xdCarB = $('.xd-car b'),
        sfsd = 250;  //小部件上滑速度
    xbj.on('touchstart',function(){
        erjinav();
        xbjCen.removeClass('none');
        csaxCen.addClass('none');
    });
    csax.on('touchstart',function(){
        erjinav();
        xbjCen.addClass('none');
        csaxCen.removeClass('none');
    });
    xdCarB.on('touchstart',function(){
        erjinav();
    });
    function erjinav(){
        if(xbj.hasClass('none')){
            csax.removeClass('none');
            xbj.removeClass('none');
            shangfunav.animate({
                'height':'.82rem',
                'margin-top':'220px'
            },sfsd);
        }else{
            csax.addClass('none');
            xbj.addClass('none');
            shangfunav.animate({
                'height':'5.02rem',
                'margin-top':'0px'
            },sfsd);
        }
    }
// 车凹陷加减
    var aoxianGB = $('.aoxian-g b'),
        aoxianGI = $('.aoxian-g i');
    aoxianGB.on('touchstart',function(){
        var aoxianhtml = Number($(this).siblings('em').html());
        aoxianhtml++;
        $(this).siblings('em').html(aoxianhtml);
    });
    aoxianGI.on('touchstart',function(){
        var aoxianhtml = Number($(this).siblings('em').html());
        aoxianhtml<=0?aoxianhtml=0:aoxianhtml--;
        $(this).siblings('em').html(aoxianhtml);
    });
//nav qiehuan
    var carNavA = $('.car-nav a'),
        nav4s = $('.nav4s'),
        navzh = $('.navzh'),
        navks = $('.navks'),
        nav4sA = $('.nav4s-a'),
        navzhA = $('.navzh-a'),
        navksA = $('.navks-a');
    navqiehuan(nav4s,nav4sA);
    navqiehuan(navzh,navzhA);
    navqiehuan(navks,navksA);
    function navqiehuan(nav,nava){
        nav.on('touchstart',function(){
            carNavA.removeClass('active');
            $(this).addClass('active');
            carList.addClass('none');
            nava.removeClass('none');
        });
    }
});
        
