
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


   /*考生分数*/
   function clearNoScore(obj){
      obj.value = obj.value.replace(/[^\d]/g,"");
      obj.value=obj.value.replace(/^0+/g,"0");
      obj.value=obj.value.replace(/^0([1-9])/g,"$1");
      obj.value=obj.value.substr(0,3);
      obj.value=obj.value.replace(/^(\d)(\d)(\d)/g, function (str,chd1,chd2,chd3) {
         console.log(str+'--'+chd1+'--'+chd2);
         if(chd1 > 7){
            return chd1+chd2;
         }else if(chd1 == 7){
            if(chd2 < 5){
               return str;
            }else if(chd2 > 5){
               return chd1+chd2;
            }else{
               if(chd3 == 0) return str;
               else return chd1+chd2;
            }
         }else{
            return str;
         }
      });
   }

   /*考生名次*/
   function clearOrder(obj){
      obj.value = obj.value.replace(/[^\d]/g,"");
      obj.value = obj.value.replace(/^0+/g,"");
      obj.value = obj.value.substr(0,5);
      obj.value = obj.value.replace(/^(\d)(\d{3})(\d)/g, function (str, chd1, chd2,chd3) {
         if(chd1 < 5) return str;
         else if(chd1 == 5){
            if(parseInt(chd2)  == 0 && chd3 ==0) return str;
            else return chd1+chd2;
         }else{
            return chd1+chd2;
         }
      });
   }

   $('.wj-test-score').on('input propertychange', function (evt) {
      clearNoScore(this);
   });
   
   $('.wj-test-order').on('input propertychange', function (evt) {
      clearOrder(this);
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
   var isPc=(! device.mobile());
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


      //头像修改
      $('.avatar-box .avatar-img').click(function () {
            if($('.select-avat').is(':visible')){
               $('.select-avat').hide();
            }else{
               $('.select-avat').show();
            }
      });
      $('.select-avat').mouseleave(function () {
         $(this).hide();
      });

      /*侧导航收缩*/
      $(function(){
         $('.wj_side_nav').on('click',function(){
            $(this).parent('dd').siblings('dd').children('.wj_nav_li').hide();
            $(this).siblings('.wj_nav_li').toggle(50);
         })
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
