var arr = [
    {"img": [
        {"src":"img/cases-1.jpg","bt":"案例"},
        {"src":"img/cases-1.jpg","bt":"案例"},
        {"src":"img/cases-1.jpg","bt":"案例"},
        {"src":"img/cases-1.jpg","bt":"案例"},
        {"src":"img/cases-1.jpg","bt":"案例"},
        {"src":"img/cases-1.jpg","bt":"案例"},
    ]},

    {"img": [
        {"src":"img/cases-2.jpg","bt":"案例"},
        {"src":"img/cases-2.jpg","bt":"案例"},
    ]},

    {"img": [
        {"src":"img/cases-3.jpg","bt":"案例"},
    ]},

    {"img": [
        {"src":"img/cases-4.jpg","bt":"案例"},
    ]},

    {"img": [
        {"src":"img/cases-5.jpg","bt":"案例"},
    ]},

    {"img": [
        {"src":"img/cases-6.jpg","bt":"案例"},
    ]},

    {"img": [
        {"src":"img/cases-7.jpg","bt":"案例"},
    ]},

    {"img": [
        {"src":"img/cases-8.jpg","bt":"案例"},
    ]},
];

var cases = {
    _Img: $('.cases-img'),
    _K: $('.cases-k'),
    _Jz: true, //页面禁制
    _Col: $('.cases-k-col img'),
    _swiper_wrapper: $('.cases-k .swiper-wrapper'),
    _text: $('.cases-k .swiper-wrapper').html(),
    add_text: function(a){
        for(var i=0;i<a;i++){
            cases._swiper_wrapper.append(cases._text);
        }
    },
    swiper: null,
}

cases._Img.on('click','img',function(){
    cases._K.addClass('act');
    cases._Jz = false;
    cases.indx = $(this).index();
    cases._swiper_wrapper.html(null);
    cases.add_text(arr[cases.indx].img.length);
    $('.cases-k .swiper-wrapper .table-cell').each(function(i){
        $(this).find('img').attr({'src':arr[cases.indx].img[i].src});
        $(this).find('em').html(arr[cases.indx].img[i].bt);
    });
    cases.swiper.update();
    cases.swiper.slideTo(0,0,false);
});

cases.swiper = new Swiper('.cases-k', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 0,
    initialSlide : 0,
    slidesPerView : 1,
    autoplay: false,
    speed: 600,
    loop: false,
    observer:true, 
    observeParents:true, 
});

cases._Col.on('click',function(){
    cases._K.removeClass('act');
    cases._Jz = true;
});


document.body.addEventListener('touchmove', function (e) {
    if(cases._Jz!=true){
        e.preventDefault();
        e.stopPropagation();
    }
}, false);

$(window).on('resize',function(){
    var winWidth = $(window).width();
    $('html').css('font-size',winWidth / 7.5 + 'px');
});
