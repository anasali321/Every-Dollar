document.querySelector('#forms').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Password verification   

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be at   least 6 characters long.');
            return;
    }


    // Validate form data (you can add more validation as needed)
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Send form data to server (replace with your backend logic)
    fetch('/register', {
        method: 'POST',
        body: JSON.stringify({ email, username, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                // Handle successful registration
                alert('Registration successful!');
                // Redirect to login page or other desired page
                window.location.href = '../User_login/login.html';
            } else {
                // Handle registration errors
                alert('Registration failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
});