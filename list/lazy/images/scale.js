function fun(){
    var wid = document.documentElement.clientWidth;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = wid / 3.2 + 'px';
}
fun();
window.onresize = function(){
    fun();
}
