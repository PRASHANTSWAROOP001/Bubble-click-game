let score = 0;

function randomValues(){
    return Math.floor(Math.random()*10 +1)
}


function makeBubble(){

    let bubbleDiv = "";

    for( let i =0; i<160; i++){
        bubbleDiv += `<div class = "bubble">${randomValues()}</div>`
    }
    
    document.getElementById("panelBottom").innerHTML = bubbleDiv;

}


const getNewHit = () =>{
    document.getElementById("Hit").textContent = randomValues();
}

function Timer (){
    let time = 30;

    const Timeclock = setInterval(function(){
        if(time >= 0){
            document.getElementById("Timer").textContent = time;
            time--;
        }
        else{
            clearInterval(Timeclock);
            document.querySelector("#panelBottom").innerHTML = `<h1 id="GameOver">Game over!!! Your Score is: ${score}</h1>`
        }
    },1000)

    
}

function increaseScore(){
    score += 10;
    document.getElementById("Score").textContent = score;
}

function getClick(){

    const panleBottom = document.querySelector("#panelBottom")
    panleBottom.addEventListener("click",(e) => {

        //get HitId 

        const hitId = document.getElementById("Hit")
        let hitValue = Number(hitId.textContent)

        // getClicked Value

        let clickedValue = Number(e.target.textContent);
        
       

        if(hitValue === clickedValue){
            increaseScore();
            getNewHit();
            makeBubble();
        }

        

      },false)

}



getNewHit();

makeBubble();

Timer();

getClick();



