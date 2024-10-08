function playCraps() {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let sum = die1 + die2;

    document.getElementById('diceValues').innerHTML = `Dice: ${die1}, ${die2}`;
    document.getElementById('diceSum').innerHTML = `Sum: ${sum}`;

    let result;
    if (sum === 7 || sum === 11) {
        result = "CRAPS - you lose!";
    } else if (die1 === die2 && die1 % 2 !== 0) { // Logic error: checking for odd doubles instead of even
        result = "You won!";
    } else {
        result = "You pushed";
    }

    document.getElementById('gameResult').innerHTML = result;
    console.log(`Dice: ${die1}, ${die2}, Result: ${result}`); // Added for debugging
}

// Function to handle betting
function placeBet(amount) {
    // Get the game result
    let gameResult = document.getElementById('gameResult').innerHTML;

    // Determine bet outcome based on game result
    let betOutcome;
    if (gameResult === "You won!") {
        betOutcome = `You won $${amount * 2}!`;
    } else if (gameResult === "CRAPS - you lose!") {
        betOutcome = `You lost $${amount}.`;
    } else {
        betOutcome = `Your bet of $${amount} is returned.`;
    }

    // Display bet outcome
    document.getElementById('betResult').innerHTML = betOutcome;
}

// Add event listener to the play button
document.getElementById('playButton').addEventListener('click', playCraps);

// Add event listener to the bet button
document.getElementById('betButton').addEventListener('click', function() {
    let betAmount = document.getElementById('betAmount').value;
    if (betAmount > 0) {
        placeBet(parseInt(betAmount));
    } else {
        alert("Please enter a valid bet amount.");
    }
});
