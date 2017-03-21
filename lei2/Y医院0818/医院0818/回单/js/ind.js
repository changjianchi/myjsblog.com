$(function(){

    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 6.4 + 'px');
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });
// 自适应 end
    

    //出入院切换
    var RuyuanChuyuanSpan = $('.ruyuan-chuyuan span');
    var ChuYuanMingXiCen = $('.ChuYuanMingXi-cen');
    RuyuanChuyuanSpan.on('touchstart',function(){
        var thInd = $(this).index();
        addc(ChuYuanMingXiCen,'none');
        remc(ChuYuanMingXiCen.eq(thInd),'none');
        remc(RuyuanChuyuanSpan,'active');
        addc($(this),'active');
    });

    //baby切换
    var babyBabySpanI = $('.baby-baby span i');
    var babyBabyEm = $('.baby-baby em');
    var babyBabyEmI = $('.baby-baby em i');
    babyBabySpanI.on('touchstart',function(){
        var thInd = $(this).index();
        remc(babyBabySpanI,'active');
        addc($(this),'active');
        addc(babyBabyEm,'none');
        if(thInd === 2){
            remc(babyBabyEm,'none');
        }
    });
    babyBabyEmI.on('touchstart',function(){
        remc(babyBabyEmI,'active');
        addc($(this),'active');
    });

    //父母切换
    var fuMuISpan = $('.fu-mu i span');
    fuMuISpan.on('touchstart',function(){
        remc(fuMuISpan,'active');
        addc($(this),'active');
    });

    //取消弹窗
    var quxiaoT = $('.quxiao-t');
    $('.quxiao-t').on('touchstart',function(){
        addc($(this).parents('.riqi-t'),'none');
    });

    //统计页，动画
    var baogaoBannerSpanEmHtml = Number($('.baogao-banner span em').html());
    var zuobiao = $('.zuobiao');
    var boc = 0;
    zuobiao.css({'left':baogaoBannerSpanEmHtml+'%'});
    var tongjiAni = setInterval(function(){
        zuobiao.html(boc);
        boc++;
        if(boc>baogaoBannerSpanEmHtml){
            clearInterval(tongjiAni);
        }
    },1000/(baogaoBannerSpanEmHtml/3));

//交互

    var phy = /^(((13[0-9]|14[0-9]|15[0-9]|18[0-9]))+\d{8})$/ ; //是否手机号
    var reg =   /^[0-9]*$/; //是否数字    
    var body = $('body');
    
    //提交登记信息    
    var tijiaodengjixinxi = $('.tijiaodengjixinxi');

    tijiaodengjixinxi.on('touchstart',function(){
        var babyBsdayInputVal = $('.baby-bsday input').val();
        if(babyBsdayInputVal === ''){
            tanc('生日不可为空');
            return false;
        }
        if($('.baby-baby span').find('.active').index() == 2){
            window.location.href='XinShengErShuJu-shuangtai.html';
        }else{
            window.location.href='XinShengErShuJu.html';
        }
        
    });

    //注册
    var zhucezhuce = $('.zhucezhuce');
    var oneInputYzSpanA = $('.one-input-yz span a');

    zhucezhuce.on('touchstart',function(){
        var shoujihaoVal = $('.shoujihao').val();
        if(!phy.test(shoujihaoVal)){
            tanc('请检查手机号码是否输入正确');
            return false;
        }
        var oneInputYz = $('.one-input-yz span input').val();
        if(oneInputYz.length != 4){
            tanc('验证码应该是4位数字');
            return false;
        }
        var shezhimima = $('.shezhimima').val();
        if(shezhimima === ''){
            tanc('密码为空');
            return false;
        }
        window.location.href='ZhuCeChengGong.html';
    });

    var yanzhengc = 60;
    oneInputYzSpanA.on('touchstart',function(){
        if(!$(this).hasClass('active')){
            var shoujihaoVal = $('.shoujihao').val();
            if(!phy.test(shoujihaoVal)){
                tanc('请检查手机号码是否输入正确');
                return false;
            }
            console.log(1)
            addc($(this),'active');
            $(this).html(yanzhengc+'秒后获取');
            var time60 = setInterval(function(){
                if(yanzhengc != 0){
                    yanzhengc--;
                    oneInputYzSpanA.html(yanzhengc+'秒后获取');
                }else{
                    remc(oneInputYzSpanA,'active');
                    oneInputYzSpanA.html('获取验证码');
                    clearInterval(time60);
                }
            },1000);
        }
    });

    //查看出院指南
    var chakanchuyuanzhinan = $('.chakanchuyuanzhinan');

    chakanchuyuanzhinan.on('touchstart',function(){
        var chuyuanriqiVal = $('.chuyuanriqi').val();
        if(chuyuanriqiVal === ''){
            tanc('日期不能为空');
            return false;
        }
        window.location.href='#';
    });

    //提交登记信息
    var tijiaodengjixinxi = $('.tijiaodengjixinxi');

    tijiaodengjixinxi.on('touchstart',function(){
        var chuyuanriqiVal = $('.chuyuanriqidengji').val();
        if(chuyuanriqiVal === ''){
            tanc('日期不能为空');
            return false;
        }

        window.location.href='#';
    });

    //档案-姓名 下一步
    var chanfuxiayibu = $('.chanfuxiayibu');

    chanfuxiayibu.on('touchstart',function(){
        var chanfuxingming = $('.chanfuxingming').val();
        if(chanfuxingming === '' || chanfuxingming.length > 20){
            tanc('请正确填写产妇姓名');
            return false;
        }
        var danganhao = $('.danganhao').val();
        if(danganhao === '' || danganhao.length > 20){
            tanc('请正确填写档案号');
            return false;
        }
        window.location.href='RuYuanDengJi2.html';
    });

    //档案-手机号 下一步
    var shoujixiayibu = $('.shoujixiayibu');

    shoujixiayibu.on('touchstart',function(){
        var chanfunianling = $('.chanfunianling').val();
        if(chanfunianling === '' || Number(chanfunianling).length > 2 || Number(chanfunianling) <= 20 || Number(chanfunianling) >= 60){
            tanc('请检查产妇年龄是否输入正确');
            return false;
        }
        var yuchanqi = $('.yuchanqi').val();
        if(yuchanqi === ''){
            tanc('预产期不可为空');
            return false;
        }
        var chanfushoujihao = $('.chanfushoujihao').val();
        if(!phy.test(chanfushoujihao)){
            tanc('请检查产妇手机是否输入正确');
            return false;
        }
        var airenshoujihao = $('.airenshoujihao').val();
        if(!phy.test(airenshoujihao)){
            tanc('请检查爱人手机是否输入正确');
            return false;
        }
        window.location.href='#';
    });

    //查看发育测评报告-单宝
    var chakanfayucepingbaogao = $('.chakanfayucepingbaogao');

    chakanfayucepingbaogao.on('touchstart',function(){
        var chushengshengao = $('.chushengshengao').val();
        if(chushengshengao === ''){
            tanc('请填写宝宝出生身长');
            return false;
        }
        if(chushengshengao < 20){
            tanc('宝宝身长过小，请检查是否输入错误');
            return false;
        }
        if(chushengshengao > 70){
            tanc('宝宝身长过大，请检查是否输入错误');
            return false;
        }
        if(!reg.test(chushengshengao)){
            tanc('宝宝身长只能是数字');
            return false;
        }
        var chushengtizhong = $('.chushengtizhong').val();
        if(chushengtizhong === ''){
            tanc('请填写宝宝出生体重');
            return false;
        }
        if(chushengtizhong < 1000){
            tanc('宝宝体重过小，请注意体重单位为克');
            return false;
        }
        if(chushengtizhong > 7000){
            tanc('宝宝体重过大，请检查是否输入错误');
            return false;
        }
        if(!reg.test(chushengtizhong)){
            tanc('宝宝体重只能是数字');
            return false;
        }
        window.location.href='BaoGao.html';
    });

    //查看发育测评报告-双宝
    var chakanfayupingcebaogaoShuangbao = $('.chakanfayupingcebaogao-shuangbao');

    chakanfayupingcebaogaoShuangbao.on('touchstart',function(){
        var yihaoshengao = $('.yihaoshengao').val();
        var erhaoshengao = $('.erhaoshengao').val();
        if(yihaoshengao === ''){
            tanc('请填写1号宝宝出生身长');
            return false;
        }
        if(yihaoshengao < 20){
            tanc('1号宝宝身长过小，请检查是否输入错误');
            return false;
        }
        if(yihaoshengao > 70){
            tanc('1号宝宝身长过大，请检查是否输入错误');
            return false;
        }
        if(!reg.test(yihaoshengao)){
            tanc('1号宝宝身长只能是数字');
            return false;
        }
        if(yihaotizhong === ''){
            tanc('请填写1号宝宝出生体重');
            return false;
        }
        if(yihaotizhong < 1000){
            tanc('1号宝宝体重过小，请注意体重单位为克');
            return false;
        }
        if(yihaotizhong > 7000){
            tanc('1号宝宝体重过大，请检查是否输入错误');
            return false;
        }
        if(!reg.test(yihaotizhong)){
            tanc('1号宝宝体重只能是数字');
            return false;
        }

        var yihaotizhong = $('.yihaotizhong').val();
        var erhaotizhong = $('.erhaotizhong').val();
        if(yihaotizhong === ''){
            tanc('请填写1号宝宝出生身长');
            return false;
        }
        if(yihaotizhong < 20){
            tanc('1号宝宝身长过小，请检查是否输入错误');
            return false;
        }
        if(yihaotizhong > 70){
            tanc('1号宝宝身长过大，请检查是否输入错误');
            return false;
        }
        if(!reg.test(yihaotizhong)){
            tanc('1号宝宝身长只能是数字');
            return false;
        }
        if(erhaotizhong === ''){
            tanc('请填写1号宝宝出生体重');
            return false;
        }
        if(erhaotizhong < 1000){
            tanc('1号宝宝体重过小，请注意体重单位为克');
            return false;
        }
        if(erhaotizhong > 7000){
            tanc('1号宝宝体重过大，请检查是否输入错误');
            return false;
        }
        if(!reg.test(erhaotizhong)){
            tanc('1号宝宝体重只能是数字');
            return false;
        }

        window.location.href='BaoGao.html';
    });

    function addc(a,b){return a.addClass(b)}
    function remc(a,b){return a.removeClass(b)}
    function tanc(a){
        body.append('<div class="riqi-t"><span><em><div class="chusheng-riqi" style="height:.3rem;"></div><div class="chushengcen-riqi" style="border:none;">'+a+'</div><div class="queding-riqi"><a href="#" style="opacity:0;">确定</a><a href="javascript:;" class="quxiao-t">确认</a></div></em></span></div>');
        $('.quxiao-t').on('touchstart',function(){
            addc($(this).parents('.riqi-t'),'none');
        });
    }
});

