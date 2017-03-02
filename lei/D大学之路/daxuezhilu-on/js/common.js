
$(function () {
   var mySwiper = new Swiper ('.banner', {
      direction: 'horizontal',
      loop: true,
      autoplay:3000,
      speed:1000,

      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',

   });

   /*下拉*/
   if($('.DropSelect').length >0 ){

      function DropList(arg){
         this.DroptSelelct=arg;
         this.DropTxt=this.DroptSelelct.find('.DropTxt');
         this.DropVal=this.DroptSelelct.find('.DropVal');
         this.DropOpt=this.DroptSelelct.find('.DropOpt');
         var _this=this;
         this.DropTxt.on('click', function () {
            _this.drop();
         });
         this.DropOpt.children('li').on('click', function () {
             _this.assign($(this));
            _this.up();
         });
         $(document).click(function (e) {
             var len=$(e.target).closest(_this.DroptSelelct).length;
            console.log(len);
            if(len <= 0){
               _this.up();
            }
         });
      }
      DropList.prototype={
         drop: function () {
            this.DroptSelelct.addClass('cur');
            this.DropOpt.show();
         } ,
         up:function(){
            this.DroptSelelct.removeClass('cur');
            this.DropOpt.hide();
         },
         assign: function (curLi) {
            var id=curLi.data('id'),
                txt=curLi.text();
            this.DropTxt.val(txt);
            this.DropVal.val(id);
         }
      };

      $('.DropSelect').each(function () {
         new DropList($(this));
      });
   }

   /*step4*/
    $('.table-prompt .cls-btn').click(function () {
         $(this).parent().hide();
    });

   //pc
   var isPc=device.windows();
   if(isPc){
      
      $(window).scroll(function () {
         var sct=$(window).scrollTop();
         if(sct >100){
            $('.toTop').show();
         }else{
            $('.toTop').hide();
         }
      });
      
      $('.toTop').click(function () {
         $('html,body').animate({'scrollTop':'0px'},200);
      });

      //表格
       $('.Hover-tb').on('mouseover','tbody tr', function () {
          $(this).addClass('cur');
       }).on('mouseout','tbody tr', function () {
          $(this).removeClass('cur');
       });

      /*step4*/
      $('.aimRecom .seeIntro').click(function () {
         var redIn=$('.readInstro');
         if(redIn.hasClass('show')){
            redIn.removeClass('show');
         }else{
            redIn.addClass('show');
         }
      });



   }





   //phone
   if(!isPc){
      //设置leftPane高
      var clientHt=document.documentElement.clientHeight;
      $('.leftPane').height(clientHt);

      /*$(document).swipe({
         swipe: function (event, direction, distance, duration, fingerCount) {
            if(direction == 'right'){
               $('.leftPane').addClass('show');
               if(!$('.ph-dwmask').hasClass('show')){
                  $('.ph-dwmask').addClass('show');
               }
            }
         }
      });*/

      $('.LeftPaneBtn').click(function () {
         $('.leftPane').addClass('show');
         $('.ph-dwmask').addClass('show');
      });

      $('.ph-dwmask').on('touchstart touchmove',function () {
         $(this).removeClass('show');
         $('.leftPane').removeClass('show');
      });

   }


});
