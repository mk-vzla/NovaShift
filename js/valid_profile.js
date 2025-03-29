const form = document.getElementById('formulario_modificar_perfil');

const nombre = document.getElementById('nombre');
const alias = document.getElementById('alias');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const direccion = document.getElementById('direccion');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    let valid = true;

    // Validación de Nombre Completo
    if (nombre.value.trim() === '') {
        document.getElementById('nombre-error').textContent = 'El nombre es obligatorio.';
        valid = false;
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)+$/.test(nombre.value.trim())) {
        document.getElementById('nombre-error').textContent = 'El nombre debe contener al menos un nombre y un apellido.';
        valid = false;
    } else {
        document.getElementById('nombre-error').textContent = '';
    }

    // Validación de Alias
    if (alias.value.trim() === '') {
        document.getElementById('alias-error').textContent = 'El alias es obligatorio.';
        valid = false;
    } else {
        document.getElementById('alias-error').textContent = '';
    }

    // Validación de Contraseña
    if (password1.value.trim() === '') {
        document.getElementById('password1-error').textContent = 'La contraseña es obligatoria.';
        valid = false;
    } else if (password1.value.trim().length < 6 || password1.value.trim().length > 18) {
        document.getElementById('password1-error').textContent = 'La contraseña debe tener entre 6 y 18 caracteres.';
        valid = false;
    } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\S+$/.test(password1.value.trim())) {
        document.getElementById('password1-error').textContent = 'La contraseña debe contener al menos una letra mayúscula, una minúscula y un número.';
        valid = false;
    } else {
        document.getElementById('password1-error').textContent = '';
    }

    if (password2.value.trim() === '') {
        document.getElementById('password2-error').textContent = 'Por favor confirma tu contraseña.';
        valid = false;
    } else if (password2.value !== password1.value) {
        document.getElementById('password2-error').textContent = 'Las contraseñas no coinciden.';
        valid = false;
    } else {
        document.getElementById('password2-error').textContent = '';
    }

    // Validación de Dirección de Despacho
    if (direccion.value.trim() === '') {
        document.getElementById('direccion-error').textContent = 'La dirección de despacho es obligatoria.';
        valid = false;
    } else {
        document.getElementById('direccion-error').textContent = '';
    }

    // Si todos los campos son válidos, realizar acción
    if (valid) {
        alert('Perfil actualizado exitosamente.');
        form.reset(); // Reinicia el formulario
    }
});

const limpiarButton = document.getElementById('limpiar');
limpiarButton.addEventListener('click', function () {
    form.reset(); // Reinicia el formulario
    document.querySelectorAll('.text-danger').forEach(error => error.textContent = ''); // Limpia los mensajes de error
});

