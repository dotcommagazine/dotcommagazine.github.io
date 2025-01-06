// Function to check the login credentials
function check_login(username, password)
{
    if(username == "ylan" && password == "JUNE1ST")
    {
        return true;
    }
    else
    {
        return false;
    }
}

// Moving lines background code
const background = document.getElementById('background');
const linesCount = 100; // Increased number of lines for login page

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

// Ensure lines are generated on page load
window.addEventListener('resize', () => {
    background.innerHTML = '';
    createLines();
});

createLines();

// Function to cipher the password (empty for now)
function cipher_text(password) {}

// Event listener for the login form submission
const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(check_login(username, password))
    {
        window.location.href = 'Desktop/index.html';
    }
    else
    {
        alert('incorrect login');
    }
});
