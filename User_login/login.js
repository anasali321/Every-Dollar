document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Send form data to the backend (replace with your backend endpoint)
    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Handle successful login (e.g., redirect to dashboard)
            window.location.href = '../../Dasboard/index.html'; // replace it with the dashboard
        } else {
            // Handle login failure
            alert('Login failed. Please check your credentials.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});