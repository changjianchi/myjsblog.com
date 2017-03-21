$(function(){
	var winB = 7.5;
    function fun(){
        var winWidth = $(window).width();
        winWidth>750?winWidth=750:winWidth;
        $('html').css('font-size',winWidth / winB + 'px');
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });
// 自适应 end

	//登陆
	var dengluBut1 = $('.denglu-but1');
	dengluBut1.on('click',function(){
		var nameVal = $('.name').val();
		if(!(/^1[34578]\d{9}$/.test(nameVal))){
			alert('手机号不正确');
			return false;
		}
		var yanzhengmaVal = $('.yanzheng-input').val();
		if(yanzhengmaVal === ''){
			alert('验证码为空');
			return false;
		}
		window.location.href = '登陆.html';
	});

    var daojishi = 0;
    var yanzhengmaA = $('.yanzhengma-a');
    yanzhengmaA.on('click',function(){
        if(!$(this).hasClass('active')){
            var nameVal = $('.name').val();
            if(!(/^1[34578]\d{9}$/.test(nameVal))){
                alert('手机号不正确');
                return false;
            }
            daojishi = 60;
            $(this).addClass('active');
            $(this).html('重新获取('+daojishi+')');
            var boce = setInterval(function(){
                daojishi--;
                yanzhengmaA.html('重新获取('+daojishi+')');
                if(daojishi === 0){
                    yanzhengmaA.html('获取验证码');
                    yanzhengmaA.removeClass('active');
                    clearInterval(boce);
                }
            },1000);
        }
    });
	
    //能力标签添加删除
    var qiyeBiaoqian = $('.qiye-biaoqian');
    var nengliBiaoqian = $('.nengli-biaoqian');

    function biaoqianClick(){
        $('.qiye-biaoqian span').unbind('click');
        $('.qiye-biaoqian span').on('click',function(){
            var thHtml = $(this).html();
            nengliBiaoqian.prepend('<b>'+thHtml+'</b>');
            $(this).remove();
            $('.nengli-biaoqian span').addClass('none');
            $('.biaoqian-shuoming').addClass('none');

            $('.nengli-biaoqian b i').unbind('click');
            $('.nengli-biaoqian b i').click(function(){
                var thHtml = $(this).parent().html();
                qiyeBiaoqian.prepend('<span>'+thHtml+'</span>');
                $(this).parent().remove();
                if($('.nengli-biaoqian b').length === 0){
                    $('.nengli-biaoqian span').removeClass('none');
                    $('.biaoqian-shuoming').removeClass('none');
                }
                biaoqianClick();
            });
        });
    }
    biaoqianClick();

    if($('.nengli-biaoqian b').length != 0){
        $('.nengli-biaoqian span').addClass('none');
        $('.biaoqian-shuoming').addClass('none');
    }
    $('.nengli-biaoqian b i').click(function(){
        var thHtml = $(this).parent().html();
        qiyeBiaoqian.prepend('<span>'+thHtml+'</span>');
        $(this).parent().remove();
        if($('.nengli-biaoqian b').length === 0){
            $('.nengli-biaoqian span').removeClass('none');
            $('.biaoqian-shuoming').removeClass('none');
        }
        biaoqianClick();
    });

    //一件匹配
    var xXTc = $('.x-x-tc');
    var cityBiaoqian = $('.city-biaoqian');
    var cityBiaoqianSpan = $('.city-biaoqian span');
    xXTc.each(function(i){
        $(this).on('click',function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                cityBiaoqian.eq(i).addClass('none');
            }else{
                $(this).addClass('active');
                cityBiaoqian.eq(i).removeClass('none');
            }
        });

        // $(this).find('.city-select1').find('b').find('a').each(function(i){
        //     $(this).attr('data-in',i);
        // });
        cityBiaoqian.eq(i).find('span').on('click',function(){
            var thi = $(this).index();
            var thh = $(this).html();
            var bt2 = $('.qiwang-city-bt2');
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                bt2.eq(i).find('b').find('a').each(function(){
                    var thd = Number($(this).attr('data-in'));
                    console.log(thd);
                    if(thd === thi){
                        $(this).remove();
                    }
                });
            }else{
                if($(this).parent().hasClass('city-danxuan')){
                    $(this).parent().find('span').removeClass('active');
                    bt2.eq(i).find('b').html(null);
                    bt2.eq(i).find('b').prepend('<a data-in="'+thi+'">'+thh+'</a>');
                }else{
                    bt2.eq(i).find('b').prepend('<a data-in="'+thi+'">'+thh+'</a>');
                }

                $(this).parent().find('span.act-buxian').removeClass('active');
                $(this).addClass('active');
                
                if($(this).hasClass('act-buxian')){
                    $(this).parent().find('span').removeClass('active');
                    $(this).addClass('active');
                    bt2.eq(i).find('b').html('<a class="buxian">'+thh+'</a>');
                }else{
                    bt2.eq(i).find('b').find('.buxian').remove();
                }
            }
            
        });

    });

    

    var xingbieNannvSpan = $('.xingbie-nannv span');
    xingbieNannvSpan.on('click',function(){
        xingbieNannvSpan.removeClass('active');
        $(this).addClass('active');
    });

    var tanchuangPipei = $('.tanchuang-pipei');
    var colTcPipei = $('.col-tc-pipei');
    tanchuangPipei.find('i').on('click',function(){
        $(this).parents('.tanchuang-t').addClass('none');
    });
    colTcPipei.on('click',function(){
        $(this).parents('.tanchuang-t').addClass('none');
    });

    var tc1 = $('.tc-1');
    var jinzhi = 1;
    $('.xiala-close').on('click',function(){
        tc1.addClass('none');
        jinzhi = 1;
    });
    
    var citySelect = $('.city-select');
    for(var i=0;i<citySelect.length;i++){
        tanchuang(citySelect.eq(i),i);
    }

    function tanchuang(a,b){
        a.on('click',function(){
            tc1.eq(b).removeClass('none');
            jinzhi = 0;
            if($('.xiala-ok').eq(b).hasClass('xiala-ok1')){
                $('.xiala-ok1').on('click',function(){
                    var thahtml = $(this).parents('.xialabox').find('.xiala-cntul').find('li.active').find('span').html();
                    var thbhtml = $(this).parents('.xialabox').find('.xinzi-cntul').find('li.active').find('span').html();
                    a.find('b').html(thahtml+'~'+thbhtml);
                    tc1.addClass('none');
                    jinzhi = 1;
                });
            }else{
                $('.xiala-ok').eq(b).on('click',function(){
                    var thi = $(this).parents('.xialabox').find('ul').find('li');
                    var thhtml = $(this).parents('.xialabox').find('li.active').find('span').html();
                    a.find('b').html(thhtml);
                    tc1.addClass('none');
                    console.log(a)
                    jinzhi = 1;
                });
            }
            $('.xiala-head').eq(b).find('h2').on('click',function(){
                var thhtml = $(this).html();
                a.find('b').html(thhtml);
                tc1.addClass('none');
                console.log(a)
                jinzhi = 1;
            });
        });
    }

    


    //滑动
    var xialaCnt = $('.xiala-cnt ul');
    var xialaCntLiHeight = xialaCnt.find('li').height();
    var Ay,By,Cy,Dy,Ey,Fy,Cb,Ny,Hi,Hic,Hb,Hbo,Hbl = null;
    xialaCnt.on('touchstart touchend',function(a){
        if(a.type === 'touchstart'){
            Ay = a.touches[0].pageY;
            Cb = $(this);
            Cy = Cb.position().top;
            Cb.css({'transition':''});

            $(this).on('touchmove',function(b){
                By = b.touches[0].pageY;
                Cb.css({
                    'transition':'',
                    'transform':'translate3d(0px, '+((By-Ay))+'px, 0px)'
                });
            });

        }else{
            $(this).unbind('touchmove');
            Ey = Cb.position().top;
            Dy = Ey;
            Cb.find('li').each(function(i){
                Ny = $(this).position().top + Ey + xialaCntLiHeight/2;
                if(Ny > xialaCntLiHeight && xialaCntLiHeight*2 > Ny){
                    Hi = i;
                    return false;
                }
            });
            Dy>xialaCntLiHeight?Hi=0:Hi;
            Dy<xialaCntLiHeight*2-Cb.height()?Hi=Cb.find('li').length-1:Hi;
            Dy = -Hi*xialaCntLiHeight+xialaCntLiHeight;
            Cb.find('li').removeClass('active');Cb.find('li').eq(Hi).addClass('active');
            Cb.css({
                'transition':'all .2s ease',
                'top':Dy+'px',
                'transform':'translate3d(0px, 0px, 0px)'
            });
        }
    });

    var xialaCnt1 = $('.xinzi-cntul');
    var xialaCntLiHeight1 = xialaCnt.find('li').height();
    var Ay1,By1,Cy1,Dy1,Ey1,Fy1,Cb1,Ny1,Hi1 = null;
    xialaCnt1.on('touchstart touchend',function(a){
        if(a.type === 'touchstart'){
            Ay1 = a.touches[0].pageY;
            Cb1 = $(this);
            Cy1 = Cb1.position().top;
            Cb1.css({'transition':''});

            $(this).on('touchmove',function(b){
                By1 = b.touches[0].pageY;
                Cb1.css({
                    'transition':'',
                    'transform':'translate3d(0px, '+((By1-Ay1))+'px, 0px)'
                });
            });

        }else{
            $(this).unbind('touchmove');
            Ey1 = Cb1.position().top;
            Dy1 = Ey1;
            Cb1.find('li').each(function(i){
                Ny1 = $(this).position().top + Ey1 + xialaCntLiHeight/2;
                if(Ny1 > xialaCntLiHeight && xialaCntLiHeight*2 > Ny1){
                    Hi1 = i;
                    return false;
                }
            });
            Dy1>xialaCntLiHeight?Hi1=0:Hi1;
            Dy1<xialaCntLiHeight*2-Cb1.height()?Hi1=Cb1.find('li').length-1:Hi1;
            Dy1 = -Hi1*xialaCntLiHeight+xialaCntLiHeight;
            Cb1.find('li').removeClass('active');Cb1.find('li').eq(Hi1).addClass('active');
            Cb1.css({
                'transition':'all .2s ease',
                'top':Dy1+'px',
                'transform':'translate3d(0px, 0px, 0px)'
            });
        }
    });

    tc1.find('ul').find('li').on('click',function(){
        $(this).parent().find('li').removeClass('active');
        $(this).addClass('active');
        var thInd = $(this).index();
        Dy = -thInd*xialaCntLiHeight+xialaCntLiHeight;
        $(this).parent().css({
            'transition':'all .2s ease',
            'top':Dy+'px',
            'transform':'translate3d(0px, 0px, 0px)'
        });

    });

    $('.xiala-cntul').each(function(){
        var ths = $(this).find('li.active').index();
        $(this).css('top','-'+xialaCntLiHeight*(ths-1)+'px');
    });
    $('.xinzi-cntul').each(function(){
        var ths = $(this).find('li.active').index();
        $(this).css('top','-'+xialaCntLiHeight*(ths-1)+'px');
    });
    


    document.addEventListener("touchmove",function(e){
        if(jinzhi==0){
            e.preventDefault();
            e.stopPropagation();
        }
    },false);
    
    //确认按钮
    var gerenxinxiQuerenA = $('.gerenxinxi-queren a');
    gerenxinxiQuerenA.on('click',function(){
        $('.qiwang-city-bt').removeClass('red');
        var cityBiaoqian = $('.city-biaoqian');
        var ba = [],baa = 0;
        cityBiaoqian.each(function(i){
            var a = i;
            $(this).find('span').each(function(){
                if($(this).hasClass('active')){
                    ba[a] = 1;
                }else{
                    ba[a] = '';
                }
            });
            if(ba[a] != 1){
                $(this).prev().addClass('red');
            }
            console.log(ba)
        });
        for(var i=0;i<ba.length;i++){
            baa += ba[i];
        }
        
        var citySelectInput = $('.city-select b');
        var bc = [];
        citySelectInput.each(function(i){
            var a = i;
            if($(this).html() != ''){
                bc[a] = 1;
            }
            if(bc[a] != 1){
                $(this).parents('.qiwang-city-bt').addClass('red');
            }
        });

        if(bc.length != citySelectInput.length || baa != cityBiaoqian.length){
            $('.tanchuang-t').removeClass('none');
            return false;
        }

        window.location.href = "#";

    });



});