// Function to play the Craps game
function playCraps() {
    // Generate two random numbers between 1 and 6
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum of the dice
    let sum = die1 + die2;

    // Display the dice values
    document.getElementById('diceValues').innerHTML = `Dice: ${die1}, ${die2}`;

    // Display the sum
    document.getElementById('diceSum').innerHTML = `Sum: ${sum}`;

    // Determine the game result based on the rules
    let result;
    if (sum === 7 || sum === 11) {
        result = "CRAPS - you lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        result = "You won!";
    } else {
        result = "You pushed";
    }

    // Display the game result
    document.getElementById('gameResult').innerHTML = result;
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
