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
}

cases._Img.on('click','i',function(){
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
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
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


onRe();
$(window).on('resize',function(){
    onRe();
});
function onRe(){
    cases._Img.css({'width':$(window).width()+6+'px'});
    cases._Img.find('span').css('height',cases._Img.find('i').height()+'px');
    cases._Img.find('span').css('width',cases._Img.find('i').width()+'px');
}

var animateL = $('.animate-l'),
    speedL = 150,
    Ci = 0;

var animateLOut = setTimeout(function(){
    var animateLTime = setInterval(function(){
        if(Ci<animateL.length){
            animateL.eq(Ci).addClass('active');
            Ci++;
        }else{
            clearInterval(animateLTime);
        }
    }, speedL);
}, 1500);

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#e4203e',
    lineColor: '#e4203e'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});