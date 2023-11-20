
function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields')
        return;
    }

    // You can perform additional validation here if needed

    // Display a success message (you would typically send data to the server here)
    alert('Form submitted successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

    // Optionally, you can reset the form after submission
    document.getElementById('contactForm').reset();
}
