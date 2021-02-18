let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

function getComputerChoice() {
    let choices = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smalUserWord = "user".fontsize(3).sub();
    const smalCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smalUserWord} beats ${convertToWord(computerChoice)}${smalCompWord}. You win! :fire`;
    userChoice_div.classList.add('green-glow');
    setTimeout(()=> userChoice_div.classList.remove('green-glow'),500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smalUserWord = "user".fontsize(3).sub();
    const smalCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smalUserWord} loses to ${convertToWord(computerChoice)}${smalCompWord}. You lost....`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'),500);
}

function draw(userChoice, computerChoice) {
    const smalUserWord = "user".fontsize(3).sub();
    const smalCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smalUserWord} equals ${convertToWord(computerChoice)}${smalCompWord}. It’s a draw`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(()=> userChoice_div.classList.remove('gray-glow'),500);
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":  
        case "sp":
            win(userChoice, computerChoice);
            break;
        
        case "rp":
        case "ps":  
        case "sr":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":  
        case "ss":
            draw(userChoice, computerChoice);
            break;
    
        
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
}
main();










