//loading...
window.onload = function() {pageLoading();}

function pageLoading(){
    var a = document.getElementById("loading");
    a.parentNode.removeChild(a);
}
var loadingHtml='<div id="loading" style="position:fixed;width:100%;height:100%;left:0px;top:0px; z-index:100; display:table;"><div style="width:100%; height:100%; display:table-cell; vertical-align: middle;"><div style="background:rgba(0,0,0,0.7); width:2rem;height:2rem;border-radius: .1rem; margin:0 auto; color:#fff; font-size:.24rem; text-align:center; overflow:hidden;"><img src="img/loading.gif" style="width:30%; height:auto; display:block; margin:.45rem auto .3rem;"><span>数据加载中</span></div></div></div>';
document.write(loadingHtml);