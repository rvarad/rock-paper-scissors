const array = ["Rock", "Paper", "Scissors"];

let getComputerChoice = function () {
    let choice = array[Math.floor(Math.random() * 3)]
    return (choice.toUpperCase());
}

let getPlayerChoice;

let playerscore = 0;
let computerscore = 0;

let body = document.querySelector('body');

let results = document.createElement('div');
results.classList.add('results');

let score = document.createElement('div');
score.classList.add('score');

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
            getPlayerChoice = button.id.toUpperCase();
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
        results.textContent = `You chose ${player}, computer chose ${computer}. You win.`;
        body.appendChild(results);
        score.textContent = `Your Score: ${playerscore}, Computer Score: ${computerscore}`;
        body.appendChild(score);
        checkWinner();
        // return (playerscore, computerscore);
    } else if ((player === "ROCK" && computer === "PAPER") ||
        (player === "PAPER" && computer === "SCISSORS") ||
        (player === "SCISSORS" && computer === "ROCK")) {
        computerscore++;
        console.log(`You chose ${player}, computer chose ${computer}. You lose.`);
        console.log(`Your Score: ${playerscore}, Computer Score: ${computerscore}`);
        results.textContent = `You chose ${player}, computer chose ${computer}. You lose.`;
        body.appendChild(results);
        score.textContent = `Your Score: ${playerscore}, Computer Score: ${computerscore}`;
        body.appendChild(score);
        checkWinner();
        // return (playerscore, computerscore);
    } else if (player === computer) {
        playerscore = playerscore;
        computerscore = computerscore;
        console.log(`You chose ${player}, computer chose ${computer}. It's a tie.`);
        console.log(`Your Score: ${playerscore}, Computer Score: ${computerscore}`);
        results.textContent = `You chose ${player}, computer chose ${computer}. It's a tie.`;
        body.appendChild(results);
        score.textContent = `Your Score: ${playerscore}, Computer Score: ${computerscore}`;
        body.appendChild(score);
        checkWinner();
        // return (playerscore, computerscore);
    } else {
        console.log("ERROR");
    }
}