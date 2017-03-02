function getNewInfo(Uid,osType){
	$.ajax({
		type:'GET',
		url: siteUrl + '?service=User.SearchArea',
		data: {
			'ex':0,
			'key':'',
			'pageIndex':1,
			'pageSize':8,
			'isPaging':true
		},
		dataType: 'json',   //一个域名下用json  异步请求用jsonp
        	success:function(data){
			var newDataDown = data;
			//console.log(newDataDown,newDataDown.data.code);
			var str = '';
			$.each(newDataDown.data.info,function (key,val){
                		str +='<a href="/H5/home.html?uid=' + val.id + '&osType='+ osType +'"><img src="' + val.avatar + '"><span><em>' + val.nums +'人</em><b class="cenbuju-cen">' + val.user_nicename+ '</b></span></a>';
				});
			$(".cenbuju").html(str);
		},
		error:function(){
			//console.log('出错');
	        }
	});
}
function getUserInfo(Uid){
	$.ajax({
                type:'GET',
                url: window.siteUrl + '?service=User.GetUserInfo',
                data: {
                        'uid':Uid
                },
                dataType: 'json',
                success:function(data){
                        newData = data;
			if(newData.data.code == 0){
                        	$("#video_jzz").addClass("none");
				$(".zbjs").removeClass('none');
                        	if(newData.data.info.islive == 0){
					$(".guanzhu").addClass("none");
					$(".touxiang2 img").attr('src',newData.data.info.avatar); //直播结束后的头像
					$(".bjz-txname").html(newData.data.info.user_nicename); //直播结束后的昵称
					$(".bjz-cen span:first-child p.shu").html(newData.data.info.nums);
					$(".bjz-cen span:nth-child(2) p.shu").html(newData.data.info.votes);
					$(".bjz-cen span:last-child p.shu").html(newData.data.info.light);
				}else{
					$(".zbjs").attr('class','banjiazai zbjs none');
					$(".guanzhu").removeClass("none");
					$(".guanzhu img").attr('src',newData.data.info.avatar); //直播页面头像
					$(".guanzhu p").html(newData.data.info.user_nicename); //直播页面昵称
					$(".guanzhu i").html(newData.data.info.nums); //直播页面在线人数
					$(".bantext span p:first-child").html(newData.data.info.id); //直播页面热播号
					var myDate = new Date();
					var time = myDate.getFullYear() + '.' + (myDate.getMonth()+1) + '.' + myDate.getDate();
					$(".bantext span p:last-child").html(time);
				}
			}else{
				console.log('用户信息不存在');
			}
                }
        });
}
function browerInfo(){
	var browser = {
                  versions: function () {
                      var u = navigator.userAgent, app = navigator.appVersion;
                      return {         //移动终端浏览器版本信息
                          trident: u.indexOf('Trident') > -1, //IE内核
                          presto: u.indexOf('Presto') > -1, //opera内核
                          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                          iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                          iPad: u.indexOf('iPad') > -1, //是否iPad
                          webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
                      };
                  }(),
                  language: (navigator.browserLanguage || navigator.language).toLowerCase()
                }
	if (browser.versions.mobile)
		return true;
	else
		return false;
}
