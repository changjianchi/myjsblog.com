$(function(){

    function fun(){
        var winWidth = $(window).width();
        if(winWidth>750){
            winWidth=750;
            $('.cen').addClass('active');
            $('.nav-c').addClass('active');
        }else{
            $('.nav-c').removeClass('active');
            $('.cen').removeClass('active');
        }
        $('html').css('font-size',winWidth / 7.5 + 'px');
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });
// 自适应 end
    
    //下拉菜单
    var xiala = $('.xiala');
    xiala.on('click',function(){
        if($(this).hasClass('active')){
            remc($(this),'active');
            addc($(this).find('.forminp-xiala'),'none');
        }else{
            addc($(this),'active');
            remc($(this).find('.forminp-xiala'),'none');
        }
    });
    xiala.find('.forminp-xiala').find('span').on('click',function(){
        $(this).parents('.xiala').find('i').html($(this).html());
        $(this).parents('.xiala').find('i').css('color','#333');
        $(this).parents('.xiala').find('i').addClass('active');
    });

    //类型选择1-3
    var kehuLeixingI = $('.kehu-leixing i');
    var leixingKG = 0;
    kehuLeixingI.on('click',function(){
        if($(this).hasClass('active')){
            remc($(this),'active');
        }else{
            if($('.kehu-leixing i.active').length === 3){
                return false;
            }
            addc($(this),'active');
        }
    });

    //lad 客户2表单弹窗
    var tijiaoA = $('.tijiao a');
    var tijiaoLad = $('.tijiao-lad');
    var kehu2TopA = $('.kehu2-top a');
    var ladTextSpan = $('.lad-text span');
    tijiaoA.on('click',function(){
        var xiangmum = $('.xiangmuming').val();
        if(xiangmum === ''){
            alert('请填写项目名');
            return false;
        }

        var leixing = $('.leixing');
        if(!leixing.find('i').hasClass('active')){
            alert('请选择类型');
            return false;
        }

        var fabufang = $('.fabufang').val();
        if(fabufang === ''){
            alert('请填写发布方');
            return false;
        }
        
        var jiezhishijianM = $('.jiezhishijian-m').val();
        if(jiezhishijianM === '' || Number(jiezhishijianM) < 1 || Number(jiezhishijianM) > 12){
            alert('请正确填写截止时间');
            return false;
        }
        
        var jiezhishijianD = $('.jiezhishijian-D').val();
        if(jiezhishijianD === '' || Number(jiezhishijianD) < 1 || Number(jiezhishijianD) > 31){
            alert('请正确填写截止时间');
            return false;
        }
        
        var kehuLeixingIActive = $('.kehu-leixing i.active');
        if(kehuLeixingIActive.length === 0){
            alert('请选择项目风格');
            return false;
        }
        
        var kehu2Text = $('.kehu2-text').val();
        if(kehu2Text === ''){
            alert('请填写项目概述');
            return false;
        }
        
        var xiangmuyusuanI = $('.xiangmuyusuan i');
        if(xiangmum === ''){
            alert('请选择项目预算');
            return false;
        }
        
        ladTextSpan.eq(0).find('em').find('i').html(xiangmum);
        ladTextSpan.eq(1).find('em').find('i').html(leixing.find('i').html());
        ladTextSpan.eq(2).find('em').find('i').html(fabufang);
        ladTextSpan.eq(3).find('em').find('i').html(jiezhishijianM+'月'+jiezhishijianM+'日');
        var cba = '';
        kehuLeixingIActive.each(function(){
            cba+=($(this).html()+'&nbsp;');
        });
        ladTextSpan.eq(4).find('em').find('i').html(cba);
        ladTextSpan.eq(5).find('em').find('i').html(xiangmuyusuanI.html());
        ladTextSpan.eq(6).find('em').find('i').html(kehu2Text);

        htmlbodycenH100(0);
        addc(tijiaoLad,'active');
    });
    kehu2TopA.on('click',function(){
        htmlbodycenH100(1);
        remc(tijiaoLad,'active');
    });
    function htmlbodycenH100(e){
        if(e===0){
            $('html').css('height','100%');
            $('body').css('height','100%');
            $('.cen').css('height','100%');
        }else{
            setTimeout(function(){
                $('html').css('height','auto');
                $('body').css('height','auto');
                $('.cen').css('height','auto');
            },300)
        }
    }

    var ladXieyiXiangmu = $('.lad-xieyi-xiangmu');
    ladXieyiXiangmu.on('click',function(){
        if($(this).find('i').hasClass('active')){
            remc($(this).find('i'),'active');
        }else{
            remc(ladXieyiXiangmu.find('i'),'active');
            addc($(this).find('i'),'active');
        }
    });

















    function addc(a,b){return a.addClass(b)}
    function remc(a,b){return a.removeClass(b)}

});

