const defaultDuration = 0.25 * 60;
let pomoLength = 25 * 60;
let shortLength = 5 * 60;
let longLength = 10 * 60;
let duration = 0;
let currentDuration = 0;
let isRunning = false

const btnThing = document.getElementById("pomodoro_boutton");

const pomodoroBar = document.getElementById("progress-bar");
const pomodoroTimer = document.getElementById("timer");

var timer = "";

function updateTimerDisplay(){
    console.log(currentDuration)
    let minutes = Math.floor(currentDuration / 60);
    let seconds = currentDuration - minutes*60;

    /*if (minutes<10){
        minutes = "0"+toString(minutes)
    };*/
    if (seconds<10){
        seconds = "0"+seconds
    };
    pomodoroTimer.innerText = minutes + ":" + seconds;
    console.log(currentDuration + " sur " + duration)
    //btnThing.innerText = textBtn[1];
    pomodoroBar.style.animation = "progress-animation "+duration +"s linear 0s 1 forwards"

}
function startTimer(){
    console.log("StartTimer");
    if (currentDuration <= 0){
        setTimer();
    }
    //if (isRunning) return;
    isRunning = true;
    clearInterval(timer)
    timer = setInterval(runningTimer, 1000);
    btnThing.innerText = textBtn[1];
}
function runningTimer(){
    console.log(currentDuration)
        if (currentDuration <= 0) {
            currentZone = document.querySelector("input[name='type_length']:checked").value
            changeZone(currentZone)// Pause de 5 minutes
            if (currentZone != "long"){
                startTimer(); // Démarre la pause
            } else {
                btnThing.innerText = "RESTART"
            }
            //pomodoroBar.style.animation = "progress-animation "+duration +"s linear 0s "+currentDuration+" forwards"
        } else {
            currentDuration--;
            updateTimerDisplay();
        }
        console.log(timer)
    }

for (index=0;index<document.querySelectorAll("input[name='type_length']").length ; index++){
    document.querySelectorAll("input[name='type_length']")[index].addEventListener("click", setTimer)
}

function changeZone(currentZone){
    console.log("change zone")
    console.log(currentZone)
    
    switch(currentZone) {
        case "pomo": newZone = "short";break;
        case "short": newZone = "long";break;
        case "long": newZone = "pomo";break;
    }
    document.getElementById(newZone).checked = true;
    setTimer()
    resetTimer()
}
function setTimer(){
    console.log("setTimer");
    
    let newZone = document.querySelector("input[name='type_length']:checked").value;
    let newTime = ""
    switch (newZone){
        case "pomo": newTime = pomoLength;break;
        case "short": newTime = shortLength;break;
        case "long": newTime = longLength;break;
    }
    isRunning = true;
    duration = newTime;
    currentDuration = duration;
    updateTimerDisplay()
    pauseTimer()
}

function resetTimer() {
    console.log("resetTimer");
    clearInterval(timer);
    
    setTimer();// Réinitialise à 0.25 minutes
    //isRunning = false;
    updateTimerDisplay();
}
function pauseTimer(){
    console.log("pauseTimer");

    pomodoroBar.style["animation-play-state"] = "paused";
    clearInterval(timer);
    timer = ""
    btnThing.innerText = "START"
}

const textBtn = ["START","PAUSE","RESTART"]
function doThing(){
    console.log("dothing");

    console.log(btnThing.innerText)
    switch (btnThing.innerText) {
        case textBtn[0]: case textBtn[2]:
            
            pomodoroBar.style.animation = "progress-animation "+duration +"s linear 0s 1 forwards"
            
            updateTimerDisplay()
            startTimer();
            
            break;
        case textBtn[1]:
           pauseTimer()
            break;
    
        default:
            duration = defaultDuration;
            currentDuration = duration
            updateTimerDisplay()
            startTimer();
            break;
    }
}
btnThing.addEventListener("click", doThing);



const btnApply = document.getElementById("btn_apply")
btnApply.addEventListener("click", appliquerModification )
function appliquerModification(){
    /* Longueur en minutes */
    let value = 0;
    arrayVerifi = Array("pomo", "short", "long");
    for (let index = 0; index < arrayVerifi.length; index++){
        element = arrayVerifi[index];
        value = document.getElementById("option_time_"+element).value;
        console.log( eval(element+"Length"))
        if (value <= 25){
            eval(element+"Length = value*60") 
        }
        
    };
    console.log(pomoLength +" "+ shortLength + " "+ longLength)
    /* Changement de la font */
    let newFont =document.querySelector("input[name='theme_font']:checked").value
    console.log(newFont)
    document.querySelector("body").style.fontFamily = newFont;

    /* Changement du theme de couleur */
    let newColor = document.querySelector("input[name='theme_color']:checked").value
    console.log(newColor)
    changeThemeColor(newColor)
    closePageOption()
}
function changeThemeColor(newColor){
    let everythingThatCanChangeColor =document.querySelectorAll(".canChangeColor")
    for(index=0;index<everythingThatCanChangeColor.length;index++){
        everythingThatCanChangeColor[index].classList.remove("blue")
        everythingThatCanChangeColor[index].classList.remove("red")
        everythingThatCanChangeColor[index].classList.remove("purple")
        everythingThatCanChangeColor[index].classList.add(newColor)
    }
}
document.getElementById("btn_close").addEventListener("click", closePageOption)
function closePageOption(){
    document.getElementById("option_logo").checked = false
}

appliquerModification()