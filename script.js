document.addEventListener('DOMContentLoaded', function () {

    // =========================
    // GALERÍA DE IMÁGENES
    // =========================

    const mainImage = document.querySelector('.main-image img');
    const thumbnails = document.querySelectorAll('.thumbnail-images img');

    let index = 0;

    // Cambiar imagen al hacer clic en una miniatura
    thumbnails.forEach((thumbnail, idx) => {

        thumbnail.addEventListener('click', function () {

            mainImage.src = thumbnail.src;

            // Guardar la posición actual
            index = idx;

        });

    });


    // Carrusel automático
    function autoChangeImage() {

        if (thumbnails.length === 0) {
            return;
        }

        index++;

        if (index >= thumbnails.length) {
            index = 0;
        }

        mainImage.src = thumbnails[index].src;

    }

    // Cambiar imagen cada 3 segundos
    setInterval(autoChangeImage, 3000);


    // =========================
    // CONTROL DE CANTIDAD
    // =========================

    const decreaseButton = document.querySelector('.decrease');
    const increaseButton = document.querySelector('.increase');
    const quantityInput = document.getElementById('quantity');


    // Botón -
    if (decreaseButton && quantityInput) {

        decreaseButton.addEventListener('click', function () {

            let quantity = parseInt(quantityInput.value) || 1;

            if (quantity > 1) {
                quantity--;
            }

            quantityInput.value = quantity;

        });

    }


    // Botón +
    if (increaseButton && quantityInput) {

        increaseButton.addEventListener('click', function () {

            let quantity = parseInt(quantityInput.value) || 1;

            quantity++;

            quantityInput.value = quantity;

        });

    }


    // =========================
    // PEDIDO POR WHATSAPP
    // =========================

    const orderForm = document.getElementById('order-form');


    if (orderForm && quantityInput) {

        orderForm.addEventListener('submit', function (event) {

            event.preventDefault();


            // Cantidad
            const quantity =
                parseInt(quantityInput.value) || 1;


            // Producto
            const productName =
                'Audífonos Inalámbricos i12 TWS Bluetooth 5.0';


            // Precio
            const price = 30.00;


            // Total
            const total = price * quantity;


            // Número de WhatsApp
            const whatsappNumber =
                '51979579903';


            // Mensaje
            const message =
                `Hola, quiero hacer un pedido.%0A%0A` +
                `🛒 Producto: ${productName}%0A` +
                `📦 Cantidad: ${quantity}%0A` +
                `💰 Precio unitario: S/. ${price.toFixed(2)}%0A` +
                `💵 Total: S/. ${total.toFixed(2)}%0A%0A` +
                `¿Podrían confirmar mi pedido?`;


            // URL de WhatsApp
            const whatsappUrl =
                `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;


            // Abrir WhatsApp
            window.open(whatsappUrl, '_blank');

        });

    }

});
