 // Get references to the audio element and control buttons
const backgroundAudio = document.getElementById('backgroundAudio');
const playButton = document.getElementById('playButton');
const muteButton = document.getElementById('muteButton');

// Add click event listener to the play button
playButton.addEventListener('click', function() {
    // Start playing the background audio when the play button is clicked
    backgroundAudio.play();
});

// Add click event listener to the mute button
muteButton.addEventListener('click', function() {
    // Check if the audio is currently muted
    if (backgroundAudio.muted) {
        // If muted, unmute the audio
        backgroundAudio.muted = false;
        // Update button text to reflect the current state
        muteButton.textContent = 'Mute Audio';
    } else {
        // If not muted, mute the audio
        backgroundAudio.muted = true;
        // Update button text to reflect the current state
        muteButton.textContent = 'Unmute Audio';
    }
});
        document.getElementById('userForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form from submitting

            // Get input values
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const zipCode = document.getElementById('zipCode').value.trim();

            // Combine first and last name
            const fullName = firstName + ' ' + lastName;

            // Reset error messages
            document.getElementById('errorMessages').innerHTML = '';

            // Validate full name length
            if (fullName.length > 20) {
                showError('Full name must not exceed 20 characters.');
                return;
            }

            // Validate zip code
            if (!/^\d{5}$/.test(zipCode)) {
                showError('Zip code must be exactly 5 digits.');
                return;
            }

            // If all validations pass, show secret message
            showSecretMessage(fullName);
        });

        function showError(message) {
            const errorDiv = document.getElementById('errorMessages');
            errorDiv.innerHTML = `<p class="error">${message}</p>`;
        }

        function showSecretMessage(name) {
            const secretDiv = document.getElementById('secretMessage');
            secretDiv.style.display = 'block';
            secretDiv.innerHTML = `<h2>Welcome, ${name}!</h2>
                                   <p>Here's your secret message: "You've unlocked the hidden treasure!"</p>`;
        }
