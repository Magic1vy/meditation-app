const btn = document.querySelector("#myBtn");
btn.addEventListener("click", ()=>{
    
    document.querySelector("#player").play;
    document.querySelector("#myVideo").play;
})

console.log(btn)

const timer = 5;
let amountTime = timer * 60;

function calculateTimer(){
    const countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime % 60;

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if(amountTime < 0){
        stopTimer();
        amountTime = 0;
    }

}

let timerId =  setInterval(calculateTimer,1000);

function stopTimer(){
    clearInterval(timerId);
}