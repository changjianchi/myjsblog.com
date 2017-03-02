$(function(){
    function fun(){
        var winWidth = $(window).width();
        $('html').css('font-size',winWidth / 6.4 + 'px');
        console.log(winWidth)
    }
    fun();
    $(window).on('resize',function(){
        fun();
    });

    //var nbadate = '2016/05/18';
    var nbad = '2016/05/28'
    var nbadate = (nbad+' 23:59:59').toString();
    var endTime = new Date(nbadate);
    // var endTime = new Date(Date.parse(nbadate.replace(/-/g,"/"))).getTime(); 
    function formatShowTime(time){
        var endTimeStr = "";
        var second = time;
        var tempDataMinutes = second-(new Date()).getTime();
        
        // var dayTime = Math.floor(tempDataMinutes/(24*60*60*1000));
        // endTimeStr+= dayTime>0?"<span class='c-gap-left'>"+dayTime+"天</span>":"";         
       
        var leave1 = tempDataMinutes%(24*60*60*1000);
        var hoursTime = Math.floor(leave1/(3600*1000));
            if(hoursTime < 10){
                hoursTime = '0'+hoursTime;
            }
        endTimeStr+= Number(hoursTime)>=0?"<span class='c-gap-left'>"+hoursTime+"</span>":"";

        
        var leave2 = leave1%(3600*1000);
        var minutes = Math.floor(leave2/(60*1000));
            if(minutes < 10){
                minutes = '0'+minutes;
            }
        endTimeStr+= Number(minutes)>=0?"<span class='c-gap-left'>"+minutes+"</span>":"";      
        

        var leave3=leave2%(60*1000);    
        var seconds=Math.round(leave3/1000);
            if(seconds < 10){
                seconds = '0'+seconds;
            }
        endTimeStr+= Number(seconds)>=0?"<span class='c-gap-left'>"+seconds+"</span>":"";   

        $('.time-ing').html(endTimeStr);

        setTimeout(function(){
            formatShowTime(time)
        },1000)
    };
    formatShowTime(endTime);
    console.log(1);
});
        
