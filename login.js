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
