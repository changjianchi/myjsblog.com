$(function(){
    function fun(){
        var winHeight = $(window).height();
        $('html').css('font-size',winHeight / 9.25 + 'px');
    }
    fun();
    // $(window).on('resize',function(){
    //     fun();
    // });
    var Cen = $('.cen'),
        Cena = $('.cena'),
        Dia = $('.dia tr td span'),
        Sd = 800; 
    $(document).bind('mousewheel', function(e,i) {
        var cb = $('.dia tr td span.active').index();
        if(!Cen.is(":animated")){
            if(i > 0){
                cb<=0?cb=0:cb--;
            }else{
                cb>=Cena.length-1?cb=0:cb++;
            }
            Dia.eq(cb).trigger('click');
        }
    });
//nav
    var Cnavli = $('.cnav ul li'),
        Cnav = $('.cnav'),
        Cnavac = $('.cnav ul li.active'),
        CnavacW = Cnavac.width(),
        CnavacL = Cnavac.position().left;
        Cnavac.addClass('nav-act');
    Cnavli.on('mouseover mouseout',function(e){
        if(e.type === 'mouseover'){
            Cnavli.removeClass('active');
            $(this).addClass('active');
        }else{
            Cnavli.removeClass('active');
            $('.nav-act').addClass('active');
        }
    });
//about
    var About = $('.about');
    var AboutShow = $('.cen7about a');
    var AboutHide = $('.aboutnone');
    AboutShow.on('click',function(){
        About.removeClass('none');
    });
    AboutHide.on('click',function(){
        About.addClass('none');
    });
//animate
    var NuSize = 150,
        NuSp = 800,
        AutoSp = 200,
        AniDiv = $('.animate'),
        Ani1 = $('.cen1 .animate'),
        Ani3 = $('.cen3 .animate'),
        Ani4 = $('.cen4 .animate'),
        Ani5 = $('.cen5 .animate'),
        Ani6 = $('.cen6 .animate'),
        Ani7 = $('.cen7 .animate');
    var AniArr1 = [{"Anic":[{
                    "Anitop":Ani1.eq(0).position().top,
                    "Anileft":Ani1.eq(0).position().left
                    },{
                    "Anitop":Ani1.eq(1).position().top,
                    "Anileft":Ani1.eq(1).position().left
                    },{
                    "Anitop":Ani1.eq(2).position().top,
                    "Anileft":Ani1.eq(2).position().left
                    },{
                    "Anitop":Ani1.eq(3).position().top,
                    "Anileft":Ani1.eq(3).position().left
                    }]
                 }];
    var AniArr3 = [{"Anic":[{
                    "Anitop":Ani3.eq(0).position().top,
                    "Anileft":Ani3.eq(0).position().left
                    },{
                    "Anitop":Ani3.eq(1).position().top,
                    "Anileft":Ani3.eq(1).position().left
                    }]
                 }];
    var AniArr4 = [{"Anic":[{
                    "Anileft":0
                    },{
                    "Anileft":0
                    },{
                    "Anitop":Ani4.eq(2).position().top,
                    "Anileft":Ani4.eq(2).position().left
                    },{
                    "Anitop":Ani4.eq(3).position().top,
                    "Anileft":Ani4.eq(3).position().left
                    },{
                    "Anitop":Ani4.eq(4).position().top,
                    "Anileft":Ani4.eq(4).position().left
                    }]
                 }];
    var AniArr5 = [{"Anic":[{
                    "Anitop":Ani5.eq(0).position().top,
                    "Anileft":Ani5.eq(0).position().left
                    },{
                    "Anitop":0,
                    "Anileft":0
                    },{
                    "Anitop":Ani5.eq(2).position().top,
                    "Anileft":Ani5.eq(2).position().left
                    },{
                    "Anitop":Ani5.eq(3).position().top,
                    "Anileft":Ani5.eq(3).position().left
                    },{
                    "Anitop":Ani5.eq(4).position().top,
                    "Anileft":Ani5.eq(4).position().left
                    },{
                    "Anitop":Ani5.eq(5).position().top,
                    "Anileft":Ani5.eq(5).position().left
                    },{
                    "Anitop":Ani5.eq(6).position().top,
                    "Anileft":Ani5.eq(6).position().left
                    },{
                    "Anitop":Ani5.eq(7).position().top,
                    "Anileft":Ani5.eq(7).position().left
                    },{
                    "Anitop":Ani5.eq(8).position().top,
                    "Anileft":Ani5.eq(8).position().left
                    }]
                 }];
    var AniArr6 = [{"Anic":[{
                    "Anitop":Ani6.eq(0).position().top,
                    "Anileft":Ani6.eq(0).position().left
                    },{
                    "Anitop":Ani6.eq(1).position().top,
                    "Anileft":Ani6.eq(1).position().left
                    },{
                    "Anitop":Ani6.eq(2).position().top,
                    "Anileft":Ani6.eq(2).position().left
                    },{
                    "Anitop":Ani6.eq(3).position().top,
                    "Anileft":Ani6.eq(3).position().left
                    },{
                    "Anitop":Ani6.eq(4).position().top,
                    "Anileft":Ani6.eq(4).position().left
                    },{
                    "Anitop":Ani6.eq(5).position().top,
                    "Anileft":Ani6.eq(5).position().left
                    }]
                 }];
    var AniArr7 = [{"Anic":[{
                    "Anitop":Ani7.eq(0).position().top,
                    "Anileft":Ani7.eq(0).position().left
                    },{
                    "Anitop":Ani7.eq(1).position().top,
                    "Anileft":Ani7.eq(1).position().left
                    },{
                    "Anitop":Ani7.eq(2).position().top,
                    "Anileft":Ani7.eq(2).position().left
                    }]
                 }];
    var Gdts = $('.gdtishi img');
    Dia.on('click',function(e){
        Cen.stop(true).animate({
            'top':'-'+$(this).index()*100+'%'
        },Sd);
        Dia.removeClass('active');
        $(this).addClass('active');
        Gdts.css('display','block');
        AniDiv.stop(true).animate({
            'opacity': '0',
            'filter':'alpha(opacity=0)'
        },300);
        Cena.eq($(this).index()).find('.animate').stop(true).css({
            'opacity': '0',
            'filter':'alpha(opacity=0)'
        });
        if(e.target == Dia[0]){
            cen1();
        }else if(e.target == Dia[2]){
            cen3();
        }else if(e.target == Dia[3]){
            cen4();
        }else if(e.target == Dia[4]){
            cen5();
        }else if(e.target == Dia[5]){
            cen6();
        }else if(e.target == Dia[6]){
            cen7();
        }else if(e.target == Dia[7]){
            Gdts.css('display','none');
        }
    });
    Dia.eq(0).trigger('click');
    function cen1(){
        clearInterval(AniInt);
        var ci = 0;
        Ani1.eq(0).css({
            'top':AniArr1[0].Anic[0].Anitop - NuSize/2 + 'px'
        });
        Ani1.eq(1).css({
            'top':AniArr1[0].Anic[1].Anitop + NuSize + 'px'
        });
        Ani1.eq(2).css({
            'top':AniArr1[0].Anic[2].Anitop + NuSize + 'px'
        });
        Ani1.eq(3).css({
            'left':AniArr1[0].Anic[3].Anileft + NuSize + 'px'
        });
        var AniInt = setInterval(function(){
            if(ci < Ani1.length){
                Ani1.eq(ci).stop(true).animate({
                    'top':AniArr1[0].Anic[ci].Anitop + 'px',
                    'left':AniArr1[0].Anic[ci].Anileft + 'px',
                    'opacity': '1',
                    'filter':'alpha(opacity=100)'
                },NuSp);
                ci++;
            }else{
                clearInterval(AniInt);
            }
        },AutoSp); 
    }
    function cen2(){
        var Ani = $('.cen2 .animate');
        ci = 0;
        var AniInt2 = setInterval(function(){
            Ani.eq(0).stop(true).animate({
                'opacity': '1',
                'filter':'alpha(opacity=100)'
            },1200).animate({
                'opacity': '0',
                'filter':'alpha(opacity=0)'
            },1000);
            Ani.eq(1).stop(true).animate({
                'opacity': '1',
                'filter':'alpha(opacity=100)'
            },1800).animate({
                'opacity': '0',
                'filter':'alpha(opacity=0)'
            },700);
        },2500);
    }
    cen2();
    function cen3(){
        var ti = 0;
        Ani3.eq(0).css({
            'left':AniArr3[0].Anic[0].Anileft - NuSize + 'px'
        });
        Ani3.eq(1).css({
            'top':AniArr3[0].Anic[1].Anitop - NuSize/2 + 'px'
        });
        var AniInt = setInterval(function(){
            if(ti < Ani3.length){
                Ani3.eq(ti).stop(true).animate({
                    'top':AniArr3[0].Anic[ti].Anitop + 'px',
                    'left':AniArr3[0].Anic[ti].Anileft + 'px',
                    'opacity': '1',
                    'filter':'alpha(opacity=100)'
                },NuSp);
                ti++;
            }else{
                clearInterval(AniInt);
            }
        },AutoSp); 
    }
    function cen4(){
        clearInterval(AniInt);
        var fi = 0;
        Ani4.eq(0).css({
            'left':AniArr4[0].Anic[0].Anileft - NuSize/2 + 'px'
        });
        Ani4.eq(1).css({
            'left':AniArr4[0].Anic[1].Anileft - NuSize/2 + 'px'
        });
        Ani4.eq(2).css({
            'top':AniArr4[0].Anic[2].Anileft - NuSize + 'px'
        });
        Ani4.eq(3).css({
            'top':AniArr4[0].Anic[3].Anileft - NuSize + 'px'
        });
        Ani4.eq(4).css({
            'top':AniArr4[0].Anic[4].Anileft - NuSize + 'px'
        });
        var AniInt = setInterval(function(){
            if(fi < Ani4.length){
                Ani4.eq(fi).stop(true).animate({
                    'top':AniArr4[0].Anic[fi].Anitop + 'px',
                    'left':AniArr4[0].Anic[fi].Anileft + 'px',
                    'opacity': '1',
                    'filter':'alpha(opacity=100)'
                },NuSp);
                fi++;
            }else{
                clearInterval(AniInt);
            }
        },AutoSp);
    }
    function cen5(){
        clearInterval(AniInt);
        var fvi = 0;
        Ani5.eq(0).css({
            'top':AniArr5[0].Anic[0].Anitop + NuSize/2 + 'px'
        });
        Ani5.eq(1).css({
            'left':AniArr5[0].Anic[1].Anileft + NuSize/2 + 'px'
        });
        Ani5.eq(2).css({
            'left':AniArr5[0].Anic[2].Anileft - NuSize/2 + 'px'
        });
        Ani5.eq(3).css({
            'left':AniArr5[0].Anic[3].Anileft - NuSize/3 + 'px'
        });
        Ani5.eq(4).css({
            'left':AniArr5[0].Anic[4].Anileft + NuSize + 'px'
        });
        Ani5.eq(5).css({
            'left':AniArr5[0].Anic[5].Anileft + NuSize + 'px'
        });
        Ani5.eq(6).css({
            'left':AniArr5[0].Anic[6].Anileft + NuSize + 'px'
        });
        Ani5.eq(7).css({
            'left':AniArr5[0].Anic[7].Anileft + NuSize + 'px'
        });
        Ani5.eq(8).css({
            'left':AniArr5[0].Anic[8].Anileft + NuSize + 'px'
        });
        var AniInt = setInterval(function(){
            if(fvi < Ani5.length){
                Ani5.eq(fvi).stop(true).animate({
                    'top':AniArr5[0].Anic[fvi].Anitop + 'px',
                    'left':AniArr5[0].Anic[fvi].Anileft + 'px',
                    'opacity': '1',
                    'filter':'alpha(opacity=100)'
                },NuSp);
                fvi++;
            }else{
                clearInterval(AniInt);
            }
        },AutoSp);
    }
    function cen6(){
        clearInterval(AniInt);
        var si = 0;
        Ani6.eq(0).css({
            'left':AniArr6[0].Anic[0].Anileft + NuSize + 'px',
            'top':AniArr6[0].Anic[0].Anitop + NuSize + 'px'
        });
        Ani6.eq(1).css({
            'left':AniArr6[0].Anic[1].Anileft - NuSize + 'px',
            'top':AniArr6[0].Anic[1].Anitop + NuSize + 'px'
        });
        Ani6.eq(2).css({
            'left':AniArr6[0].Anic[2].Anileft - NuSize + 'px'
        });
        Ani6.eq(3).css({
            'left':AniArr6[0].Anic[3].Anileft - NuSize + 'px',
            'top':AniArr6[0].Anic[3].Anitop - NuSize + 'px'
        });
        Ani6.eq(4).css({
            'left':AniArr6[0].Anic[4].Anileft + NuSize + 'px',
            'top':AniArr6[0].Anic[4].Anitop - NuSize + 'px'
        });
        Ani6.eq(5).css({
            'left':AniArr6[0].Anic[5].Anileft + NuSize + 'px',
        });
        var AniInt = setInterval(function(){
            if(si < Ani6.length){
                Ani6.eq(si).stop(true).animate({
                    'top':AniArr6[0].Anic[si].Anitop + 'px',
                    'left':AniArr6[0].Anic[si].Anileft + 'px',
                    'opacity': '1',
                    'filter':'alpha(opacity=100)'
                },NuSp*2);
                si++;
            }else{
                clearInterval(AniInt);
            }
        },1);

        $('.cen6cimg').addClass('ani360');
        var AniTime = setTimeout(function(){
            $('.cen6cimg').removeClass('ani360');
            $('.cen6cimg').addClass('ani0');
        },2000);

    }
    function cen7(){
        clearInterval(AniInt);
        var sci = 0;
        Ani7.eq(0).css({
            'left':0 - NuSize/2 + 'px'
        });
        Ani7.eq(1).css({
            'left':0 - NuSize/2 + 'px'
        });
        Ani7.eq(2).css({
            'left':0 - NuSize/2 + 'px'
        });
        var AniInt = setInterval(function(){
            if(sci < Ani7.length){
                Ani7.eq(sci).stop(true).animate({
                    'left':0 + 'px',
                    'opacity': '1',
                    'filter':'alpha(opacity=100)'
                },NuSp);
                sci++;
            }else{
                clearInterval(AniInt);
            }
        },AutoSp*2); 
    }

    var Xiagy = 0;
    Gdts.on('click',function(){
        var xay = $('.dia tr td .active').index();
        xay++;
        Dia.eq(xay).trigger('click');
    });
    
    var Gdtsint = setInterval(function(){
        Gdts.stop(true).animate({
            'top':'-0.8rem'
        },700).animate({
            'top':'-0.5rem'
        },700);
    },1500);

    var vida = $('.vidcolimg'),
        video = $('.video'),
        videoplay = $('.video video'),
        videonone = $('.videonone'),
        vidcolem = $('.vidcol em').html();
    videonone.click(function(){
        videoplay.attr('src',vidcolem);
        video.removeClass('none');
        videoplay.get(0).play();
    });
    vida.click(function(){
        videoplay.get(0).pause();
        video.addClass('none');
        videoplay.attr('src',' ');
    });
// zxkf 
    var zxkf = $('.zxkf');
    var zxkfzxr = $('.zxkfzx img');
    var zxkfcen = $('.zxkfcen');
    zxkf.on('mouseover mouseout',function(e){
        if(e.type === 'mouseover'){
            zxkfzxr.stop(true).animate({'left':'136px'},300);
            zxkfcen.stop(true).animate({'left':'0'},300);
        }else{
            zxkfzxr.stop(true).animate({'left':'0'},300);
            zxkfcen.stop(true).animate({'left':'-136px'},300);
        }
    });
    var cen1start = $('.cen1start a');
    cen1start.click(function(){
        Dia.eq(1).trigger('click');
    });


});