$(function () {
    var mySwiper = new Swiper ('.wj-new-swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay:3000,
        speed:1000,

        pagination : '.swiper-pages',
        paginationClickable: true,
        paginationElement:'a',
        paginationBulletRender: function (index, className) {
            return '<a class="' + className + '">' + "0"+(index + 1) + '</a>';
        }
    });


    // 滑块控制
    (function () {
        $('#subjects > div').mouseleave(function () {
            this.className='g-wrap state-0';
        });

        $('#subjects > div a').mouseover(function () {
            var ind=$(this).index()+1,
                cName="state-"+ind;
            $(this).parent()[0].className='g-wrap '+cName;
        });
    })();


    if($('.wj-ncenter-container').length > 0){
            var mySwiper2 = new Swiper ('.WjNCenterCon', {
            direction: 'horizontal',
            loop: true,
            autoplay:3000,
            speed:500,

            pagination : '.swiper-pagination',
            paginationClickable: true,
            onInit: function(swiper){
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function(swiper){
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }

        });
    }

    if($('.wj-buimg-in').length > 0){
        if(!$('.wj-buimg-in').hasClass('end')){
            $('.wj-buimg-in .g-wrap').addClass('start');
        }
        $(window).scroll(function () {
            var h=$(window).scrollTop();
            if(h > $('.wj-buimg-in').offset().top -800 && !$('.wj-buimg-in').hasClass('end')){
                $('.wj-buimg-in .g-wrap').removeClass('start');
                $('.wj-buimg-in').addClass('end');
            }
        });
    }

});