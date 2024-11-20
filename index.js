
  // Get references to the meme image and buttons
const memeImage = document.getElementById('memeImage');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const muteButton = document.getElementById('muteButton');
const backgroundAudio = document.getElementById('backgroundAudio');

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
    startAudio(); // Start the audio when movement begins
}

// Function to stop moving the meme
function stopMoving() {
    startButton.disabled = false;
    stopButton.disabled = true;
    cancelAnimationFrame(animationId);
    stopAudio(); // Stop the audio when movement stops
}

// Function to start the audio
function startAudio() {
    backgroundAudio.play();
}

// Function to stop the audio
function stopAudio() {
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0;
}

// Function to toggle mute/unmute
function toggleMute() {
    backgroundAudio.muted = !backgroundAudio.muted;
    muteButton.textContent = backgroundAudio.muted ? 'Unmute' : 'Mute';
}

// Start the audio when the page loads
window.onload = function() {
    startAudio();
};
