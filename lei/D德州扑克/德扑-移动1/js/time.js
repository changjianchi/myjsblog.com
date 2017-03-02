$(function(){
        var Dtime = $('.d-time');
        var Dtimeb = $('.d-time b');
        var nbad = Dtimeb.eq(0).html();
        var nbadate = (nbad + ' ' +Dtimeb.eq(1).html()).toString(); 
        console.log(Dtimeb.eq(0))
        var endTime = +new Date(nbadate);
        var ob = function(a){if(a<10){a='0'+a;}}
        function formatShowTime(time){
            var endTimeStr = "";
            var second = time;
            var tempDataMinutes = second-(new Date()).getTime();
            
            
            var dayTime = Math.floor(tempDataMinutes/(24*60*60*1000));
            // endTimeStr+= Number(dayTime)>0?"<span class='c-gap-left'>"+dayTime+"天</span>":"";

            var leave1 = tempDataMinutes%(24*60*60*1000);
            var hoursTime = Math.floor(dayTime*24+leave1/(3600*1000));
            if(hoursTime < 10){
                hoursTime = '0'+hoursTime;
            }else if(hoursTime>99){
                hoursTime = 99;
            }
            endTimeStr+= "<b class='c-gap-left'>"+hoursTime+":</b>";
            
            
            var leave2 = leave1%(3600*1000);
            var minutes = Math.floor(leave2/(60*1000));
            if(minutes < 10){
                minutes = '0'+minutes;
            }
            endTimeStr+= "<b class='c-gap-left'>"+minutes+":</b>";      
            

            var leave3=leave2%(60*1000);    
            var seconds=Math.round(leave3/1000);
            if(seconds < 10){
                seconds = '0'+seconds;
            }
            endTimeStr+= "<b class='c-gap-left'>"+seconds+"</b>";   
            Dtime.html(endTimeStr);

            setTimeout(function(){
                formatShowTime(time);
            },1000)
        };
        formatShowTime(endTime);
    });