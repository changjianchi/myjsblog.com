$(function () {
   //radio
   $('.wj-findway-rad input').click(function () {
      $(this).parent().addClass('checked').siblings('.wj-findway-rad').removeClass('checked');
   });
   //checkbox
   $('.wj-pop-checkbox input').click(function () {
      var thisPar=$(this).parent();
      if(thisPar.hasClass('checked')) {
         thisPar.removeClass('checked');
      }else{
         thisPar.addClass('checked');
      }
   });
});
