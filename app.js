let options = ["rock", "paper", "scissors"]
let winningChoices = [["rock", "scissors"], ["paper", "rock"], ["scissors", "paper"]]
let userPoints = 0;
let computerPoints = 0;


function randNum() {
    return Math.floor(Math.random() * 3)
}

function computerPlay() {
    let computerChoice = options[randNum()]
    // console.log(`Computer chose ${computerChoice}`)
    return computerChoice
}

function userPlay() {
    let userChoice = (prompt("Choose rock, paper or scissors")).toLowerCase();
    while (!options.includes(userChoice)) {
        if (options.includes(userChoice)) {
            console.log("great")
        } else {
            userChoice = (prompt("Choose rock, paper or scissors")).toLowerCase();
        }
    }
    return userChoice
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
                    // return (`You loose, ${computerChoice} beats ${userChoice}`)
                }
                else {
                    console.log(`You win, ${userChoice} beats ${computerChoice}`)
                    userPoints++
                    // return (`You win, ${userChoice} beats ${computerChoice}`)
                }
            }
        }
    }
}
function singleRound() {
    outcomes(computerPlay(), userPlay())
    console.log(`${userPoints} : ${computerPoints}`)

}

for (let i = 0; i < 5; i++) {
    singleRound()
}

