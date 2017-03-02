$(function(){
    var Addmane = $('.addmane'),
        Addmand = $('.addmand'),
        Prof1 = $('.prof1'),
        Prof2 = $('.prof2'),
        Profb = $('.profbt span');
    Addmane.on('click','li',function(){
        Prof1.css('display','block');
    });
    Addmand.on('click','li',function(){
        Prof2.css('display','block');
    });
    Profb.on('click',function(){
        Prof2.css('display','none');
        Prof1.css('display','none');
    });
})