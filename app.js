let userScore = 0;
let computerScore = 0;

const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector(".pick");
const highlightMove = document.querySelector(".btn");

let restartGame = () => {
    userScore = 0;
    computerScore = 0;
    numberOfMoves = 0;
    choices.forEach((choice) => {
        choice.disabled = false;
    });
    updateScore();
    resultDisplay.classList.add("pick");
    resultDisplay.textContent = "Pick your move";
}

let choices = document.querySelectorAll(".btn");

const genComputerChoice =() => {
    let options = ["rock", "paper", "scissors"];
    const randNumber = Math.floor(Math.random() * options.length);

    return options[randNumber];

} 

const draw = () => {
    console.log("Game Draw");
    // console.log("User choice: ", userChoice);
    // console.log("Computer choice: ", computerChoice);
    resultDisplay.textContent = "Game Draw! Playagain";
    resultDisplay.style.backgroundColor = "white";
    resultDisplay.style.color = "black";
    resultDisplay.style.border = "2px solid black";
}

let numberOfMoves = 0;
let playGame = (userChoice) => {
    const computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        draw();
        console.log(`User choice: ${userChoice}, Computer choice: ${computerChoice}`);
        resultDisplay.style.border = "2px solid black";
        numberOfMoves++;
        gameOver();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            computerChoice === "paper" ? userWin = false : userWin = true;
            console.log("User choice: ", userChoice);
            console.log("Computer choice: ", computerChoice);
            resultDisplay.textContent = `You win! Your choice - ${userChoice}, beats Computer's choice - ${computerChoice}`;
            resultDisplay.style.backgroundColor = "rgb(12, 115, 156)";
            resultDisplay.style.border = "none";
            resultDisplay.style.color = "white";
            numberOfMoves++;
            gameOver();
        } else if (userChoice === "paper"){
            computerChoice === "scissors" ? userWin = false : userWin = true;
            console.log("User choice: ", userChoice);
            console.log("Computer choice: ", computerChoice);
            resultDisplay.textContent = `You win! Your choice - ${userChoice}, beats Computer's choice - ${computerChoice}`;
            resultDisplay.style.backgroundColor = "rgb(12, 115, 156)";
            resultDisplay.style.border = "none";
            resultDisplay.style.color = "white";
            numberOfMoves++;
            gameOver();
        } else {
            computerChoice === "rock" ? userWin = false : userWin = true;
            console.log("User choice: ", userChoice);
            console.log("Computer choice: ", computerChoice);
            resultDisplay.textContent = `You win! Your choice - ${userChoice}, beats Computer's choice - ${computerChoice}`;
            resultDisplay.style.backgroundColor = "rgb(12, 115, 156)";
            resultDisplay.style.border = "none";
            resultDisplay.style.color = "white";
            numberOfMoves++;
            gameOver();
        }
        if (userWin) {
            userScore++;
            updateScore();
            numberOfMoves++;
            gameOver();
        } else {
            computerScore++;
            updateScore();
            resultDisplay.textContent = `Computer wins! Computer's choice - ${computerChoice}, beats Your choice - ${userChoice}`;
            resultDisplay.style.backgroundColor = "olivedrab";
            resultDisplay.style.border = "none";
            resultDisplay.style.color = "white";
            numberOfMoves++;
            gameOver();
        }
    }
}

let gameOver = () => {
    if (numberOfMoves === 30) {
        console.log("Game over");
        resultDisplay.textContent = "Game over! Play again";
        resultDisplay.style.backgroundColor = "white";
        resultDisplay.style.border = "2px solid black";
        resultDisplay.style.color = "black";
        choices.forEach((choice) => {
            choice.disabled = true;
        });
        resultDisplay.addEventListener("click", (e) => {
            restartGame();
            once = true;
            resultDisplay.style.backgroundColor = "white";
            resultDisplay.style.color = "black";
            resultDisplay.style.border = "2px solid black";
            resultDisplay.style.transform = "scale(1)";
        });
        resultDisplay.addEventListener("mouseover", () => {
            resultDisplay.style.transform = "scale(1.1)";
            resultDisplay.style.backgroundColor = "white";
            resultDisplay.style.color = "black";
            resultDisplay.style.border = "2px solid black";
        });
        resultDisplay.addEventListener("mouseout", () => {
            resultDisplay.style.transform = "scale(1)";
            resultDisplay.style.backgroundColor = "black";
            resultDisplay.style.color = "white";
            resultDisplay.style.border = "2px solid white";
        });
    }
}

let updateScore = () => {
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


