  const backgroundAudio = document.getElementById('backgroundAudio');
        const playButton = document.getElementById('playButton');
        const muteButton = document.getElementById('muteButton');

        playButton.addEventListener('click', function() {
            backgroundAudio.play();
        });

        muteButton.addEventListener('click', function() {
            if (backgroundAudio.muted) {
                backgroundAudio.muted = false;
                muteButton.textContent = 'Mute Audio';
            } else {
                backgroundAudio.muted = true;
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
