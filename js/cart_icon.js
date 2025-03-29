document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.bi-cart');
    const buyButtons = document.querySelectorAll('.btn-primary'); // Selecciona todos los botones "Comprar"

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Cambia el ícono del carrito al presionar "Comprar"
            cartIcon.outerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="38px" height="38px" fill="pink" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 
                    3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
            `;
        });
    });
});
