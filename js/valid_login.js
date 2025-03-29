const form = document.getElementById('formulario_login');


const alias = document.getElementById('alias');
const password = document.getElementById('password');


form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    let valid = true;


    // Alias
    if (alias.value.trim() === '') {
        document.getElementById('alias-error').textContent = 'El alias es obligatorio.';
        valid = false;
    } else {
        document.getElementById('alias-error').textContent = '';
    }


    // Contraseña -- Expresión regular contraseña: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\S+$/
    if (password.value.trim() === '') {
        document.getElementById('password-error').textContent = 'La contraseña es obligatoria.';
        valid = false;
    } else if (password.value.trim().length < 6 || password.value.trim().length > 18) {
        document.getElementById('password-error').textContent = 'La contraseña debe tener entre 6 y 18 caracteres.';
        valid = false;
    } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\S+$/.test(password.value.trim())) {
        document.getElementById('password-error').textContent = 'La contraseña debe contener al menos una letra mayúscula, una minúscula y un número.';
        valid = false;
    } else {
        document.getElementById('password-error').textContent = '';
    }





    // Si todos los campos son válidos, puedes enviar el formulario o realizar otra acción
    if (valid) {
        const usuario = {
            alias: alias.value.trim(),
            password: password.value.trim(),
            };

        alert('Registro exitoso');
        form.reset();
    }
});

const limpiarButton = document.getElementById('limpiar');
limpiarButton.addEventListener('click', function () {
    form.reset(); // Reinicia el formulario
    document.querySelectorAll('.text-danger').forEach(error => error.textContent = ''); // Limpia los mensajes de error
    document.querySelector('.error-message').textContent = ''; // Limpia el mensaje de términos
});
