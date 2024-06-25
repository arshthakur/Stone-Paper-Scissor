let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score")
let compScorePara = document.querySelector("#comp-score")

const genCompChoice =()=>{
    const option = ["rock","paper","scissor"];
   const ranIdx = Math.floor(Math.random()*3);
   return option[ranIdx];
}
const drawGame = ()=>{
    
    msg.innerText="Game was draw. Play again"
    msg.style.backgroundColor="orange";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`Congratulations! you win. your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`Sorry! you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice)=>{
    const compChoice = genCompChoice();
   
       if(userChoice===compChoice){
        drawGame();
       }
       else{
        let userWin = true;
       if(userChoice==="rock"){
        userWin = compChoice === "paper"?false:true;
       }
       else if(userChoice==="paper"){
        userWin = compChoice === "scissor"?false:true;
       }
       else{
        userWin = compChoice === "rock"?false:true;
       }
       showWinner(userWin,userChoice,compChoice);
       }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
   playGame(userChoice);
    });
});