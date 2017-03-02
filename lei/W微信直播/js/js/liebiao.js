$(function(){
	window.siteUrl = "http://bs.51rebo.cn/";
	//window.siteUrl = "http://www.51rexiu.com/appapi/";
	var Uid = GetQueryString('uid');
	var osType = GetQueryString('osType');
	var newDataDown = null;
	getNewInfo(Uid,osType);
	getUserInfo(Uid);
	setInterval(getNewInfo(Uid,osType),1000);
});
function getNewInfo(Uid,osType){
	$.ajax({
		type:'GET',
		url: window.siteUrl + '?service=User.SearchArea',
		data: {
			'ex':0,
			'key':'',
			'pageIndex':1,
			'pageSize':8,
			'isPaging':true
		},
		dataType: 'jsonp',   //一个域名下用json  异步请求用jsonp
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
                dataType: 'jsonp',
                success:function(data){
                        newData = data;
			alert(333);
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
function GetQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
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
                if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
                      var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
                      if (ua.match(/MicroMessenger/i) == "micromessenger") {
                          //alert('微信打开')
                              //在微信中打开
                      }
                      if (ua.match(/WeiBo/i) == "weibo") {
                              //在新浪微博客户端打开
                      }
                      if (ua.match(/QQ/i) == "qq") {
                              //在QQ空间打开
                      }
                      if (browser.versions.ios) {
                          //alert('ios打开')
                              //是否在IOS浏览器打开
                        // var video = document.getElementById("my_video_1");
                        // var play1 = document.getElementById("play");
                        // play1.addEventListener("touchstart", vidplay, false);
                        // function vidplay(){
                          
                        //   video.play();
                        //   play1.style.display="none";
                        // }
                        // var img = '<img src="'+ newData.data.info.avatar +'" alt="" />';
                        // $(".zhiboimg").html(img);

                      }
                      if(browser.versions.android){
                     	//alert('安卓打开')
			  //是否在安卓浏览器打开
                        // var img = '<img src="'+ newData.data.info.avatar +'" alt="" />';
                        // $(".zhiboimg").html(img);
                        // var str = 'rtmp://leplay.51rebo.cn/live/';
                        // var str = str + Uid;
                        // $(".zhibovideo").attr('src',str);
                      }
              } else {
		      //否则就是PC浏览器打开
		      // var img = '<img src="'+ newData.data.info.avatar +'" alt="" />';
		      // $(".zhiboimg").html(img);
              }
}

