$(function(){
	$(".myinv-type").hover(function(e){
		var x=e.clientX+20;
		var y=e.clientY+20;
		var txt='';
		if($(this).hasClass("myinv-typey")){
			txt ='您的联系方式将公开给招聘公司，他们会主动联系您！';
		}else{
			txt ='您的联系方式将不会公开给招聘公司，他们无法打扰您！！';
		}
		var htm = '<div class="myinv-hint" style="left:'+x+'px;top:'+y+'px;">'+txt+'</div>';
		$("body").append(htm);
	},function(){
		$(".myinv-hint").remove();
	});
	
	$(".label-switch input").click(function(){
		if($(this).is(":checked")){
			$(this).parent().siblings("span").text("同意").addClass("myinv-col");
		}else{
			$(this).parent().siblings("span").text("不同意").removeClass("myinv-col");
		}
	});
});
