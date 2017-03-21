// JavaScript Document
function uploadFile(id,imgid){
        var Uid = $("input[name=Uid]").val();
        var token = $("input[name=token]").val();
        $.ajaxFileUpload({
            type:'get',
            url:'http://pic.51rebo.cn/appapi/?service=User.Upload',
            secureuri:false,
            fileElementId:id,//file标签的id
            dataType: 'json',//返回数据的类型
            data:{
                uid:Uid,
                token:token,
                type:'1'
            },//一同上传的数据
            success: function (data, status) {
                var newData = data;
                if(newData.data.code !== 0){
                    alert(newData.msg);
                }else{
                        var str = '';
                        var str = '<img src="' + newData.data.info + '" class="uploadtu">';
                        $('#'+imgid).html(str);
                        $('#'+imgid).addClass('no-none');
                        Ablur(0);
                }
                var strHtml = '<input id="'+ id +'" onchange="uploadFile(\''+id+'\',\''+imgid+'\')" type="file" name="file" multiple accept="image/gif,image/png,,image/jpeg">';
                $('#'+id).replaceWith(strHtml);
             },
             error:function(data, status, e){
                 $(".tishi").html(e.message);
                 alert('上传失败，图片太大！');
             }
         });
}
$(function(){
        var Uid = GetQueryString('uid');
        var token = GetQueryString('token');
	var tishiInputSpan = $('.tishi-input span');
	tishiInputSpan.hide();
	$("input[name=Uid]").val(Uid);
	$("input[name=token]").val(token);
});
	
function Ablur(a){
		var account = $('#smrz_idcard').get(0);
		var redou = $('#smrz_phone').get(0);
		var smName = $('#smrz_name').get(0);
		var accountNull = null;
		var redouNull = null;
		var nameNull = null;
		var tijiao = $('.tijiao');
		var reg = /^[\u4E00-\u9FA5]+$/;
		var tishiInputSpan = $('.tishi-input span');
		tishiInputSpan.hide();
	if(a === 1){
		if(smName.value != ''){
			nameNull = 0;
		}else{
			nameNull = null;
		}
		if(!reg.test(smName.value)){
			tishiInputSpan.eq(0).show();
			tijiao.removeClass('active');
		}else{
			tishiInputSpan.eq(0).hide();
		}
	}else if(a === 2){
		if(redou.value != ''){
			redouNull = 0;
		}else{
			redouNull = null;
		}
		if(redou.value.length != 11){
			tishiInputSpan.eq(1).show();
			tijiao.removeClass('active');
		}else{
			tishiInputSpan.eq(1).hide();
		}
		console.log(redou.length)
	}else if(a === 3){
		if(account.value != ''){
			accountNull = 0;
		}else{
			accountNull = null;
		}
		if(account.value.length != 18 && account.value.length != 15){
			tishiInputSpan.eq(2).show();
			tijiao.removeClass('active');
		}else{
			tishiInputSpan.eq(2).hide();
		}
	}
	if($('#upload_card').hasClass('no-none') && $('#upload_hand').hasClass('no-none')){
		tijiao.addClass('active');
		if(!(account.value.length == 18 || account.value.length == 15) || redou.value.length != 11 || !(reg.test(smName.value)) ){
			//tijiaoPD(accountNull,nameNull,redouNull);
			tijiao.removeClass('active');
		}
	}else{
		tijiao.removeClass('active');
	}
}
function tijiaoPD(a,b,c){
	if (a != null && b != null && c != null) {
		$(".tijiao").addClass('active');
	}else{
		$(".tijiao").removeClass('active');
	}
}
