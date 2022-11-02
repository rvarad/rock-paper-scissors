const rpsArray = ["Rock","Paper","Scissors"];
function getComputerChoice () {
    let choice = rpsArray[Math.floor(Math.random()*3)];
    // console.log(choice.toUpperCase());
    return (choice.toUpperCase());
}

// let playerSelection = getPlayerChoice();
// console.log(playerSelection);
let computerSelection = getComputerChoice();
// computerSelection;

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playround (player, computer) {
    // console.log(player,computer)
    // let player = playerSelection;
    // let computer = computerSelection;
    if (player==computer) {
        console.log(`You chose - ${player}, Computer chose - ${computer}. It's a tie!`);
        // console.log(`Player Score - ${playerScore}, Computer Score - ${computerScore}`);
        roundWinner = 'Tie';
        return (playerScore, computerScore);
    } else if ((player == "ROCK" && computer == "PAPER") ||
               (player == "PAPER" && computer == "SCISSORS") ||
               (player == "SCISSORS" && computer == "ROCK")) {
                console.log(`You chose - ${player}, Computer chose - ${computer}. You lose!`);
                // console.log(`Player Score - ${playerScore}, Computer Score - ${computerScore}`);
                console.log(roundWinner =  'Computer');
                return(roundWinner =  'Computer');
    } else if ((player == "ROCK" && computer == "SCISSORS") ||
               (player == "PAPER" && computer == "ROCK") ||
               (player == "SCISSORS" && computer == "PAPER")) {
                console.log(`You chose - ${player}, Computer chose - ${computer}. You win!`);
                console.log(roundWinner = 'Player');             
                return(roundWinner = 'Player');             
    } else {
        console.log("ERROR");
        return(roundWinner = '');
    }
}

function game() {
    for (i=0;i<5;) {
        console.log('Round starts');
        let getPlayerChoice = (prompt("Choose among: ", rpsArray)).toUpperCase();
        playround(getPlayerChoice,getComputerChoice());
        if (roundWinner == 'Computer') {
            computerScore++;
            i++;
            console.log(`Player score - ${playerScore}, Computer score - ${computerScore}`);
        } else if (roundWinner == 'Player') {
            playerScore++;
            i++;
            console.log(`Player score - ${playerScore}, Computer score - ${computerScore}`);
        } else if (roundWinner == 'Tie') {
            console.log(`Player score - ${playerScore}, Computer score - ${computerScore}`);
        }
    }
    playerScore > computerScore ? console.log("You won!"):console.log("Computer won!");
}

game();

// get computer choice
// get player choice
// put them in a function to return won or lost
// run a loop and record 