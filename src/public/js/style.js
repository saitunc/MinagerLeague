document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const errorMessage = document.querySelector('.error-message');

    usernameInput.addEventListener('keydown', function (event) {
        // Check if input length exceeds 16 characters and the pressed key is not the backspace key
        if (usernameInput.value.length >= 16 && event.key !== 'Backspace' && !isArrowKey(event.key) ) {
            // Show warning message if input length exceeds 16 characters
            errorMessage.classList.add('show');
            setTimeout(function () {
                errorMessage.classList.remove('show');
            }, 2000);
        }
    });

    usernameInput.addEventListener('input', function () {
        if (usernameInput.value.length > 16) {
            // Hide error message if input length exceeds 16 characters
            errorMessage.classList.add('show');
        } else {
            // Hide error message if input length is within limit
            errorMessage.classList.remove('show');
        }
    });
});

function isArrowKey(key) {
    return key.startsWith('Arrow');
}