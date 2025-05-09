let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.getElementById("msg");

const usScore = document.getElementById("userscore");
const comScore = document.getElementById("computerscore");

const genCompChoice = ()=>{
    const options = ["Scissor","paper","rock"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = ()=>{
    msg.innerText = "Game was Draw";
}

const showWinner = (userWin)=>{
    if(userWin){
        msg.innerText = "You Win";
        usScore.innerText = ++userScore;
    }
    else{
        msg.innerText = "You Lose";
        computerscore.innerText = ++compScore;
    }
}


const playGame = (userChoice)=>{
    console.log("userchoice",userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            if(compChoice === "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(userChoice === "paper"){
            if(compChoice === "scissors"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin);
        
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
