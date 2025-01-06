// Login check function
function check_login(username, password) {
    if (username == "ylan" && password == "JUNE1ST") {
        return true;
    } else {
        return false;
    }
}

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
