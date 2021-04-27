var hourTick = document.querySelector('.hours');
var minuteTick = document.querySelector('.minutes');
var secondTick = document.querySelector('.seconds');
var msecondTick = document.querySelector('.mseconds');


function ticking(){ 

    let current = new Date();

    var hours = current.getHours();
    var minutes = current.getMinutes();
    var seconds = current.getSeconds();
    var mseconds = current.getMilliseconds();


    var hourFraction = hours / 12;
    var minuteFraction = minutes / 60;
    var secondFraction = seconds / 60;
    var msecondFraction = mseconds / 1000;



    var hourRotate = hourFraction * 360;
    var minuteRotate = minuteFraction * 360;
    var secondRotate = secondFraction * 360;
    var msecondRotate = msecondFraction * 360;



    hourTick.style.transform = 'rotate('+hourRotate+'deg)';
    minuteTick.style.transform = 'rotate('+minuteRotate+'deg)';
    secondTick.style.transform = 'rotate('+secondRotate+'deg)';
    msecondTick.style.transform = 'rotate('+msecondRotate+'deg)';




    playAudio();
    
    if(hours>12){
        hours = hours-12;
    }
    

    if(hours<10){
        var h =document.querySelector('.digital-container').innerHTML = `0${hours}`
    }
    if(minutes<10){
        minutes = document.querySelector('.digital-container').innerHTML = `0${minutes}`
    }
    if(seconds<10){
       seconds = document.querySelector('.digital-container').innerHTML = `0${seconds}`
    }
    if(mseconds<10){
        seconds = document.querySelector('.digital-container').innerHTML = `00${mseconds}`
     }
     if(mseconds<100){
        seconds = document.querySelector('.digital-container').innerHTML = `0${mseconds}`
     }
     
    


    document.querySelector('.digital-container').innerHTML = hours +':'+minutes+':'+seconds+ ":"+mseconds;    
    

}
setInterval(ticking, 1);
var audio = new Audio("Clock-Ticking-D.mp3");

function playAudio() { 
    audio.play();
} 




