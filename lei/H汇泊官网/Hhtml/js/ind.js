$(function(){

    var casesNav3 = $('.cases-nav3'); //导航
    var casesLeftBt = $('.cases-left-bt');//标题
    var casesImgAni = $('.cases-img-ani'); //左图
    var casesImgLeft = $('.cases-img-left');
    var casesImgRight = $('.cases-img-right'); //右图

    jiaAB(casesImgLeft);
    jiaAB(casesImgRight);
    jiaAB(casesLeftBt);
    
    var casesNav3X = casesNav3.find('b');
    var casesLeftBtX = casesLeftBt.find('.cases-bt-a')
    var casesImgLeftX = casesImgLeft.find('.cases-img-left-img');
    var casesImgRightX = casesImgRight.find('.cases-img-right-img');

    var aa=0,ab=0,cb=0,db=0,eb=0;
    var boTime = null;

    casesLeftBt.css({'top':'-'+(casesLeftBtX.length-1)*100+'%'});
    casesImgRightX.each(function(){
        var thLen = $(this).find('img').length;
        $(this).find('img').each(function(i){
            $(this).css({'z-index':thLen-i});
        });
    });

    rightImg(0,2000);

    function jiaAB(a){
        var cenA = a;
        var cenB = cenA.html();
        cenA.html(cenB+cenB);
    }

    casesNav3.on('click','b',function(){
        var thI = $(this).parent().index();
        ClickBI(thI,0);
    });

    var aHref = Number(GetQueryString('act'));
    aHref===''?aHref=0:aHref;
    casesNav3.find('b').eq(aHref).trigger('click');

    casesNav3.find('em').on('click','i',function(){
        var pathI = $(this).parents('span').index();
        var thI = $(this).index();
        console.log(thI+pathI)
        ClickBI(pathI,thI);
    });

    function ClickBI(a,b) {
        var a = a;
        var b = b;
        if(a === casesLeftBtX.length/2){
            tubiaoAniB(0);
            aa = 0;
        }
        if(!casesImgAni.is(":animated")){
            var bo = 0;
            casesImgLeftX.each(function(){
                if(Number($(this).attr('data-in'))===a){
                    bo = $(this).index()+b;
                    return false;
                }
            });

            aa = bo;
            if(aa>casesLeftBtX.length/2-1){
                aa = 0;
            }else if(aa<=0){
                aa=casesLeftBtX.length/2;
            }
            tubiaoAni(aa,2000);
            rightImg(aa,2000);
        }
    }

    $(document).bind('mousewheel', function(e,i) {
        if(!casesImgAni.is(":animated")){
            clearInterval(boTime);
            if(i > 0){
                if(aa<=0){
                    aa=casesLeftBtX.length/2;
                    tubiaoAniB(aa);
                }
                aa--;
            }else{
                aa++;
            }
            tubiaoAni(aa,2000);
            rightImg(aa,2000);
        }
    });

    //图标ani
    function tubiaoAni(a,b){
        var b = b;
        var ca = Number(casesImgLeftX.eq(aa).attr('data-in'));
        casesNav3X.removeClass('active');
        casesNav3X.eq(ca).addClass('active');

        var c = aa*100;
        casesImgAni.stop(true).animate({
            'top':'-'+c+'%'
        },b,"easeOutQuad");
        // casesImgRight.animate({
        //     'top':'-'+c+'%'
        // },b,"easeOutQuad");
        var d = (casesLeftBtX.length-1-a)*100;
        casesLeftBt.stop(true).animate({
            'top':'-'+d+'%'
        },b,"easeOutQuad");


    }

    //left图片
    function rightImg(a,b){
        clearInterval(boTime);
        var b = b;
        var c = 0;
        var cirxImg = casesImgRightX.eq(aa).find('img');
        cirxImg.css({
            'opacity':'1',
            'filter':'alpha(opacity=100)'
        });

        if(aa>casesLeftBtX.length/2-1){
            aa = 0;
            clearTimeout(setTime);
            var setTime = setTimeout(function(){
                tubiaoAniB(aa);
            },b);
        }

        var cirxImg = casesImgRightX.eq(aa).find('img');
        cirxImg.css({
            'opacity':'1',
            'filter':'alpha(opacity=100)'
        });
        boTime = setInterval(function(){
            cirxImg.eq(c).stop(true).animate({
                'opacity':'0',
                'filter':'alpha(opacity=0)'
            },b,"easeOutQuad");
            c++;
            if(c === cirxImg.length){
                clearInterval(boTime);
                aa++;
                tubiaoAni(aa,b);
                rightImg(aa,b);
            }
        },b*2);
    }

    function tubiaoAniB(a){
        var c = a*100;
        casesImgAni.css({
            'top':'-'+c+'%'
        });
        // casesImgRight.animate({
        //     'top':'-'+c+'%'
        // },b,"easeOutQuad");
        var d = (casesLeftBtX.length-1-a)*100;
        casesLeftBt.css({
            'top':'-'+d+'%'
        });
    }

    function GetQueryString(name){
         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
         var r = window.location.search.substr(1).match(reg);
         if(r!=null)return  unescape(r[2]); return null;
    }

});