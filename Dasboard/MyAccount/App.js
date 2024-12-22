const changePasswordForm = document.getElementById('changePasswordForm');

changePasswordForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const currentPassword = document.getElementById('currentPassword').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // 1. Check if current password matches the user's registered password
  // **This step requires backend interaction to verify the current password.** 
  // For this example, we'll simulate a successful check:
  const isCurrentPasswordValid = true; // Replace with actual backend validation

  // 2. Check if new password and confirm password match
  if (newPassword !== confirmPassword) {
    alert('New passwords do not match.');
    return;
  }

  if (isCurrentPasswordValid) {
    // 3. If both checks pass, send the new password to the backend for updating
    // **This step requires an AJAX call to your backend (Spring Boot)**
    fetch('/api/change-password', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ newPassword: newPassword }) 
    })
    .then(response => {
      if (response.ok) { 
        alert('Password changed successfully!'); 
      } else { 
        alert('Failed to change password. Please try again.'); 
      } 
    })
    .catch(error => {
      console.error('Error:', error); 
      alert('An error occurred. Please try again later.'); 
    });

  } else {
    alert('Incorrect current password.');
  }
});


// Email change fucntionality


const changeEmailForm = document.getElementById('changeEmailForm');

// ... your existing password change form event listener ...

changeEmailForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const currentEmail = document.getElementById('currentEmail').value;
  const newEmail = document.getElementById('newEmail').value;

  try {
    const response = await fetch('/api/change-email', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any necessary authentication headers (e.g., JWT)
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      },
      body: JSON.stringify({
        currentEmail: currentEmail,
        newEmail: newEmail
      })
    });

    if (response.ok) {
      alert('Email changed successfully!'); 
    } else {
      const errorData = await response.json(); 
      alert(`Error changing email: ${errorData.message}`); 
    }

  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
});






