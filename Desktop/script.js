const background = document.getElementById('background');
const linesCount = 50;

function createLines() {
    for (let i = 0; i < linesCount; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.left = `${Math.random() * 100}%`;
        line.style.animationDuration = `${10 + Math.random() * 10}s`;
        background.appendChild(line);
    }
}

function updateLinesSpeed(e) {
    const speedFactor = Math.min(e.clientY / window.innerHeight, 1);
    document.querySelectorAll('.line').forEach(line => {
        line.style.animationDuration = `${5 + (1 - speedFactor) * 10}s`;
    });
}

window.addEventListener('mousemove', updateLinesSpeed);
window.addEventListener('resize', () => {
    background.innerHTML = '';
    createLines();
});

createLines();
