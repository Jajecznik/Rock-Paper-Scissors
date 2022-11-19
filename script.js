function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)

    if (number === 0) return "rock"
    else if (number === 1) return "paper"
    else return "scissors"
}

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

function game() {
    playerCounter = 0
    computerCounter = 0

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice()
        const playerSelection = prompt("Choose rock, paper or scissors")
        let result = playRound(computerSelection, playerSelection)
        
        alert(result[1])
        playerCounter += result[0]
        computerCounter += -1 * result[0]
    }

    if (playerCounter > computerCounter) alert("You WON!")
    else if (playerCounter < computerCounter) alert("You LOST!")
    else alert("DRAW!")
}

game()