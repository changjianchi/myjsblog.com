$(function(){
	$(".mSearch-type a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	$(".mSearch-checkbox a").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");	
		}
	});
	
	//列表  hover
	$(".mList dd").hover(function(){
		$(this).addClass("active");
	},function(){
		$(this).removeClass("active");
	});
	
	//checked 选择
	$(".mList-checked").click(function(){
		if($(this).prop("checked")){
			$(this).prop("checked",true);
			$(this).parents("dd").addClass("mList-ddChecked");
		}else{
			$(this).prop("checked",false);
			$(this).parents("dd").removeClass("mList-ddChecked");
		}
	});
	//全选
	$("#checkAll").click(function(){
		if($(this).prop("checked")){
			$(".mList-checked").prop("checked",true);
			$(".mList dd").addClass("mList-ddChecked");
		}else{
			$(".mList-checked").prop("checked",false);
			$(".mList dd").removeClass("mList-ddChecked");
		}
	});
	
	$("#down").click(function(){
		$.cxDialog({ 
		  title: '下载简历', 
		  info: $("#downResume").html(), 
		  lockScroll: true, 
		  background: '#000',
		  width:425,
		  height:230
		});
	});
	
	$("body").on("click",".downResume li",function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	$("#sign").click(function(){
		$.cxDialog({ 
		  title: '下载简历', 
		  info: $("#signResume").html(), 
		  lockScroll: true, 
		  background: '#000',
		  width:600,
		  okText:"确认",
		  ok:function(){
		  	
		  }
		});
	});
	
	$("body").on("click",".signResume-btn",function(){
		var txt = $(this).siblings(".signResume-text").val();
		if(txt!=""){
			TagAdd(txt);
			$(this).siblings(".signResume-text").val("");
		}
	});
	$("body").on("click",".signResume-ul li",function(){
		var txt = $(this).text();
		if(txt!=""){
			TagAdd(txt);
		}
	});
	$("body").on("click",".signResume-tag li a",function(){
		$(this).parent().remove();
	});
})

function TagAdd(txt){
	var htm ='<li><a href="javascript:void(0)"><span>'+txt+'</span><i></i></a></li>';
	$(".signResume-tag ul").append(htm);
}
