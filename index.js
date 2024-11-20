
 // Get references to the meme image and buttons
        const memeImage = document.getElementById('memeImage');
        const startButton = document.getElementById('startButton');
        const stopButton = document.getElementById('stopButton');

        let animationId; // Variable to store the animation frame ID

        // Function to move the meme image
        function moveMeme() {
            // Generate random positions within the viewport
            const maxX = window.innerWidth - memeImage.width;
            const maxY = window.innerHeight - memeImage.height;
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            // Set the new position
            memeImage.style.left = randomX + 'px';
            memeImage.style.top = randomY + 'px';

            // Continue the animation
            animationId = requestAnimationFrame(moveMeme);
        }

        // Function to start moving the meme
        function startMoving() {
            startButton.disabled = true;
            stopButton.disabled = false;
            moveMeme();
        }

        // Function to stop moving the meme
        function stopMoving() {
            startButton.disabled = false;
            stopButton.disabled = true;
            cancelAnimationFrame(animationId);
        }

