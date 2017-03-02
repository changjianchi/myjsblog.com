$(function(){
	$(".cvcpos-fix").css("height",$(document).height());
	$(".cvcpos-jianli-close").click(function(){
		$(".cvcpos-jianli,.cvcpos-fix").hide();
	});
	$("#addzhengshu").click(function(){
		$.cxDialog({ 
		  title: '获得证书', 
		  info: $("#addzsBox").html(), 
		  lockScroll: true, 
		  background: '#000',
		  width:520,
		  okText:"确认",
		  ok:function(){
		  	
		  }
		});
	});
	$("#addjiangli").click(function(){
		$.cxDialog({ 
		  title: '校内奖励', 
		  info: $("#addxnBox").html(), 
		  lockScroll: true, 
		  background: '#000',
		  width:520,
		  okText:"确认",
		  ok:function(){
		  	
		  }
		});
	});
	$("#addshetuan").click(function(){
		$.cxDialog({ 
		  title: '社团活动', 
		  info: $("#addstBox").html(), 
		  lockScroll: true, 
		  background: '#000',
		  width:520,
		  okText:"确认",
		  ok:function(){
		  	
		  }
		});
	});
	$("#addxiangmu").click(function(){
		$.cxDialog({ 
		  title: '项目经历', 
		  info: $("#addxmBox").html(), 
		  lockScroll: true, 
		  background: '#000',
		  width:520,
		  okText:"确认",
		  ok:function(){
		  	
		  }
		});
	});
	$("#addshixi").click(function(){
		$.cxDialog({ 
		  title: '实习经历', 
		  info: $("#addsxBox").html(), 
		  lockScroll: true, 
		  background: '#000',
		  width:520,
		  okText:"确认",
		  ok:function(){
		  	
		  }
		});
	});
})
