document.addEventListener('DOMContentLoaded', function() {
    // Variables para carrusel y miniaturas
    const mainImage = document.querySelector('.main-image img');
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const decreaseButton = document.querySelector('.decrease');
    const increaseButton = document.querySelector('.increase');
    const quantityInput = document.getElementById('quantity');
    let index = 0;

    // Función para cambiar la imagen cuando se hace clic en una miniatura
    function changeImage(thumbnail) {
        mainImage.src = thumbnail.src;
    }

    // Función para cambiar la imagen automáticamente
    function autoChangeImage() {
        index++;
        if (index >= thumbnails.length) {
            index = 0;  // Volver al inicio cuando llegue al final
        }
        mainImage.src = thumbnails[index].src;  // Cambia la imagen principal
    }

    // Cambiar imagen cada 3 segundos (carrusel automático)
    const autoCarousel = setInterval(autoChangeImage, 1000);

    // Cambiar imagen manualmente al hacer clic en las miniaturas
    thumbnails.forEach((thumbnail, idx) => {
        thumbnail.addEventListener('click', function() {
            clearInterval(autoCarousel);  // Detener el carrusel automático
            mainImage.src = thumbnail.src;  // Cambiar a la imagen de la miniatura
            index = idx;  // Actualizar el índice para que el carrusel continúe desde esta imagen
        });
    });

    // Función para disminuir la cantidad
    decreaseButton.addEventListener('click', function() {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
        }
    });

    // Función para aumentar la cantidad
    increaseButton.addEventListener('click', function() {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
    });

    // Enviar pedido a WhatsApp
    document.getElementById('order-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const quantity = document.getElementById('quantity').value;
        const productName = "Máscara de Purga Iluminada";  // Cambia por el nombre dinámico del producto si es necesario

        // Crear el mensaje para WhatsApp
        const message = `Hola, me gustaría hacer un pedido de: %0A
                         - Producto: ${productName} %0A
                         - Cantidad: ${quantity}`;

        // Reemplaza con tu número de WhatsApp (código de país + número sin espacios)
        const whatsappNumber = "+51979579903";
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
});
