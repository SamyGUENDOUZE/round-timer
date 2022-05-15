// VARIABLE
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let setting = document.getElementById('setting')
let roundCounter = document.getElementById('counter');

let minuteTimer = document.getElementById('w_minutes');
let secondeTimer = document.getElementById('w_seconds');

let breakSeconde = document.getElementById('b_seconds');
let breakMinute = document.getElementById('b_minutes');

let container = document.getElementById('shadow-container')
let closeIcon = document.getElementById('close-icon')

let minuteInput = document.getElementById('timer-minute')
let secondeInput = document.getElementById('timer-seconde')
let roundInput = document.getElementById('round-input')
let breakMinuteInput = document.getElementById('break-minute-input')
let breakSecondeInput = document.getElementById('break-seconde-input')

let timerFormButton = document.getElementById('form-setting-timer')

let boxing_bell = new Audio("sound/boxing_bell.mp3");

let whistle = new Audio("sound/whistle_referee.mp3");
//store a reference to a timer variable
let intervalChecker;

// FUNCTION


function Timer() {
    if (minuteTimer.innerText <= 0 && roundCounter.innerText <= 0 && (secondeTimer.innerText <= 0 || secondeTimer.innerText === "00")){
        resetAll()
        return
    }
    if ( (secondeTimer.innerText <= 0 || secondeTimer.innerText === "00") && minuteTimer.innerText <= 0 && roundCounter.innerText > 0 ){
        roundCounter.innerText--
        minuteTimer.innerText = minuteInput.value;
        secondeTimer.innerText = secondeInput.value;
    }
    if(secondeTimer.innerText === "00" || secondeTimer.innerText === "0" && minuteTimer.innerText > 0){
        minuteTimer.innerText--
        secondeTimer.innerText = "59";
    }else {
        secondeTimer.innerText--
    }
}


function playBell() {
    boxing_bell.play().then(() => {
      intervalChecker =  setInterval(Timer, 1000)
    });
}

function displayForm() {
    container.classList.remove('hidden')
}

function closeForm() {
    container.classList.add('hidden')
}

function resetAll(){
    [minuteTimer, breakMinute,roundCounter].forEach(i => {
        i.innerText = '0'
    });
    [secondeTimer, breakSeconde].forEach(i => {
        i.innerText = "00"
    })
    stopTimer()
}



function stopTimer() {
    clearInterval(intervalChecker)
    intervalChecker = undefined;
}

function startTime(){
    Timer()
}

// à revoir
function timerSetting() {
    if (intervalChecker === undefined) {
        minuteTimer.innerText = minuteInput.value;
        secondeTimer.innerText = secondeInput.value;

        roundCounter.innerText = roundInput.value;

        breakMinute.innerText = breakMinuteInput.value;
        breakSecondeInput.innerText = breakSeconde.value;

        closeForm();
        playBell();

    } else {
        intervalChecker = undefined
        timerSetting()
    }
}

// EVENT LISTENER

setting.addEventListener('click', displayForm)

closeIcon.addEventListener('click', closeForm)

timerFormButton.addEventListener('click', timerSetting)

reset.addEventListener('click', resetAll)

stop.addEventListener('click', stopTimer)

start.addEventListener('click', startTime)



