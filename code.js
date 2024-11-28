// Player class to manage player information
class Player {
    constructor(name) {
        this.name = name;
        this.balance = 1000; // Starting balance
    }

    // Method to place a bet
    placeBet(amount) {
        if (amount > this.balance) {
            return false;
        }
        this.balance -= amount;
        return true;
    }

    // Method to update player's balance
    updateBalance(amount) {
        this.balance += amount;
    }
}

// Initialize current player
let currentPlayer;

// Array to store last 5 rolls
let lastRolls = [];

// Function to validate and format player name
function validatePlayerName(name) {
    // Remove leading and trailing whitespace
    name = name.trim();
    // Capitalize the first letter of each word
    return name.replace(/\b\w/g, l => l.toUpperCase());
}

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

    // Update and display last 5 rolls
    updateLastRolls(die1, die2);
}

// Function to handle betting
function placeBet(amount) {
    // Check if player has sufficient funds
    if (!currentPlayer.placeBet(amount)) {
        alert("Insufficient funds!");
        return;
    }

    // Get the game result
    let gameResult = document.getElementById('gameResult').innerHTML;

    // Determine bet outcome based on game result
    let betOutcome;
    if (gameResult === "You won!") {
        betOutcome = `You won $${amount * 2}!`;
        currentPlayer.updateBalance(amount * 2);
    } else if (gameResult === "CRAPS - you lose!") {
        betOutcome = `You lost $${amount}.`;
    } else {
        betOutcome = `Your bet of $${amount} is returned.`;
        currentPlayer.updateBalance(amount);
    }

    // Display bet outcome
    document.getElementById('betResult').innerHTML = betOutcome;

    // Update displayed balance
    document.getElementById('playerBalance').innerHTML = `Balance: $${currentPlayer.balance}`;
}

// Function to update and display last 5 rolls
function updateLastRolls(die1, die2) {
    lastRolls.unshift(`${die1},${die2}`);
    if (lastRolls.length > 5) {
        lastRolls.pop();
    }

    let rollsDisplay = "Last 5 rolls: ";
    for (let i = 0; i < lastRolls.length; i++) {
        rollsDisplay += lastRolls[i];
        if (i < lastRolls.length - 1) {
            rollsDisplay += " | ";
        }
    }
    document.getElementById('lastRolls').innerHTML = rollsDisplay;
}

// Event listener for the play button
document.getElementById('playButton').addEventListener('click', playCraps);

// Event listener for the bet button
document.getElementById('betButton').addEventListener('click', function() {
    let betAmount = document.getElementById('betAmount').value;
    if (betAmount > 0) {
        placeBet(parseInt(betAmount));
    } else {
        alert("Please enter a valid bet amount.");
    }
});

// Event listener for the set name button
document.getElementById('setNameButton').addEventListener('click', function() {
    let nameInput = document.getElementById('playerName');
    let validatedName = validatePlayerName(nameInput.value);
    if (validatedName) {
        currentPlayer = new Player(validatedName);
        document.getElementById('welcomeMessage').innerHTML = `Welcome, ${validatedName}!`;
        document.getElementById('playerBalance').innerHTML = `Balance: $${currentPlayer.balance}`;
    } else {
        alert("Please enter a valid name.");
    }
});
