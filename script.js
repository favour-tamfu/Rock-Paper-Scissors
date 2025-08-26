const playerScore1 = document.getElementById('player-score');
const computerScore1 = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const choiceBtn = document.querySelectorAll('.choice-btn');
const resetBtn = document.getElementById('reset-btn');

let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice){
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {

        displayResult('draw', playerChoice, computerChoice);

    }else if(

        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')

    ){

        playerScore++;
        playerScore1.textContent = playerScore;
        displayResult('win', playerChoice, computerChoice);

    } else {

        computerScore++;
        computerScore1.textContent = computerScore;
        displayResult('lose', playerChoice, computerChoice);
    }
}

function displayResult(result, playerChoice, computerChoice) {

    resultText.classList.remove('win', 'lose', 'draw');

    resultText.classList.add(result);

    const playerChoiceFormatted = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    const computerChoiceFormatted = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if (result === 'win') { 

        resultText.textContent = `${playerChoiceFormatted} beats ${computerChoiceFormatted}. You Win!`;

    } else if (result === 'lose') {

        resultText.textContent = `${computerChoiceFormatted} beats ${playerChoiceFormatted}. You Lose!`;

    } else {

        resultText.textContent = `It's a draw! Both chose ${playerChoiceFormatted}.`;
    }
}


function resetGame() {

    playerScore = 0;
    computerScore = 0;
    playerScore1.textContent = playerScore;
    computerScore1.textContent = computerScore;
    resultText.textContent = 'Choose your weapon!';
    resultText.classList.remove('win', 'lose', 'draw');
}



choiceBtn.forEach(button => {

    button.addEventListener('click', () => {

        const playerChoice = button.dataset.choice;
        playRound(playerChoice);
    });

});

resetBtn.addEventListener('click', resetGame);
