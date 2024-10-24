
const memeImage = document.getElementById('memeImage');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let animationId; // Variable to store the animation frame ID
let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

// Easing function for smooth movement
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Function to move the meme image
function moveMeme(timestamp) {
    if (!animationId) {
        animationId = timestamp;
    }
    const progress = (timestamp - animationId) / 1000; // Duration of 1 second

    if (progress < 1) {
        const x = currentX + (targetX - currentX) * easeInOutQuad(progress);
        const y = currentY + (targetY - currentY) * easeInOutQuad(progress);
        memeImage.style.left = `${x}px`;
        memeImage.style.top = `${y}px`;
        requestAnimationFrame(moveMeme);
    } else {
        currentX = targetX;
        currentY = targetY;
        memeImage.style.left = `${currentX}px`;
        memeImage.style.top = `${currentY}px`;
        setNewTarget();
    }
}

// Function to set new random target positions
function setNewTarget() {
    const maxX = window.innerWidth - memeImage.width;
    const maxY = window.innerHeight - memeImage.height;
    targetX = Math.random() * maxX;
    targetY = Math.random() * maxY;
    animationId = null;
    requestAnimationFrame(moveMeme);
}

// Function to start moving the meme
function startMoving() {
    startButton.disabled = true;
    stopButton.disabled = false;
    setNewTarget();
}

// Function to stop moving the meme
function stopMoving() {
    startButton.disabled = false;
    stopButton.disabled = true;
    cancelAnimationFrame(animationId);
    animationId = null;
}
