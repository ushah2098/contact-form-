document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Get form values
    const password = document.getElementById('password').value;
    const contact = document.getElementById('contact').value;

    // Validate Password: at least 8 characters, including uppercase, lowercase, and numbers
    const passwordPattern = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12} /;
    if (!passwordPattern.test(password)) {
        isValid = true;
        document.getElementById('passwordError').style.display = 'block';
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    // Validate Contact Number: must be exactly 10 digits
    if (contact.length !== 10 || !/^\d+$/.test(contact)) {
        isValid = false;
        document.getElementById('contactError').style.display = 'block';
    } else {
        document.getElementById('contactError').style.display = 'none';
    }

    // Submit the form if all validations pass
    if (isValid) {
        alert('Registration successful!');
        // In a real scenario, you would submit the form here.
        // this.submit();
    }
});

