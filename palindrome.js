// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove spaces and convert to lowercase
    str = str.replace(/\s/g, '').toLowerCase();
    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
}

// Function to start the palindrome checking process
function checkPalindrome() {
    // Loop to continuously prompt for input
    while (true) {
        // Prompt user for input
        let input = prompt("Enter a word or phrase to check if it's a palindrome (or click Cancel to exit):");
        
        // Check if user wants to exit
        if (input === null) {
            alert("Thank you for using the Palindrome Checker!");
            break;
        }

        // Check if the input is a palindrome
        let result = isPalindrome(input) ? "is a palindrome!" : "is not a palindrome.";
        
        // Display the result
        document.getElementById('result').innerHTML = `"${input}" ${result}`;
        
        // Ask if the user wants to continue
        if (!confirm("Do you want to check another word or phrase?")) {
            alert("Thank you for using the Palindrome Checker!");
            break;
        }
    }
}

// Start the palindrome checking process when the page loads
window.onload = checkPalindrome;
