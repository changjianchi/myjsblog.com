
$(document).ready(function(){
    function aaa(){
		for(var i=0;i<=5;i++){
		var ms=$(".main_img").eq(i).find(".main_img_right img").height()
		$(".main_img").eq(i).find(".main_img_left img").css("height",ms);
	  }
	}	
 function bbb(){
	 for(var b=0;b<=$(".main2_content1").length;b++){
		 var mainb=$(".main2_content1").eq(b).find(".main2_right img").height(); 
	     $(".main2_content1").eq(b).find(".main2_left").css("height",mainb);
		 var topt=$(".main2_left_top2").eq(b).height();
		 $(".main2_left_top1").eq(b).css("height","50%");
		 $(".main2_content1").eq(b).css("height",mainb)
	 }

	 	$(".main2_content1 img").mouseover(function(){
		$(this).animate({
              width:"110%",
			  height:"110%",
			  
		},400);
		$(this).siblings("p").fadeIn(600);
		var ha=$(this).parent("a").height();
		var hab=ha/2-40;
		$(this).siblings("p").find("span").css("marginTop",hab)
		});
	 $(".main2_content1 p").mouseleave(function(){
		$(this).siblings("img").animate({
			width:"100%",
			height:"100%"
		},300)
        $(this).fadeOut(600)
	 })
	 
 }
 bbb()
 aaa()
	 $(window).resize(function(){
	 bbb();
	 aaa();
     })
	 
	 /*首页遇见显示*/
	 $(".model_header_right a").click(function(){
		 $(this).siblings("ul").slideToggle("show");
	 })
	 $(".model_header_right ul a").click(function(){
		 $(".model_header_right ul").slideUp("show")
	 })
	 
     setInterval (function (){
	    $(".heades>img").animate({"top":"15px"},1400);
		$(".heades>img").animate({"top":"5px"},1000);
		
	},300);	
})
