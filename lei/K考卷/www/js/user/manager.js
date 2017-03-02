$(function() {
	

	$(".mgcen-checkbox").click(function() {
		if ($(this).is(":checked")) {
			$(".mgcen-boxLeft-s span").text("不公开");
		} else {
			$(".mgcen-boxLeft-s span").text("公开");
		}
	});

	$(".mgcont-ltype-ico").hover(function() {
		$(this).siblings(".mgcont-ltype-box").show();
	}, function() {
		$(this).siblings(".mgcont-ltype-box").hide();
	});

	$(".mgcont-error-close").click(function() {
		$(this).parent().remove();
	});
	$('.countdown').downCount({
		date: '5/1/2016 12:00:00',
		offset: +10
	}, function() {
		alert('倒计时结束!');
	});
});