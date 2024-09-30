function randomizePosition(element) {
    // Generate random x and y positions within the window boundaries
    const x = Math.random() * (window.innerWidth - element.clientWidth);
    const y = Math.random() * (window.innerHeight - element.clientHeight);
    
    // Move the element smoothly to the new position
    element.style.transition = 'transform 5s ease-in-out'; // Smooth movement over 5 seconds
    element.style.transform = `translate(${x}px, ${y}px)`;
}

function randomWalk(element) {
    // Set an initial random position
    randomizePosition(element);

    // Continuously randomize the position at random intervals
    setInterval(() => {
        randomizePosition(element);
    }, 3000 + Math.random() * 3000); // Random interval between 3 and 6 seconds
}

document.querySelectorAll('.floating-emoji').forEach((emoji) => {
    // Delay the start of each emoji to ensure they start moving at different times
    setTimeout(() => {
        randomWalk(emoji);
    }, Math.random() * 2000); // Add a random delay between 0 and 2 seconds before they start
});
