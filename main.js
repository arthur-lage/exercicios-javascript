let time = 10
let isActive = false

let clickedStop = false

let timerDisplay = document.getElementById("timer")

let bgIndex = 0

let startButton = document.getElementById("start-button")

function setTimerToDefault(){
    timerDisplay.innerHTML = `${time}:00`
}

function timer(duration, display){
        let timer = duration, minutes, seconds
        
        startButton.innerHTML = "Parar"
        startButton.style.backgroundColor = "#f74c4c"
        startButton.onmouseenter = startButton.style.backgroundColor = "#a82626"
        startButton.onmouseleave = startButton.style.backgroundColor = "#f74c4c"
        
        setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.innerHTML = minutes + ":" + seconds;

            if (--timer < 0) {
                timerDisplay.innerHTML = "Finished"
                let alarm = new Audio("sounds/alarm.mp3")
                alarm.play()
            }
        }, 1000);

    }


function startTimer(){

        if(isActive){
            location.reload()
            clickedStop = true
        } else {
            myTime = time
            let newTime = myTime * 60
            timer(newTime, timerDisplay)
    
            isActive = true
        }
}


//Change background

function increaseBackgroundIndex(){
    if(bgIndex == 3){
        bgIndex = 0
        document.body.style.backgroundImage = `url(images/bg${bgIndex}.jpg)`
    } else {
        bgIndex += 1
        document.body.style.backgroundImage = `url(images/bg${bgIndex}.jpg)`
    }
}

function decreaseBackgroundIndex(){
    if(bgIndex == 0){
        bgIndex = 3
        document.body.style.backgroundImage = `url(images/bg${bgIndex}.jpg)`
    } else {
        bgIndex -= 1
        document.body.style.backgroundImage = `url(images/bg${bgIndex}.jpg)`
    }
}

//Increase or decrease timer

function increase(){
    if(isActive == false){
        time += 1
        timerDisplay.innerHTML = `${time}:00`
    } else {
        alert("You can't change the timer while it is counting")
    }
}

function decrease(){
    if(isActive == false){  
        if(time < 2){
            alert("Minimum value reached!")
        } else {
            time -= 1
            timerDisplay.innerHTML = `${time}:00`
        }
    } else {
        alert("You can't change the timer while it is counting")
    }
}

/* 
let timer = duration, minutes, seconds

setInterval(() => {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(time % 60, 10)

    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds

    timerDisplay.innerHTML = `${minutes}:${seconds}`
},1000)


        let timer = duration, minutes, seconds

*/