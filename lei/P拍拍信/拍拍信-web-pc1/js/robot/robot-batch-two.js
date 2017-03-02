$(function(){
    var roB = $('.ro-b'),
        Du = 800,
        degh = $('.ro-deg').html(),
        deg = $('.ro-deg'),
        i = 0;
        c = 8; //服务器加载返回值 
    function roac(){
        var rop = '<p></p>'
            rospan = '<span style="transform:rotate('+360/100*i+'deg)">'+rop+'</span>';
        roB.append(rospan);
    }
    var Troac = setInterval(function(){
        if(i < c){
            i++;
        }
        if (i<=100){
            roac();
            deg.html(i);
        }else{
            clearInterval(Troac);
        };

    },Du)
});