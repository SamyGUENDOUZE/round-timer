var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var boxing_bell = new Audio("sound/boxing_bell.mp3");
var whistle = new Audio("sound/whistle_referee.mp3");

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
        boxing_bell.play();
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 3;
    ws.innerText = "00";

    bm.innerText = 1;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;

    // PLay the bell sound to tell the end of session
    whistle.play();
})


//Start Timer Function
function timer(){
    
    //Work Timer Countdown
    if(ws.innerText !== 0){
        ws.innerText--;
    } else if(wm.innerText !== 0 && ws.innerText === 0){
        ws.innerText = 59;
        wm.innerText--;
        // progressBar configuration
        const timerElement = document.getElementsByClassName("timer");
        const progressBar = document.getElementById("progressBar");

        let timerCounter = progressBar.max;

        const interval = setInterval(() => {
        if (timerCounter <= 1) {
            clearInterval(interval);
        }

        timerCounter = timerCounter - 1;
        timerElement.innerText = timerCounter;
        progressBar.value = timerCounter;
}, 1000);
    }

    //Break Timer Countdown
    if(wm.innerText === 0 && ws.innerText === 0){
        if(bs.innerText !== 0){
            bs.innerText--;
        } else if(bm.innerText !== 0 && bs.innerText === 0){
            bs.innerText = 59;
            bm.innerText--;
            // progressBar configuration
            const timerElement = document.getElementsByClassName("timer");
            const progressBar = document.getElementById("progressBar");

            let timerCounter = progressBar.max;

            const interval = setInterval(() => {
            if (timerCounter <= 1) {
                clearInterval(interval);
        }

            timerCounter = timerCounter - 1;
            timerElement.innerText = timerCounter;
            progressBar.value = timerCounter;
}, 1000);
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(wm.innerText === 0 && ws.innerText === 0 && bm.innerText === 0 && bs.innerText === 0){
        wm.innerText = 3;
        ws.innerText = "00";

        bm.innerText = 1;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}



//Partie du script qui gère le déplacement d'image


//
// function deplace () {
//     for (var i = 0; i < nbFormules; i++) {
//       if (formules[i]["right"] > largeurG) {
//         formules[i]["right"] = 0;
//         formules[i]["top"] = Math.floor(Math.random()*hauteurG);
//       } else
//         formules[i]["right"] += 1;
//       document.getElementById('g'+i).style.top = formules[i]["top"]+'px';
//       document.getElementById('g'+i).style.right = formules[i]["right"]+'px'; //c'est ce qui permet le sens de déplacement de l'objet
//     }
//   }
//
  // function deplaceSur (id) {
  //   //spécifier le nombre d'objets ici
  //   nbFormules = 4;
  //   //la dimension de l'objet
  //   objectWidth = 100;
  //   objectHeight = 100;
  //   //dimension de la zone
  //   largeurG = parseInt(document.getElementById(id).style.width.substr(0, document.getElementById(id).style.width.length-2));
  //   hauteurG = parseInt(document.getElementById(id).style.height.substr(0, document.getElementById(id).style.height.length-2));
  //   largeurG -= objectWidth;
  //   hauteurG -= objectHeight;
  //   formules = [];
  //   for (var i=0; i < nbFormules; i++) {
  //     formules[i] = [];
  //     formules[i]["right"] = Math.floor(Math.random() * largeurG);
  //     formules[i]["top"] = Math.floor(Math.random()*hauteurG);
  //
  //     document.write ('<span id="g'+i+'" style="position: absolute; right: '+formules[i]["right"]+'px; top: '+formules[i]["top"]+'px">');
  //     // placer ici l'objet qui défile !
  //     document.write ("<img src='goku_cloud_little.png'>");
  //     document.write ('</span>');
  //   }
  //
  //   intervalG = window.setInterval ("deplace()", 30);
  //   // là où il y a le chiffre 30, c'est ce qui permet de jouer sur le temps
  // }