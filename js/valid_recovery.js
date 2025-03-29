const form = document.getElementById('formulario_recupera');
const email = document.getElementById('email');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    let valid = true;

    if (email.value.trim() === '') {
        document.getElementById('email-error').textContent = 'El correo electrónico es obligatorio.';
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        document.getElementById('email-error').textContent = 'El correo electrónico no es válido.';
        valid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // Si todos los campos son válidos, redirige a login.html
    if (valid) {
        alert('Correo de recuperación enviado correctamente.');
        window.location.href = 'login.html'; // Redirige a la página de login
    }
});
