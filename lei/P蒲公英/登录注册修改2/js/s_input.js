$(document).ready(function(){
	    $(".con_z_box p input").focus(function(){
		   $(this).siblings("span").css("color","#ff8280")
		})
		$(".con_z_box p input").blur(function(){
		   $(this).siblings("span").css("color","#aaa")
		})
		
		$(".z_yanz_1 [type='submit']").click(function(){
		    $(this).parents(".z_yanz_1").remove();
			$(".z_yanz_2").css("display","block");
			$(".con_z0 i").eq(1).addClass("active").siblings("i").removeClass("active");
		})
		$(".z_yanz_2 [type='submit']").click(function(){
		    $(this).parents(".z_yanz_2").remove();
			$(".z_yanz_3").css("display","block");
			$(".con_z0 i").eq(2).addClass("active").siblings("i").removeClass("active");
		})
	 })