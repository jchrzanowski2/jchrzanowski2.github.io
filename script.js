document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        if (email) {
            localStorage.setItem('newsletterEmail', email);
            alert('Adres e-mail został zapisany!');
        }
    });
});

function validateForm() {
    var email = document.getElementById('email').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Proszę podać poprawny adres e-mail.");
        return false;
    }

    return true;
}

window.onload = function() {
    var image = document.getElementById('Cleopatra-image');
    var initialPosition = window.innerWidth;
    var interval = setInterval(moveImage, 10);

    function moveImage() {
        if (initialPosition > 0) {
            initialPosition -= 5;
            image.style.marginLeft = initialPosition + 'px';
        } else {
            clearInterval(interval);
        }
    }
}