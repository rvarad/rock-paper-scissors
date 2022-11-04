const array = ["Rock", "Paper", "Scissors"];

let getComputerChoice = function () {
    let choice = array[Math.floor(Math.random() * 3)]
    return (choice.toUpperCase());
}

let getPlayerChoice;

let playerscore = 0;
let computerscore = 0;
let roundwinner = "";

let body = document.querySelector('body')
let results = document.createElement('div');
results.classList.add('results');

let score = document.createElement('div');
score.classList.add('score');

let finalResult = document.createElement('div');
finalResult.classList.add('finalresult');

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerscore === 5 || computerscore === 5) {
            let result = (playerscore === 5) ? "You are the CHAMPION!" : "Computer is the CHAMPION!";
            console.log(result);
            finalResult.textContent = result;
            body.appendChild(finalResult);
        } else {
            getPlayerChoice = button.id.toUpperCase();
            playGame(getPlayerChoice, getComputerChoice());
        };
    });
});

let playGame = function (player, computer) {
    if ((player === "ROCK" && computer === "SCISSORS") ||
        (player === "PAPER" && computer === "ROCK") ||
        (player === "SCISSORS" && computer === "PAPER")) {
        playerscore++;
        console.log(`Your Score: ${playerscore}, Computer Score: ${computerscore}`);
        console.log(`You chose ${player}, computer chose ${computer}. You win.`);
        results.textContent = `You chose ${player}, computer chose ${computer}. You win.`;
        body.appendChild(results);
        score.textContent = `Your Score: ${playerscore}, Computer Score: ${computerscore}`;
        body.appendChild(score);
        // return (playerscore, computerscore);
    } else if ((player === "ROCK" && computer === "PAPER") ||
        (player === "PAPER" && computer === "SCISSORS") ||
        (player === "SCISSORS" && computer === "ROCK")) {
        computerscore++;
        console.log(`Your Score: ${playerscore}, Computer Score: ${computerscore}`);
        console.log(`You chose ${player}, computer chose ${computer}. You lose.`);
        results.textContent = `You chose ${player}, computer chose ${computer}. You lose.`;
        body.appendChild(results);
        score.textContent = `Your Score: ${playerscore}, Computer Score: ${computerscore}`;
        body.appendChild(score);
        // return (playerscore, computerscore);
    } else if (player === computer) {
        console.log(`Your Score: ${playerscore}, Computer Score: ${computerscore}`);
        console.log(`You chose ${player}, computer chose ${computer}. Draw.`);
        results.textcontent = `You chose ${player}, computer chose ${computer}. Draw.`;
        body.appendChild(results);
        score.textContent = `Your Score: ${playerscore}, Computer Score: ${computerscore}`;
        body.appendChild(score);
        // return (playerscore, computerscore);
    } else {
        console.log("ERROR");
    }
}