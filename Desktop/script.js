const background = document.getElementById('background');
const linesCount = 50;

function createLines() {
    for (let i = 0; i < linesCount; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        line.style.animationDuration = `${5 + Math.random() * 5}s`; // Base speed
        line.style.animationTimingFunction = 'linear';
        background.appendChild(line);
    }
}

function updateLinesSpeed(e) {
    const speedFactor = Math.min(e.clientY / window.innerHeight, 0.3); // Slightly affects speed
    document.querySelectorAll('.line').forEach(line => {
        line.style.animationDuration = `${4 + (1 - speedFactor) * 6}s`; // Slightly affected by mouse
    });
}

window.addEventListener('mousemove', updateLinesSpeed);
window.addEventListener('resize', () => {
    background.innerHTML = '';
    createLines();
});

createLines();
