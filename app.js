const array = ["Rock", "Paper", "Scissors"];

let getComputerChoice = function () {
    let choice = array[Math.floor(Math.random() * 3)]
    return (choice.toUpperCase());
}

let getPlayerChoice;

let playerscore = 0;
let computerscore = 0;

let roundresult = document.querySelector('.roundresult');
let roundchoicestext = document.querySelector('.roundchoicestext');

let playerpoints = document.getElementById('playerscore');
let computerpoints = document.getElementById('computerscore');

let playersign = document.getElementById('playersign');
let computersign = document.getElementById('computersign');

let finalResult = document.querySelector('.winner');

let footer = document.querySelector('.footer');
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let restart = document.querySelector('#restart');

let endofgame = function () {
    if (footer.classList.contains('active') && overlay.classList.contains('active') && modal.classList.contains('active')) {
        footer.classList.remove('active');       
        overlay.classList.remove('active');
        modal.classList.remove('active');
    } else {
        footer.classList.add('active');       
        overlay.classList.add('active');
        modal.classList.add('active');
    }
} 

let replay = function () {
    playerscore = 0;
    playerpoints.textContent = "You : 0";
    computerscore = 0;
    computerpoints.textContent = "Computer : 0";
    playersign.textContent = "👱";
    computersign.textContent = "💻";
}

let texttosign  = function (choice) {
    if (choice === "ROCK") {
        return ("✊");
    } else if (choice === "PAPER") {
        return ("✋");
    } else if (choice === "SCISSORS") {
        return ("✌");
    } else {
        console.log("ERROR in texttosign function");
    }
}

let checkWinner = function () {
    if (playerscore === 5) {
        endofgame();
        finalResult.textContent = "You are the CHAMPION!";
    } else if (computerscore === 5) {
        endofgame();
        finalResult.textContent = "Computer is the CHAMPION!";
    }
}

restart.addEventListener('click', () => {
    replay();
    endofgame();
})

window.addEventListener('click', function (e) {
    if (e.target === overlay) {
        endofgame();
    }
});

let buttons = document.querySelectorAll('.choices');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerscore < 5 && computerscore < 5) {
            getPlayerChoice = button.id.replace('btn', '').toUpperCase();
            playGame(getPlayerChoice, getComputerChoice());
        } else {
            endofgame();
        }
    });
});

let playGame = function (player, computer) {
    playersign.textContent = texttosign(player);
    computersign.textContent = texttosign(computer);
    if ((player === "ROCK" && computer === "SCISSORS") ||
        (player === "PAPER" && computer === "ROCK") ||
        (player === "SCISSORS" && computer === "PAPER")) {
        playerscore++;
        console.log(`You chose ${player}, computer chose ${computer}. You win.`);
        console.log(`Your Score: ${playerscore}, Computer Score: ${computerscore}`);
        roundresult.textContent = `You win!`;
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
        roundresult.textContent = `You lose!`;
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
        roundresult.textContent = `It's a tie!`;
        roundchoicestext.textContent = `You chose ${player}, computer chose ${computer}.`
        playerpoints.textContent = `You : ${playerscore}`;
        computerpoints.textContent = `Computer : ${computerscore}`;
        checkWinner();
        // return (playerscore, computerscore);
    } else {
        console.log("ERROR");
    }
}
