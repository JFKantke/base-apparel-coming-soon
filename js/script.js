document.getElementById('email-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.style.visibility = 'visible';
        emailInput.style.borderColor = 'red';
    } else {
        errorMessage.style.visibility = 'hidden';
        emailInput.style.borderColor = 'hsl(0, 36%, 70%)';
        alert('Thank you for subscribing!');
        emailInput.value = ''; // Reset input field
    }
});
