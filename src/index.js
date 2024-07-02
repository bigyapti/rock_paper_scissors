const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultContainer = document.getElementById("resultContainer");
const check = document.getElementById("check");
let player_score = 0;
let computer_score = 0;
const results = ["rock", "paper", "scissors"];

function computer_game_play() {
    let result = results[Math.floor(Math.random() * results.length)];
    let img = document.createElement("img");
    img.src = `./images/${result}.png`;
    resultContainer.innerHTML = ""; 
    resultContainer.appendChild(img);
    return result; 
}

function checkwinner(player, computer) {
    if ((player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")) {
        return "You win";
    } else if (player == computer) {
        return "Draw";
    } else {
        return "Computer wins";
    }
}

rock.addEventListener("click", (event) => {
    check.textContent = ""; 
    const playerChoice = event.target.id;
    const computerChoice = computer_game_play();

    setTimeout(() => {
        check.textContent = checkwinner(playerChoice, computerChoice);
    }, 500); 
});

paper.addEventListener("click", (event) => {
    check.textContent = ""; 
    const playerChoice = event.target.id;
    const computerChoice = computer_game_play();

    setTimeout(() => {
        check.textContent = checkwinner(playerChoice, computerChoice);
    }, 500); 
});

scissors.addEventListener("click", (event) => {
    check.textContent = ""; 
    const playerChoice = event.target.id;
    const computerChoice = computer_game_play();

    setTimeout(() => {
        check.textContent = checkwinner(playerChoice, computerChoice);
    }, 500); 
});
