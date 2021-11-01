function renderTime(){
    var currentTime = new Date();
    currentTime.set
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();

    hour -= 12;

    if(hour < 10){
        hour = "0" + hour;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(second < 10){ 
        second = "0" + second;
    }

    var myClock = document.getElementById("clockDisplay");
    myClock.textContent = hour + ":" + minute + ":" + second;
    myClock.innerText = hour + ":" + minute + ":" + second;

    setTimeout("renderTime()", 1000);
}

renderTime();