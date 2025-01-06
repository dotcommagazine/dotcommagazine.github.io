const background = document.getElementById('background');
const linesCount = 50;
let scrollFactor = 1;  // Variable to store the scroll speed

function createLines() {
    for (let i = 0; i < linesCount; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.left = `${Math.random() * 100}%`;  // Random horizontal position
        line.style.top = `${Math.random() * 100}%`;  // Random vertical starting point
        line.style.animationDuration = `${5 + Math.random() * 5}s`;  // Speed of movement
        background.appendChild(line);
    }
}

function updateLinesSpeed(e) {
    // Adjust the speed of the lines based on the scroll wheel
    if (e.deltaY > 0) {
        scrollFactor = Math.min(scrollFactor + 0.1, 2); // Increase speed
    } else {
        scrollFactor = Math.max(scrollFactor - 0.1, 0.5); // Decrease speed
    }

    document.querySelectorAll('.line').forEach(line => {
        line.style.animationDuration = `${5 / scrollFactor + Math.random() * 5}s`;  // Speed adjusted by scroll
    });
}

window.addEventListener('wheel', updateLinesSpeed);  // Use scroll wheel for interactivity
window.addEventListener('resize', () => {
    background.innerHTML = '';
    createLines();
});

createLines();
