let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");

const genCompChoice= (userChoice) =>{
    const options=["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
    //rock paper scissors
    //Math.random() -- generate random decimal number btw 0-1
    //Math.random()*n -- generate ramdom decimal number btw 0-n-1, 0.25534534, 1.69080942
    //Math.floor(Math.random()*n) -- generate random number btw 0-n-1  example-2,5,8,1,6
}

const drawGame=() =>{
    //console.log("game was draw");
    msg.innerText="Game was Draw. Play Again";
    msg.style.backgroundColor="black";
}

 const showWinner=(userWin, userChoice, CompChoice) =>{
    if(userWin){
        userScore++;
        userscore.innerText=userScore;
        //console.log("You win!");
        msg.innerText=`You Win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    } else{
        compScore++;
        compscore.innerText=compScore;
        //console.log("You lose");
        msg.innerText=`You lose ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
 } 

const playgame = (userChoice) =>{
    //console.log("user choice= ", userChoice);
   // generate computer choice
   const CompChoice= genCompChoice();
   //console.log("computer choice= ", CompChoice);

   if(userChoice===CompChoice){
        //Draw Game
        drawGame();
   } else{
        let userWin= true;
        if(userChoice==="rock"){
            //comp choice -- scissors, paper
            userWin= CompChoice==="paper" ? false: true;
        } else if(userChoice==="paper"){
            //comp choice -- scissors, rock
            userWin= CompChoice==="rock"?true:false;
        } else{
            //paper, rock
            userWin= CompChoice==="paper"?true:false;
        }
        showWinner(userWin, userChoice, CompChoice);
   }
}


choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        playgame(userChoice)
    })
})