let score = JSON.parse(localStorage.getItem('game-score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
updateScore();

// score tracker element
const scoreElement = document.querySelector(".score-tracker");
scoreElement.innerHTML = `Wins: ${score.wins} ,Losses: ${score.losses} ,Ties: ${score.ties}`;
// resetting the score
function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('game-score');
    updateScore();
}
let isAutoPlaying = false;
let intervalId;
// auto playing
function autoPlay() {
    if(!isAutoPlaying) {

        intervalId = setInterval(function() {
            const opponentMove = computer_move();
            rock_paper_scissors(opponentMove)
            updateScore();
        }
        ,1000);
        isAutoPlaying = true;
    }
    else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}
// updationg score on every click
function updateScore() {
    const scoreElement = document.querySelector(".score-tracker");
    scoreElement.innerHTML = `Wins: ${score.wins} ,Losses: ${score.losses} ,Ties: ${score.ties}`;
    // stringifying the score object to store it in the local storage
    // store the score in the local storage
    localStorage.setItem("game-score", JSON.stringify(score));
}
// main function
function rock_paper_scissors(uMove /*user move*/) {
    cMove = computer_move();
    /*comparison*/
    const resultElement = document.querySelector(".result");
    const uMoveElement = document.querySelector(".u-move");
    const cMoveElement = document.querySelector(".c-move");
    if (uMove === cMove) {
        // alert(`You chose ${uMove} , The computer choses ${cMove} and the result is Tie!`);
        resultElement.innerHTML = "Tie.";
        score.ties += 1;
        uMoveElement.src = `images/${uMove}-emoji.png`;
        cMoveElement.src = `images/${cMove}-emoji.png`;
    } else if (uMove === "rock" && cMove === "paper") {
        resultElement.innerHTML = "Lose";
        score.losses += 1;
        // alert(`You chose ${uMove} , The computer choses ${cMove} and the The Computer Wins!`);
        uMoveElement.src = `images/${uMove}-emoji.png`;
        cMoveElement.src = `images/${cMove}-emoji.png`;
    } else if (uMove === "rock" && cMove === "scissors") {
        resultElement.innerHTML = "Win";
        score.wins += 1;
        // alert(`You chose ${uMove} , The computer choses ${cMove} and You Win!`);
        uMoveElement.src = `images/${uMove}-emoji.png`;
        cMoveElement.src = `images/${cMove}-emoji.png`;
    } else if (uMove === "paper" && cMove === "scissors") {
        resultElement.innerHTML = "Lose";
        score.losses += 1;
        // alert(`You chose ${uMove} , The computer choses ${cMove} and the Computer Wins!`);
        uMoveElement.src = `images/${uMove}-emoji.png`;
        cMoveElement.src = `images/${cMove}-emoji.png`;
    } else if (uMove === "paper" && cMove === "rock") {
        resultElement.innerHTML = "Win";
        score.wins += 1;
        // alert(`You chose ${uMove} , The computer choses ${cMove} and You Win!`);
        uMoveElement.src = `images/${uMove}-emoji.png`;
        cMoveElement.src = `images/${cMove}-emoji.png`;
    } else if (uMove === "scissors" && cMove === "paper") {
        resultElement.innerHTML = "Win";
        score.wins += 1;
        // alert(`You chose ${uMove} , The computer choses ${cMove} and You Win!`);
        uMoveElement.src = `images/${uMove}-emoji.png`;
        cMoveElement.src = `images/${cMove}-emoji.png`;
    } else if (uMove === "scissors" && cMove === "rock") {
        resultElement.innerHTML = "Lose";
        score.losses += 1;
        // alert(`You chose ${uMove} , The computer choses ${cMove} and the Computer Wins!`);
        uMoveElement.src = `images/${uMove}-emoji.png`;
        cMoveElement.src = `images/${cMove}-emoji.png`;
    }

}

/*The Computer Move Function*/
function computer_move() {
    /* Computer Move*/
    const randNum = Math.random();
    let cMove = "";

    if (randNum >= 0 && randNum < 1 / 3) {
        // here computer choses rock
        cMove = "rock";
    } else if (randNum > 1 / 3 && randNum < 2 / 3) {
        // here computer choses paper
        cMove = "paper";
    } else if (randNum > 2 / 3 && randNum < 1) {
        // here computer choses scissors
        cMove = "scissors";
    }
    return cMove;
}