$(function(){
    //按钮点击选中
    var TestTwoUl = $('.test-two-ul'),
        TestThreeUlLi = $('.test-three-ul li');
    TestTwoUl.on('click','li',function(){
        if($(this).find('em').hasClass('testtwoem')){
            $(this).find('em').removeClass('testtwoem');
        }else{
            $(this).find('em').addClass('testtwoem');
        }
    });
    TestThreeUlLi.on('click','i',function(){
        if($(this).hasClass('testtwoem')){
            $(this).removeClass('testtwoem');
        }else{
            $(this).parent().find('i').removeClass('testtwoem');
            $(this).addClass('testtwoem');
        }
    });

    var FourCanSpanEm = $('.test-four-canbj span em'),
        FourCanSpan = $('.test-four-canbj span'),
        FourCanI = $('.test-four-canbj i'),
        Fob = 10,  //总段数
        FourEm = [],
        FourMx = [150,150,5,5,150,294,294],
        FourMy = [139,5,74,211,280,211,74],
        IMx = [98,98,-5,-5,98,202,202],
        IMy = [115,-5,54,174,235,173,55],
        XY = function(i,a){
          a[i+1] = parseInt((a[i+1]-a[0])/Fob*FourEm[i]+a[0]);
        };
    FourCanSpanEm.each(function(i){
        FourEm[i] = FourCanSpanEm.eq(i).html();
        XY(i,FourMy);
        XY(i,FourMx);
        XY(i,IMx);
        XY(i,IMy);
        FourCanI.eq(i).css({'left':IMx[i+1]+'px','top':IMy[i+1]+'px'});
    });
    function Fcanl(){
        var Fcan = $('.four-can'),
            Fcans = Fcan.get(0).getContext('2d');
        Fcans.moveTo(FourMx[1],FourMy[1]);
        Fcans.lineTo(FourMx[2],FourMy[2]);
        Fcans.lineTo(FourMx[3],FourMy[3]);
        Fcans.lineTo(FourMx[4],FourMy[4]);
        Fcans.lineTo(FourMx[5],FourMy[5]);
        Fcans.lineTo(FourMx[6],FourMy[6]);
        Fcans.closePath();
        Fcans.fillStyle = 'rgba(0,153,255,0.3)'; 
        Fcans.fill();
        Fcans.lineWidth=8
        Fcans.strokeStyle = '#0099ff';
        Fcans.stroke();
    }
    Fcanl();

    var TFT = $('.t-f-t');
    if($(window).width() > 768){
        FourCanI.on('mouseover mouseout',function(a){
            if(a.type === 'mouseover'){
                var ind = $(this).index() - 7;
                $(this).addClass('t-f-tno');
                FourCanSpan.eq(ind).addClass('t-f-tyes');
            }else{
                $(this).removeClass('t-f-tno');
                FourCanSpan.removeClass('t-f-tyes');
            }
            console.log(ind)
        });
    }else{
        FourCanI.on('click',function(){
            if($(this).hasClass('t-f-tno')){
                FourCanI.removeClass('t-f-tno');
                FourCanSpan.removeClass('t-f-tyes');
            }else{
                FourCanI.removeClass('t-f-tno');
                FourCanSpan.removeClass('t-f-tyes');
                var ind = $(this).index() - 7;
                $(this).addClass('t-f-tno');
                FourCanSpan.eq(ind).addClass('t-f-tyes');
            }
        });
    }
})