const background = document.getElementById('background');
const linesCount = 100; // More lines for a dense effect

// Create moving lines
function createLines() {
    for (let i = 0; i < linesCount; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.left = `${Math.random() * 100}%`; // Random horizontal position
        line.style.animationDuration = `${10 + Math.random() * 10}s`; // Stagger release
        background.appendChild(line);
    }
}

// Adjust speed of lines with scroll wheel
function updateLinesSpeed(e) {
    const speedFactor = Math.min(e.deltaY / window.innerHeight, 1);
    document.querySelectorAll('.line').forEach(line => {
        const currentDuration = parseFloat(line.style.animationDuration);
        line.style.animationDuration = `${Math.max(5, currentDuration - speedFactor * 5)}s`;
    });
}

window.addEventListener('wheel', updateLinesSpeed); // Scroll wheel interaction
createLines(); // Create the initial set of lines
