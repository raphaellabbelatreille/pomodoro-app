const defaultDuration = 0.25 * 60;
let duration = 0;
let isRunning = false

const btnThing = document.getElementById("pomodoro_boutton");

const pomodoroBar = document.getElementById("progress-bar");
const pomodoroTimer = document.getElementById("timer");

function updateTimerDisplay(){
    const minutes = Math.floor(duration / 60);
    console.log(minutes)
    const seconds = duration - minutes*60;
    console.log(seconds)

    /*if (minutes<10){
        minutes = "0"+toString(minutes)
    };
    if (seconds<10){
        seconds = "0"+seconds
    };*/
    pomodoroTimer.innerText = minutes + ":" + seconds;
    //pomodoroBar.style.animation = "progress-animation "+totalTimeInSec +"s linear 0s 1 forwards"
    //pomodoroBar.style["dash"] = "calc("+totalTimeInSec+" * var(360)) / 100" ;
    document.querySelector(":root").style.setProperty("--progress",10) ;
    console.log(duration)
    btnThing.innerText = textBtn[1]
}
function startTimer(){
    if (isRunning) return;
    isRunning = true;

    timer = setInterval(() => {
        if (duration <= 0) {
            clearInterval(timer);
            alert("Pomodoro terminé ! Prends une pause.");
            isRunning = false;
            duration = 5 * 60; // Pause de 5 minutes
            startTimer(); // Démarre la pause
            pomodoroBar.style.animation = "progress-animation "+duration +"s linear 0s 1 forwards"

        } else {
            duration--;
            updateTimerDisplay();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    duration = defaultDuration; // Réinitialise à 0.25 minutes
    isRunning = false;
    updateTimerDisplay();
}
function pauseTimer(){
    pomodoroBar.style["animation-play-state"] = "paused"
}

const textBtn = ["START","PAUSE","RESTART"]
function doThing(){
    console.log(btnThing.innerText)
    switch (btnThing.innerText) {
        case textBtn[0]:
            
            pomodoroBar.style.animation = "progress-animation "+duration +"s linear 0s 1 forwards"
            updateTimerDisplay()
            startTimer();
            
            break;
        case textBtn[1]:
           pauseTimer()
            break;
    
        default:
            duration = defaultDuration;
            updateTimerDisplay()
            startTimer();
            break;
    }
}
btnThing.addEventListener("click", doThing);