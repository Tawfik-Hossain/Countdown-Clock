window.onload = function() {

    var second = 00;
    var msecond = 00;
    var minute = 00;
    var amsecond = document.getElementById('mseconds-c');
    var asecond = document.getElementById('sec-c');
    var aminutes = document.getElementById('mins-c');

    var sbutton = document.getElementById('b-s');
    var stbutton = document.getElementById('b-st');
    var rbutton = document.getElementById('b-r');
    var Interval ; 

    sbutton.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(sTimer, 10);
        
    }


    stbutton.onclick = function() {
        clearInterval(Interval);
     }
 
    

    rbutton.onclick = function() {
        clearInterval(Interval);
       msecond = "00";
       second = "00";
       minute = "00";

       amsecond.innerHTML = msecond;
       asecond.innerHTML = second;
       aminutes.innerHTML = minute;
    }

    function sTimer() {
        msecond++;

        if(msecond <= 9){
            amsecond.innerHTML = "0" + msecond;
        }

        if(msecond > 9){
            amsecond.innerHTML = msecond;
        }

        if(msecond > 99){
            console.log("second");
            second++;
            asecond.innerHTML = "0" + second;
            msecond = 0;
            amsecond.innerHTML = "0" + 0;
        }

        if(second > 9){
            asecond.innerHTML = second;
        }

        if(minute > 9){
          aminutes.innerHTML = minute;
        }

        if(minute > 60){
            aminutes.innerHTML = "0" + 0;
        }
    }
}