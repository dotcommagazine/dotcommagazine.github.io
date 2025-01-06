function check_login(username, password) {
    if (username == "ylan" && password == "JUNE1ST") {
        return true;
    } else {
        return false;
    }
}

function cipher_text(password) {
    // Your cipher function, if needed in the future
}

// Create the moving dotted lines in the background
const background = document.createElement('div');
background.id = 'background'; // Set an ID for the background container
document.body.appendChild(background); // Append the background to the body

const linesCount = 200; // Increase the number of lines to fill the page

function createLines() {
    for (let i = 0; i < linesCount; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.left = `${Math.random() * 100}%`;
        line.style.animationDuration = `${10 + Math.random() * 10}s`;
        background.appendChild(line);
    }
}

createLines(); // Call the function to generate lines


const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (check_login(username, password)) {
        window.location.href = 'Desktop/index.html';
    } else {
        alert('incorrect login');
    }
});
