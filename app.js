const selecations = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function getComputerSelecation(){

    return selecations[Math.floor(Math.random() * 3)];

}



function playRound(playerSelecation, computerSelection){

    if (playerSelecation == computerSelection)
        return;

    if (playerSelecation == "rock" && computerSelection == "scissors")
        playerScore++;

    else if (playerSelecation == "paper" && computerSelection == "rock")
        playerScore++;

    else if (playerSelecation == "scissors" && computerSelection == "paper")
        playerScore++;
    
    else
        computerScore++;

}

function game(){
    
        for (let i = 0; i < 5; i++){
            let playerSelecation = window.prompt("enter your chioce: ").toLocaleLowerCase();
            const computerSelection = getComputerSelecation();
            playRound(playerSelecation, computerSelection);
            console.log("round: " + (i + 1));
            console.log("player selection: " + playerSelecation);
            console.log("computer selection: " + computerSelection);
            console.log("player score: " + playerScore);
            console.log("computer score: " + computerScore);
        }
    
        if (playerScore > computerScore)
            console.log("You win");
    
        else if (playerScore < computerScore)
            console.log("You lose");
    
        else
            console.log("Draw");
}


game();