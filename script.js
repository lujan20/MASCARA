document.addEventListener('DOMContentLoaded', function () {


    // =========================================
    // GALERÍA DE IMÁGENES
    // =========================================

    const mainImage =
        document.querySelector('.main-image img');

    const thumbnails =
        document.querySelectorAll('.thumbnail-images img');

    let index = 0;


    // =========================================
    // CAMBIAR IMAGEN AL HACER CLIC
    // =========================================

    thumbnails.forEach((thumbnail, idx) => {

        thumbnail.addEventListener('click', function () {

            if (mainImage) {

                mainImage.src = thumbnail.src;

            }

            // Guardar posición actual
            index = idx;

        });

    });


    // =========================================
    // CARRUSEL AUTOMÁTICO
    // =========================================

    function autoChangeImage() {

        // Si no existen imágenes, no hacer nada
        if (!mainImage || thumbnails.length === 0) {
            return;
        }


        // Pasar a la siguiente imagen
        index++;


        // Volver a la primera cuando llegue al final
        if (index >= thumbnails.length) {

            index = 0;

        }


        // Cambiar imagen principal
        mainImage.src =
            thumbnails[index].src;

    }


    // Cambiar imagen cada 3 segundos
    if (thumbnails.length > 0) {

        setInterval(
            autoChangeImage,
            3000
        );

    }



    // =========================================
    // CONTROL DE CANTIDAD
    // =========================================

    const decreaseButton =
        document.querySelector('.decrease');

    const increaseButton =
        document.querySelector('.increase');

    const quantityInput =
        document.getElementById('quantity');


    // =========================================
    // BOTÓN -
    // =========================================

    if (decreaseButton && quantityInput) {

        decreaseButton.addEventListener(
            'click',
            function () {

                let quantity =
                    parseInt(quantityInput.value) || 1;


                // No permitir menos de 1
                if (quantity > 1) {

                    quantity--;

                }


                quantityInput.value =
                    quantity;

            }
        );

    }



    // =========================================
    // BOTÓN +
    // =========================================

    if (increaseButton && quantityInput) {

        increaseButton.addEventListener(
            'click',
            function () {

                let quantity =
                    parseInt(quantityInput.value) || 1;


                quantity++;


                quantityInput.value =
                    quantity;

            }
        );

    }



    // =========================================
    // FORMULARIO DE PEDIDO
    // =========================================

    const orderForm =
        document.getElementById('order-form');


    if (orderForm && quantityInput) {

        orderForm.addEventListener(
            'submit',
            function (event) {

                // Evitar que la página se recargue
                event.preventDefault();



                // =====================================
                // CANTIDAD
                // =====================================

                let quantity =
                    parseInt(quantityInput.value) || 1;


                // No permitir cantidades menores que 1
                if (quantity < 1) {

                    quantity = 1;

                    quantityInput.value = 1;

                }



                // =====================================
                // PRODUCTO
                // =====================================

                const productName =
                    orderForm.dataset.product;



                // =====================================
                // PRECIO
                // =====================================

                const price =
                    parseFloat(
                        orderForm.dataset.price
                    );



                // =====================================
                // COMPROBAR DATOS
                // =====================================

                if (!productName || isNaN(price)) {

                    alert(
                        'Error: falta el nombre o precio del producto.'
                    );

                    return;

                }



                // =====================================
                // CALCULAR TOTAL
                // =====================================

                const total =
                    price * quantity;



                // =====================================
                // NÚMERO DE WHATSAPP
                // =====================================

                const whatsappNumber =
                    '51979579903';



                // =====================================
                // MENSAJE DE WHATSAPP
                // =====================================

                const message =
                    `Hola, quiero hacer un pedido.%0A%0A` +

                    `🛒 Producto: ${productName}%0A` +

                    `📦 Cantidad: ${quantity}%0A` +

                    `💰 Precio unitario: S/. ${price.toFixed(2)}%0A` +

                    `💵 Total: S/. ${total.toFixed(2)}%0A%0A` +

                    `¿Podrían confirmar mi pedido?`;



                // =====================================
                // CREAR URL DE WHATSAPP
                // =====================================

                const whatsappUrl =
                    `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;



                // =====================================
                // ABRIR WHATSAPP
                // =====================================

                window.open(
                    whatsappUrl,
                    '_blank'
                );

            }
        );

    }

});
