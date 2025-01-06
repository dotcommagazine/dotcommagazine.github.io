// Login check function
function check_login(username, password) {
    if (username == "ylan" && password == "JUNE1ST") {
        return true;
    } else {
        return false;
    }
}

// Cipher function (currently unused)
function cipher_text(password) {
    // You can add encryption logic here if needed
}

// Line creation function
function createLines() {
    const linesContainer = document.createElement('div');
    linesContainer.id = 'background'; // Set ID for the background container
    document.body.appendChild(linesContainer);

    for (let i = 0; i < 100; i++) {
        const line = document.createElement('div');
        line.classList.add('line'); // Add the line class to each line
        linesContainer.appendChild(line);

        // Set each line's initial position
        line.style.left = Math.random() * window.innerWidth + 'px';
        line.style.top = Math.random() * window.innerHeight + 'px';
    }
}

// Function to move lines on scroll (scroll wheel interactivity)
let scrollSpeed = 0;

window.addEventListener('wheel', (e) => {
    scrollSpeed += e.deltaY * 0.03;
    document.querySelectorAll('.line').forEach((line) => {
        let moveAmount = (Math.random() - 0.5) * scrollSpeed; // Random movement based on scroll
        line.style.transform = `translate(${moveAmount}px, ${scrollSpeed}px)`;
    });
});

// Create lines on page load
window.addEventListener('load', createLines);

// Handle form submission and login
const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (check_login(username, password)) {
        window.location.href = 'Desktop/index.html'; // Redirect to the desktop page if login is successful
    } else {
        alert('Incorrect login');
    }
});
