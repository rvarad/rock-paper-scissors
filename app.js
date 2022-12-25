const array = ["Rock", "Paper", "Scissors"];

let getComputerChoice = function () {
    let choice = array[Math.floor(Math.random() * 3)]
    return (choice.toUpperCase());
}

let getPlayerChoice;

let playerscore = 0;
let computerscore = 0;

let body = document.querySelector('body');

let roundresult = document.querySelector('.roundresult');
let roundchoicestext = document.querySelector('.roundchoicestext');

let playerpoints = document.getElementById('playerscore');
let computerpoints = document.getElementById('computerscore');

let finalResult = document.createElement('div');
finalResult.classList.add('finalresult');

let checkWinner = function () {
    if (playerscore === 5) {
        finalResult.textContent = "You are the CHAMPION!";
        body.appendChild(finalResult);
    } else if (computerscore === 5) {
        finalResult.textContent = "Computer is the CHAMPION!";
        body.appendChild(finalResult);
    }
}

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerscore < 5 && computerscore < 5) {
            getPlayerChoice = button.id.replace('btn', '').toUpperCase();
            playGame(getPlayerChoice, getComputerChoice());        
        }
    });
});

let playGame = function (player, computer) {
    if ((player === "ROCK" && computer === "SCISSORS") ||
        (player === "PAPER" && computer === "ROCK") ||
        (player === "SCISSORS" && computer === "PAPER")) {
        playerscore++;
        console.log(`You chose ${player}, computer chose ${computer}. You win.`);
        console.log(`Your Score: ${playerscore}, Computer Score: ${computerscore}`);
        roundresult.textContent = `You win.`;
        roundchoicestext.textContent = `You chose ${player}, computer chose ${computer}.`;
        playerpoints.textContent = `You : ${playerscore}`;
        computerpoints.textContent = `Computer : ${computerscore}`;
        checkWinner();
        // return (playerscore, computerscore);
    } else if ((player === "ROCK" && computer === "PAPER") ||
        (player === "PAPER" && computer === "SCISSORS") ||
        (player === "SCISSORS" && computer === "ROCK")) {
        computerscore++;
        console.log(`You chose ${player}, computer chose ${computer}. You lose.`);
        console.log(`Your Score: ${playerscore}, Computer Score: ${computerscore}`);
        roundresult.textContent = `You lose.`;
        roundchoicestext.textContent = `You chose ${player}, computer chose ${computer}.`
        playerpoints.textContent = `You : ${playerscore}`;
        computerpoints.textContent = `Computer : ${computerscore}`;
        checkWinner();
        // return (playerscore, computerscore);
    } else if (player === computer) {
        playerscore = playerscore;
        computerscore = computerscore;
        console.log(`You chose ${player}, computer chose ${computer}. It's a tie.`);
        console.log(`Your Score: ${playerscore}, Computer Score: ${computerscore}`);
        roundresult.textContent = `It's a tie.`;
        roundchoicestext.textContent = `You chose ${player}, computer chose ${computer}.`
        playerpoints.textContent = `You : ${playerscore}`;
        computerpoints.textContent = `Computer : ${computerscore}`;
        checkWinner();
        // return (playerscore, computerscore);
    } else {
        console.log("ERROR");
    }
}
