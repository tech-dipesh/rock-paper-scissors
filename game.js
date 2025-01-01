const choices = ["rock", "paper", "scissors"];
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDisplay = document.querySelector("#result");
const startButton = document.getElementById("button-start");
const startDiv = document.getElementById("start");
const gameDiv = document.getElementById("game");
const showButton = document.getElementById("top");

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    showButton.style.display = "block";
    startDiv.style.display = "block";
    gameDiv.style.display = "grid";
});

rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));

let playerWins=0;
let playerLoss=0;
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) {
        resultDisplay.textContent = `It's a tie! Both chose ${playerChoice}.`;
    } else {
        const winConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };
        if (winConditions[playerChoice] === computerChoice) {
            resultDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
            playerWins++;
        } else {
            resultDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
            playerLoss--;
        }
    }
    let totalCount=document.querySelector("#total-count");
    totalCount.textContent=`Total Wins:${playerWins} ${playerLoss}`;
}
 