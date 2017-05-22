var timer = {};

var Arr = ["http://121.199.54.50:8080","http://121.199.54.50:8081","http://121.199.54.50:8082","http://121.199.54.50:8083","http://121.199.54.50:8084","http://121.199.54.50:8085","http://121.41.24.150:8080","http://121.41.24.150:8081","http://121.41.24.150:8082","http://121.41.24.150:8083","http://121.41.24.150:8084","http://121.41.24.150:8085","http://121.40.144.4:8080","http://121.40.144.4:8081","http://121.40.144.4:8082","http://121.40.144.4:8083","http://121.40.144.4:8084","http://121.40.144.4:8085","http://120.55.89.186:8080","http://120.55.89.186:8081","http://120.55.89.186:8082","http://120.55.89.186:8083","http://120.55.89.186:8084","http://120.55.89.186:8085","http://121.199.59.160:8080","http://121.199.59.160:8081","http://121.199.59.160:8082","http://121.199.59.160:8083","http://121.199.59.160:8084","http://121.199.59.160:8085","http://120.26.61.39:8080","http://120.26.61.39:8081","http://120.26.61.39:8082","http://120.26.61.39:8083","http://120.26.61.39:8084","http://120.26.61.39:8085","http://121.199.41.71:8080","http://121.199.41.71:8081","http://121.199.41.71:8082","http://121.199.41.71:8083","http://121.199.41.71:8084","http://121.199.41.71:8085","http://121.40.89.84:8080","http://121.40.89.84:8081","http://121.40.89.84:8082","http://121.40.89.84:8083","http://121.40.89.84:8084","http://121.40.89.84:8085","http://121.199.33.247:8080","http://121.199.33.247:8081","http://121.199.33.247:8082","http://121.199.33.247:8083","http://121.199.33.247:8084","http://121.199.33.247:8085","http://121.199.58.232:8080","http://121.199.58.232:8081","http://121.199.58.232:8082","http://121.199.58.232:8083","http://121.199.58.232:8084","http://121.199.58.232:8085","http://120.26.95.155:8080","http://120.26.95.155:8081","http://120.26.95.155:8082","http://120.26.95.155:8083","http://120.26.95.155:8084","http://120.26.95.155:8085","http://121.40.171.31:8080","http://121.40.171.31:8081","http://121.40.171.31:8082","http://121.40.171.31:8083","http://121.40.171.31:8084","http://121.40.171.31:8085"];
var n = Math.floor(Math.random() * Arr.length + 1) - 1
var server = Arr[n];
var socket = io.connect(server);
socket.on('connect' , function() {
    showP1();
});
socket.on('price list', function(msg) {

    if (msg.name == "GC") {
        $('#' + msg.name + "_B").text(msg.v.lp);
        $('#' + msg.name + "_P").text(msg.v.chp + "手");
        if (msg.v.chp > 499)
        {
            $('#' + msg.name + "_P").css({
                "background-color": "#dc5538",
                "color": "#FFFFFF"
            });
        } else
        {
            $('#' + msg.name + "_P").css({
                "background-color": "transparent",
                "color": "#111111"
            });
        }
    } 
    else {
        var oldvalue = $('#' + msg.name + "_B").text();
        var newvalue = msg.v.lp;
        var pcolor;
        var ycolor = 'grey';

        if (Number(newvalue) > Number(oldvalue)) {
            pcolor = "#dc5538";
        } 
        else if (Number(newvalue) < Number(oldvalue)) {
            pcolor = "#238859";
        } 
        else if (Number(newvalue) == Number(oldvalue)) {
            return;
        }

        if (msg.v.ch != null) {
            var per = msg.v.ch / (msg.v.lp-msg.v.ch) * 100;
            if (Number(per) > 0) {
                ycolor = "#FF0000";
                $('#' + msg.name + "_B").css("color", "#FF0000");
                $('#' + msg.name + "_P").css("color", "#FF0000");
            } 
            else if (Number(per) < 0) {
                ycolor = "#0EA600";
                $('#' + msg.name + "_B").css("color", "#0EA600");
                $('#' + msg.name + "_P").css("color", "#0EA600");
            } 
            else {
                ycolor = "#111111";
                $('#' + msg.name + "_B").css("color", "#111111");
                $('#' + msg.name + "_P").css("color", "#111111");
            }
            $('#' + msg.name + "_P").text(per.toFixed(2) + "%");
        }

        var id = timer[msg.name];
        if (id != null && id != 0) {
            clearTimeout(id);
        };
        $('#' + msg.name + "_B").css({
            "color": "white",
            "background-color": pcolor
        });
        $('#' + msg.name + "_B").text(msg.v.lp);

        var mm = setTimeout(function () {
            $('#' + msg.name + "_B").css({
                "background-color": "transparent",
                "color": $('#' + msg.name + "_P").css('color')
            });
            timer[msg.name] = 0;
        }, 600);
        timer[msg.name] = mm;

    }
});

function showP1()
{
    $('#price01').css("display", "inline");
    $('#price02').css("display", "none");
    $('#price03').css("display", "none");
    $('#img_1').attr("src", "images/lfets-2.jpg");
    $('#img_2').attr("src", "images/lfets-1.jpg");
    $('#img_3').attr("src", "images/lfets-1.jpg");
    $('#img_11').attr("src", "images/rights-2.jpg");
    $('#img_22').attr("src", "images/rights-1.jpg");
    $('#img_33').attr("src", "images/rights-1.jpg");
    socket.emit('delAllSubscription' , []);
    socket.emit('addSubscription' , ['XAUUSD' , 'XAGUSD' , 'UKOIL' , 'USOIL' , 'DXY' , 'EURUSD' , 'GC']);
}
function showP2()
{
    $('#price01').css("display", "none");
    $('#price02').css("display", "inline");
    $('#price03').css("display", "none");
    $('#img_1').attr("src", "images/lfets-1.jpg");
    $('#img_2').attr("src", "images/lfets-2.jpg");
    $('#img_3').attr("src", "images/lfets-1.jpg");
    $('#img_11').attr("src", "images/rights-1.jpg");
    $('#img_22').attr("src", "images/rights-2.jpg");
    $('#img_33').attr("src", "images/rights-1.jpg");
    socket.emit('delAllSubscription' , []);
    socket.emit('addSubscription' , ['GBPUSD', 'USDJPY', 'AUDUSD', 'USDCHF', 'EURGBP', 'EURJPY', 'XPDUSD']);
}
function showP3()
{
    $('#price01').css("display", "none");
    $('#price02').css("display", "none");
    $('#price03').css("display", "inline");
    $('#img_1').attr("src", "images/lfets-1.jpg");
    $('#img_2').attr("src", "images/lfets-1.jpg");
    $('#img_3').attr("src", "images/lfets-2.jpg");
    $('#img_11').attr("src", "images/rights-1.jpg");
    $('#img_22').attr("src", "images/rights-1.jpg");
    $('#img_33').attr("src", "images/rights-2.jpg");
    socket.emit('delAllSubscription' , []);
    socket.emit('addSubscription' , ['DOWI' ,'NASX' ,'SPX500' ,'JPN225' ,'SZZZ' ,'SZCZ' ,'XPTUSD']);
}