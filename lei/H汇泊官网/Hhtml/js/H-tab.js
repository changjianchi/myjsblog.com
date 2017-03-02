function HuadongmenTabPc(za,zb,zc,sp){
    this.zA = $(za);
    this.zB = $(zb);
    this.zC = $(zc);

    var thZa = this.zA;
    var thZb = this.zB;
    var thZc = this.zC;

    var zAWidth = thZa.width();
    var zBWidth = thZb.width();
    var zCWidth = zAWidth-zBWidth*thZb.length;
    thZc.css({
        'width':zCWidth+'px'
    });
    thZb.each(function(i){
        $(this).css({'z-index':i});
        if($(this).hasClass('tab-right')){
            $(this).css({
                'left':zCWidth+'px'
            });
        }
    });

    thZb.on('click',function(){
        var tInd = $(this).index();
        if($(this).hasClass('tab-right')){
            thZb.each(function(i){
                if(i <= tInd){
                    $(this).removeClass('tab-right');
                    $(this).animate({
                        'left':'0'
                    },sp);
                }
            });
        }else{
            thZb.each(function(i){
                if(i > tInd){
                    $(this).addClass('tab-right');
                    $(this).animate({
                        'left':zCWidth+'px'
                    },sp);
                }
            });
        }
        
    });

}
