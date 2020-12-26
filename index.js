$ = document.getElementById;
var timer = 1 * 60 * 60; //hr min sec
function startCountdown(display) {
    var hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // properly format to include 0 in text
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
        //     timer = duration;
        }
    }, 1000);
}

function addTime(minutes){
    timer += minutes * 60;
}

//Start application
var initialIntervalCheck = setInterval(function(){
    var time = new Date();
    // As soon as time turns noon 26/12/2020, start countdown
    if ((time.getFullYear() === 2020) &&
        (time.getMonth() === 12) &&
        (time.getDate() === 26) &&
        (time.getHours() === 12)) {
            closeCheckLoop();
    }
}, 2000);

function closeCheckLoop(){
    console.log("in closeCheckLoog");
    clearInterval(initialIntervalCheck);
    $("#hint").css("visibility","visible");
}

var display = document.querySelector('#time');
startCountdown(display);