const btnThing = document.getElementById("pomodoro_boutton");
const textBtn = ["start","pause","restart"]
const pomodoroBar = document.getElementById("progress-bar");
const pomodoroTimer = document.getElementById("timer");

btnThing.addEventListener("click", ()=>{
    let minute=0;
    let seconde=20;
    let totalTimeInSec=minute*60+seconde;

    if (minute<10){minute = "0"+minute};
    if (seconde<10){seconde = "0"+seconde};
    pomodoroTimer.innerText = minute + ":" + seconde;
    //pomodoroBar.style.animation = "progress-animation "+totalTimeInSec +"s linear 0s 1 forwards"
    //pomodoroBar.style["dash"] = "calc("+totalTimeInSec+" * var(360)) / 100" ;
    document.querySelector(":root").style.setProperty("--progress",5) ;
})
