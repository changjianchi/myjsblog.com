$(function(){
    var zuo = $('.left'),
        you = $('.right'),
        tu = $('.ban3-cen span'),
        ding = $('.ban3-lo'),
        dian = $('.banner3'),
        tuimg = $('.ban3-lo span'),
        kuan = tu.width(),
        ban3CenbSpan = $('.ban3-cenb span'),
        wei,
        ths,
        aaa,
        zidong;
    you.on('click',function(){
        yc();
    });
    zuo.on('click',function(){
        zc();
    });
    tu.on('click',function(){
       ths = $(this).index();
       if(ths<1){
            zc();
            return false;
       }else if(ths>2){
            yc();
            return false;
       }
    });
    dian.on('mouseover mouseout',function(c){
        if(zuo.offset().left > 10){
        if(c.type === 'mouseover'){
            clearInterval(zidong);
            zuo.stop(true).animate({opacity:'1',filter:'alpha(opacity: 100)'},200);
            you.stop(true).animate({opacity:'1',filter:'alpha(opacity: 100)'},200);
        }else{
            zidong = setInterval(yc,2000);
            zuo.stop(true).animate({opacity:'0',filter:'alpha(opacity: 0)'},200);
            you.stop(true).animate({opacity:'0',filter:'alpha(opacity: 0)'},200);
        }}
    });
    function aa(){
        aaa = $('.ban3-lo span:nth-of-type(3)').attr('class').substring(2, 3);
        ban3CenbSpan.addClass('none');
        ban3CenbSpan.eq(Number(aaa)).removeClass('none');
        console.log(Number(aaa)+1);
    }
    function yc(){
        $('.ban3-lo span:nth-of-type(1)').css('z-index','1');
        wei = $('.ban3-lo span:first');
        ding.stop(true).append(wei);
        dong();
        aa();
    }
    function zc(){
        $('.ban3-lo span:nth-of-type(5)').css('z-index','1');
        wei = $('.ban3-lo span:last');
        ding.stop(true).prepend(wei);
        dong();
        aa();
    }
    function dong(){
        $('.ban3-lo span:nth-of-type(1)').animate({
            'width':'130px',
            'top':'208px',
            'left':'75px',
            zIndex:'10'
        },300);
        $('.ban3-lo span:nth-of-type(2)').animate({
            'width':'205px',
            'top':'183px',
            'left':'214px',
            zIndex:'20'
        },300);
        $('.ban3-lo span:nth-of-type(3)').animate({
            'width':'277px',
            'top':'145px',
            'left':'428px',
            zIndex:'30'
        },300);
        $('.ban3-lo span:nth-of-type(4)').animate({
            'width':'205px',
            'top':'183px',
            'left':'713px',
            zIndex:'20'
        },300);
        $('.ban3-lo span:nth-of-type(5)').animate({
            'width':'130px',
            'top':'208px',
            'left':'926px',
            zIndex:'10'
        },300);
    }
    zidong = setInterval(yc(),2000);
});