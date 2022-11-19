// getting computer choice, returns rock, paper or scissors
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)

    if (number === 0) return "rock"
    else if (number === 1) return "paper"
    else return "scissors"
}

// one round of the game, returns array with result of the game and proper text
function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (computerSelection === "rock") {
        if (playerSelection === "rock") return [0, "DRAW! You both used a Rock!"]
        else if (playerSelection === "paper") return [1, "You Win! Paper beats Rock!"]
        else return [-1, "You Lose! Rock beats Scissors!"]
    }

    else if (computerSelection === "paper") {
        if (playerSelection === "rock") return [-1, "You Lose! Paper beats Rock!"]
        else if (playerSelection === "paper") return [0, "DRAW! You both used a Paper!"]
        else return [1, "You Win! Scissors beats Paper!"]
    }

    else if (playerSelection === "rock") return [1, "You Win! Rock beats Scissors!"]
    else if (playerSelection === "paper") return [-1, "You Lose! Scissors beats Paper!"]
    else return [0, "DRAW! You both used a Scissors!"]
}

// playing full game (5 rounds), gives alert who won
function game() {
    playerCounter = 0
    computerCounter = 0

    // iterate through rounds
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice()
        const playerSelection = prompt("Choose rock, paper or scissors")
        let result = playRound(computerSelection, playerSelection)
        
        // result[0] - game result, result[1] - proper text
        alert(result[1])
        playerCounter += result[0]
        computerCounter += -1 * result[0]
    }

    if (playerCounter > computerCounter) alert("You WON!")
    else if (playerCounter < computerCounter) alert("You LOST!")
    else alert("DRAW!")
}

// starting the game
game()