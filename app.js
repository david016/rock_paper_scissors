let options = ["rock", "paper", "scissors"]
let winningChoices = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]]
let userPoints = 0;
let computerPoints = 0;

function randNum() {
    return Math.floor(Math.random() * 3)
}

function computerPlay() {
    let computerChoice = options[randNum()]
    return computerChoice
}

function outcomes(computerChoice, userChoice) {
    if (computerChoice === userChoice) {
        console.log("Draw")
    } else {
        for (pair of winningChoices) {
            if (pair.includes(computerChoice) && pair.includes(userChoice)) {
                if (pair[0] === computerChoice) {
                    console.log(`You loose, ${computerChoice} beats ${userChoice}`)
                    computerPoints++
                    pcScore.textContent = computerPoints;
                    if (computerPoints === 5) {
                        loss()
                    }
                }
                else {
                    console.log(`You win, ${userChoice} beats ${computerChoice}`)
                    userPoints++
                    userScore.textContent = userPoints;
                    if (userPoints === 5) {
                        win()
                    }
                }
            }
        }
    }
}
function singleRound() {
    let userChoice = this.value;
    outcomes(computerPlay(), userChoice)
}

function win() {
    winH1.setAttribute("style", "display:inline");
    for (let button of rpsButtons) {
        button.disabled = true;
        button.classList.remove("rps-btns")
    }
}
function loss() {
    looseH1.setAttribute("style", "display:inline");
    for (let button of rpsButtons) {
        button.disabled = true;
        button.classList.remove("rps-btns")
    }
}
function reset() {
    userPoints = 0;
    computerPoints = 0;
    userScore.textContent = "0";
    pcScore.textContent = "0";
    looseH1.setAttribute("style", "display:none");
    winH1.setAttribute("style", "display:none");
    for (let button of rpsButtons) {
        button.disabled = false
        button.classList.add("rps-btns")
    }
}

//  DOM manipulation
let startButton = document.querySelector("#start")
let rockButton = document.querySelector("#rock")
let paperButton = document.querySelector("#paper")
let scissorsButton = document.querySelector("#scissors")
let rpsButtons = document.querySelectorAll(".rps-btns")
let pcScore = document.querySelector("td.computer")
let userScore = document.querySelector("td.user")

rockButton.addEventListener('click', singleRound)
paperButton.addEventListener('click', singleRound)
scissorsButton.addEventListener('click', singleRound)
startButton.addEventListener('click', reset)

let winH1 = document.querySelector("#win");
let looseH1 = document.querySelector("#loose");
