$(function(){
    var dCenter = $('.d-center')
    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 7.5 + 'px');
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });
// 自适应 end

    var quXiao = $('.quxiao');
    quXiao.on('touchstart',function(){
        $(this).parents('.apptanchuang').addClass('none');
    });

    var cenbujuCen = $('.cenbuju-cen');
    cenbujuCen.each(function(){
        // console.log(String($(this)).length)
        var thte = $(this).html();
        var len = getBLen(thte);
        len>16?$(this).html(thte.slice(0,8)+'...'):thte;
    });

    function getBLen(str) {
        if (str == null) return 0;
        if (typeof str != "string"){
            str += "";
        }
        return str.replace(/[^\x00-\xff]/g,"01").length;
    }

});
        
