// Check login function
function check_login(username, password) {
    if (username == "ylan" && password == "JUNE1ST") {
        return true;
    } else {
        return false;
    }
}

// Function to create lines on the login page
const background = document.getElementById('background');
const linesCount = 200; // More lines to fill the page

function createLines() {
    // Clear existing lines before creating new ones
    background.innerHTML = '';

    for (let i = 0; i < linesCount; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.left = `${Math.random() * 100}%`; // Random horizontal position
        line.style.animationDuration = `${10 + Math.random() * 10}s`; // Random animation duration
        background.appendChild(line);
    }
}

// Stagger the lines by a small delay
window.addEventListener('load', () => {
    createLines(); // Create the lines after the page is loaded
});

// Login form submission handler
const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (check_login(username, password)) {
        window.location.href = 'Desktop/index.html'; // Redirect to Desktop page on successful login
    } else {
        alert('Incorrect login');
    }
});
