    const playerText= document.querySelector("#playerText");
    const computerText= document.querySelector("#computerText");
    const resultText= document.querySelector("#resultText");
    const button=document.querySelectorAll(".button");
    const playerscore=document.querySelector("#pscore");
    const computerscore=document.querySelector("#cpscore");

    let player;
    let computer;
    let result;
    let pscore=0;
    let cpscore=0;
    

    button.forEach(button => button.addEventListener("click",() => {

        player =button.textContent;
        computerPlay()
        resultPost()
        gamescore()
        playerText.textContent = (`Player: ${player}`);
        computerText.textContent = (`Computer ${computer}`);
        resultText.textContent = checkWinner()
        playerscore.textContent=(`${pscore}`);
        computerscore.textContent=(` ${cpscore}`);
    }))
function computerPlay(){
    const random = Math.floor(Math.random() * 3)+1 ;
    switch(random){
        case 1:
            computer="Rock";
            break;
        case 2 :computer="Paper";
            break;
        case 3: computer="Scissors";
            break;
    }
}
   function checkWinner(){
       if (player==computer){
           return "Tie!";
       }
       else if (computer == "Rock"){
           return (player=="Paper") ? "You Win!" : "You Lose!"
       }
       else if (computer == "Paper"){
        return (player=="Scissors") ? "You Win!" : "You Lose!"
   }
   else if (computer == "Scissors"){
    return (player=="Rock") ? "You Win!" : "You Lose!"
}
} 

function resultPost(){
    if (player==computer){
        pscore+=0;
        cpscore+=0;
    }
    else {
        if (player=="Rock"){
            if (computer=="Scissors"){
                pscore++;
            }
            else if (computer=="Paper"){
                cpscore++;
            }
        }
        if (player=="Paper"){
            if (computer=="Rock"){
                pscore++;
            }
            else if (computer=="Scissors"){
                cpscore++;
            }
        }
        if (player=="Scissors"){
            if (computer=="Paper"){
                pscore++;
            }
            else if (computer=="Rock"){
                cpscore++;
            }
            
        }
    }
    document.getElementById("pscore").innerText=pscore;
    document.getElementById("cpscore").innerText=cpscore;
}
function gamescore(){
if (pscore ==5){
    alert("You Win!");
    pscore=0;
    cpscore=0;
}
    else if (cpscore ==5){
        alert("You Lose try again!")
        pscore=0;
    cpscore=0;

    }
}
