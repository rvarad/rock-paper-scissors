const array = ["Rock", "Paper", "Scissors"];

let getComputerChoice = function () {
    let choice = array[Math.floor(Math.random() * 3)]
    return (choice.toUpperCase());
}

let playerscore = 0;
let computerscore = 0;
let roundwinner = "";

let playRound = function (player1, player2) {
    if ((player1 === "ROCK" && player2 === "SCISSORS") ||
        (player1 === "PAPER" && player2 === "ROCK") ||
        (player1 === "SCISSORS" && player2 === "PAPER")) {
        console.log(`You chose ${player1}, computer chose ${player2}. You win.`);
        return (roundwinner = "Player")
    } else if ((player1 === "ROCK" && player2 === "PAPER") ||
        (player1 === "PAPER" && player2 === "SCISSORS") ||
        (player1 === "SCISSORS" && player2 === "ROCK")) {
        console.log(`You chose ${player1}, computer chose ${player2}. You lose.`);
        return (roundwinner = "Computer")
    } else if (player1 === player2) {
        console.log(`You chose ${player1}, computer chose ${player2}. Draw.`);
        return (roundwinner = "Draw")
    } else {
        return (roundwinner = "None");
    }
}

let playGame = function () {
    for (let i = 0; ; i++) {
        if (!(playerscore >= 5) && !(computerscore >= 5)) {
            let getPlayerChoice = (prompt("Choose one among the following:", array)).toUpperCase();
            playRound(getPlayerChoice, getComputerChoice());
            if ((roundwinner === "Player") && !(playerscore >= 5 && computerscore >= 5)) {
                playerscore++;
                console.log(`Your Score: ${playerscore}, Computer Score: ${computerscore}`);
                // return (playerscore, computerscore);
            } else if ((roundwinner === "Computer") && !(playerscore >= 5 && computerscore >= 5)) {
                computerscore++;
                console.log(`Your Score: ${playerscore}, Computer Score: ${computerscore}`);
                // return (playerscore, computerscore);
            } else if ((roundwinner === "Draw") && !(playerscore >= 5 && computerscore >= 5)) {
                console.log(`Your Score: ${playerscore}, Computer Score: ${computerscore}`);
                // return (playerscore, computerscore);
            } else if (roundwinner === "None") {
                console.log("ERROR");
                break;
            }
        } else {
            let result = (playerscore === 5) ? "You are the CHAMPION!" : "Computer is the CHAMPION!" ;
            console.log(result);
        }
    }

}