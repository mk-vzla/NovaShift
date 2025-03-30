document.addEventListener('DOMContentLoaded', () => {
    const formAdd = document.getElementById('formulario_añadir_producto');
    const formModify = document.getElementById('formulario_modificar_producto');

    // Validación para el formulario de añadir productos
    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        const categoria = document.getElementById('categoria');
        const nombre = document.getElementById('nombre');
        const descripcion = document.getElementById('descripcion');
        const imagen = document.getElementById('imagen');
        const cantidad = document.getElementById('cantidad');

        // Validar categoría
        if (categoria.value.trim() === '') {
            document.getElementById('categoria_error').textContent = 'La categoría es obligatoria.';
            valid = false;
        } else {
            document.getElementById('categoria_error').textContent = '';
        }

        // Validar nombre
        if (nombre.value.trim() === '') {
            document.getElementById('nombre_error').textContent = 'El nombre es obligatorio.';
            valid = false;
        } else {
            document.getElementById('nombre_error').textContent = '';
        }

        // Validar descripción
        if (descripcion.value.trim() === '') {
            document.getElementById('descripcion_error').textContent = 'La descripción es obligatoria.';
            valid = false;
        } else {
            document.getElementById('descripcion_error').textContent = '';
        }

        // Validar imagen
        if (imagen.files.length === 0) {
            document.getElementById('imagen_error').textContent = 'La imagen es obligatoria.';
            valid = false;
        } else {
            document.getElementById('imagen_error').textContent = '';
        }

        // Validar cantidad
        if (cantidad.value.trim() === '' || cantidad.value <= 0) {
            document.getElementById('cantidad_error').textContent = 'La cantidad debe ser mayor a 0.';
            valid = false;
        } else {
            document.getElementById('cantidad_error').textContent = '';
        }

        if (valid) {
            alert('Producto añadido exitosamente.');
            formAdd.reset();
        }
    });

    // Validación para el formulario de modificar productos
    formModify.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        const productoId = document.getElementById('producto_id');
        const categoriaModificar = document.getElementById('categoria_modificar');
        const nombreModificar = document.getElementById('nombre_modificar');
        const descripcionModificar = document.getElementById('descripcion_modificar');
        const imagenModificar = document.getElementById('imagen_modificar');
        const cantidadModificar = document.getElementById('cantidad_modificar');

        // Validar ID del producto
        if (productoId.value.trim() === '') {
            document.getElementById('producto_id_error').textContent = 'El ID del producto es obligatorio.';
            valid = false;
        } else {
            document.getElementById('producto_id_error').textContent = '';
        }

        // Validar categoría
        if (categoriaModificar.value.trim() === '') {
            document.getElementById('categoria_modificar_error').textContent = 'La categoría es obligatoria.';
            valid = false;
        } else {
            document.getElementById('categoria_modificar_error').textContent = '';
        }

        // Validar nombre
        if (nombreModificar.value.trim() === '') {
            document.getElementById('nombre_modificar_error').textContent = 'El nombre es obligatorio.';
            valid = false;
        } else {
            document.getElementById('nombre_modificar_error').textContent = '';
        }

        // Validar descripción
        if (descripcionModificar.value.trim() === '') {
            document.getElementById('descripcion_modificar_error').textContent = 'La descripción es obligatoria.';
            valid = false;
        } else {
            document.getElementById('descripcion_modificar_error').textContent = '';
        }

        // Validar imagen
        if (imagenModificar.files.length === 0) {
            document.getElementById('imagen_modificar_error').textContent = 'La imagen es obligatoria.';
            valid = false;
        } else {
            document.getElementById('imagen_modificar_error').textContent = '';
        }

        // Validar cantidad
        if (cantidadModificar.value.trim() === '' || cantidadModificar.value <= 0) {
            document.getElementById('cantidad_modificar_error').textContent = 'La cantidad debe ser mayor a 0.';
            valid = false;
        } else {
            document.getElementById('cantidad_modificar_error').textContent = '';
        }

        if (valid) {
            alert('Producto modificado exitosamente.');
            formModify.reset();
        }
    });
});
