
// Create floating bubbles
function createBubbles() {
    const body = document.body;
    const bubbleCount = 20;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        // Random size between 20px and 100px
        const size = Math.random() * 80 + 20;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        // Random position
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.top = `${Math.random() * 100}vh`;

        // Random animation duration and delay
        bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;

        body.appendChild(bubble);
    }
}

// Initialize when page loads
window.addEventListener('DOMContentLoaded', createBubbles);
