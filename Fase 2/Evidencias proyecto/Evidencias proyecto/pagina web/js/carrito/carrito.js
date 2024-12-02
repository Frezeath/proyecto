/* 
--------------------------------------------------------------------------------------------------------------
    -------------------------------------- ITRED SPA CART SCRIPT --------------------------------------
    -------------------------------------------------------------------------------------------------------------
    Sitio Web Creado por ITred Spa.
    Dirección: Guido Reni #4190, Pedro Aguirre Cerda - Santiago - Chile
    Contacto: contacto@itred.cl o itred.spa@gmail.com
    Sitio Web: https://www.itred.cl
    Creado, Programado y Diseñado por ITred Spa.
    BPPJ
--------------------------------------------------------------------------------------------------------------
*/

// TITULO: TOGGLECUPON

    // descripción: función para mostrar/ocultar el campo de cupón.
    function toggleCupon() {
        var cuponField = document.getElementById("cuponField");
        if (cuponField.style.display === "none") {
            cuponField.style.display = "block";
        } else {
            cuponField.style.display = "none";
        }
}

// TITULO: APPLYCOUPON

    function applyCoupon() {
        var couponInput = document.getElementById("cuponInput").value;
        var totalAmount = parseFloat(document.getElementById('totalAmountData').value);
        var discount = 0;
        var couponMessage = document.getElementById("couponMessage");

        // Reiniciar el mensaje
        couponMessage.textContent = "";

        // Recuperar los cupones utilizados desde localStorage
        var usedCoupons = JSON.parse(localStorage.getItem('usedCoupons')) || [];

        // Verificar si el cupón ya fue utilizado
        if (usedCoupons.includes(couponInput)) {
            couponMessage.textContent = "Este cupón ya ha sido utilizado.";
            couponMessage.style.color = "red"; // Cambiar color a rojo para mensajes de error
            return; // Detener la ejecución si el cupón ya fue usado
        }

        // Aplicar descuentos según el código ingresado
        if (couponInput === "DESCUENTO10") {
            discount = totalAmount * 0.10; // 10% de descuento
            totalAmount -= discount;
            couponMessage.textContent = "Se ha aplicado el descuento de 10%. Nuevo total: " + numberFormat(totalAmount) + " CLP.";
        } else if (couponInput === "DESCUENTO20") {
            discount = totalAmount * 0.20; // 20% de descuento
            totalAmount -= discount;
            couponMessage.textContent = "Se ha aplicado el descuento de 20%. Nuevo total: " + numberFormat(totalAmount) + " CLP.";
        } else {
            couponMessage.textContent = "Cupón inválido. Intenta nuevamente.";
            couponMessage.style.color = "red"; // Cambiar color a rojo para mensajes de error
            return; // Detener la ejecución si el cupón es inválido
        }

        // Agregar el cupón a la lista de usados
        usedCoupons.push(couponInput);
        localStorage.setItem('usedCoupons', JSON.stringify(usedCoupons)); // Guardar en localStorage

        // Actualizar el monto total mostrado
        document.getElementById('totalAmountDisplay').value = numberFormat(totalAmount) + " CLP";
        document.getElementById('totalAmountData').value = totalAmount; // Actualizar el input oculto con el nuevo total
    }



function numberFormat(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Formatear con puntos como separador de miles
}


// TITULO: TOGGLECHECKOUT

    // descripción: función para mostrar/ocultar el checkout.
    function toggleCheckout() {
        var paymentMethods = document.getElementById("paymentMethods");
        var checkoutSection = document.getElementById("checkoutSection");
        var cuponContainer = document.getElementById("cuponContainer");

        if (paymentMethods.style.display === "none") {
            paymentMethods.style.display = "block";
            checkoutSection.style.display = "block";
            cuponContainer.style.display = "block";
        } else {
            paymentMethods.style.display = "none";
            checkoutSection.style.display = "none";
            cuponContainer.style.display = "none";
        }
    }
    
    function procesarVenta() {
        // Obtener el método de pago seleccionado
        var paymentMethod = document.getElementById("paymentMethod").value;
    
        // Comprobar si el método de pago es PayPal
        if (paymentMethod === "paypal") {
            // Si el pago es con PayPal, redirigir al archivo paypal.php en la ruta correcta
            var totalAmount = document.getElementById("totalAmountData").value;
            window.location.href = "../../../php/crear_nuevo/paypal/paypal.php?totalAmount=" + totalAmount;
        } else if (paymentMethod === "flow") {
            // Redirigir a Flow (si lo deseas, añade lógica aquí)
            alert("Redirigiendo a Flow...");
            // window.location.href = "flow.php"; // Si tienes un archivo PHP para Flow
        } else if (paymentMethod === "bank_transfer") {
            // Si es transferencia bancaria, puedes manejar el proceso de pago aquí
            alert("Has seleccionado Transferencia Bancaria");
            // Redirigir a una página de confirmación o procesar el pago aquí
        }
    }
    
    
/* 
--------------------------------------------------------------------------------------------------------------
    ---------------------------------------- FIN ITRED SPA CART SCRIPT ----------------------------------------
    -------------------------------------------------------------------------------------------------------------
    Sitio Web Creado por ITred Spa.
    Dirección: Guido Reni #4190, Pedro Aguirre Cerda - Santiago - Chile
    Contacto: contacto@itred.cl o itred.spa@gmail.com
    Sitio Web: https://www.itred.cl
    Creado, Programado y Diseñado por ITred Spa.
    BPPJ
--------------------------------------------------------------------------------------------------------------
*/
