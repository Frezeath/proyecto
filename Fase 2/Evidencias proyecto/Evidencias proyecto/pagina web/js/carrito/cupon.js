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
// TITULO : APPLYCOUPON

// descripción: función para aplicar el cupón de descuento.
function applyCoupon() {
    if (document.getElementById("cuponInput").disabled) {
        alert("El cupón ya ha sido aplicado.");
        return;
    }

    var couponInput = document.getElementById("cuponInput").value;
    var totalAmount = parseFloat(document.getElementById('totalAmountData').value);
    var discount = 0;

    if (couponInput === "DESCUENTO10") {
        discount = totalAmount * 0.1;
    } else if (couponInput === "DESCUENTO20") {
        discount = totalAmount * 0.2;
    }

    if (discount > 0) {
        var newTotal = totalAmount - discount;
        document.getElementById("totalAmountDisplay").value = newTotal.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' CLP';
        document.getElementById("hiddenTotalAmount").value = newTotal.toFixed(0);

        alert("Cupón aplicado. Se ha descontado " + discount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + " CLP.");
        document.getElementById("cuponInput").disabled = true;
        document.getElementById("applyCouponButton").disabled = true;

        // Enviar solicitud AJAX para actualizar la sesión
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "update_coupon_session.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("coupon_applied=true");
    } else {
        alert("El cupón ingresado no es válido.");
    }
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

// TITULO: PROCESSSALE

    // descripción: función para procesar la venta.
    function processSale() {
        // abre una nueva pestaña con la vista de boleta
        window.open('../boleta/boleta.php', '_blank'); // reemplaza con la ruta correcta de tu boleta

        // redirige a la API de Flow
        document.getElementById('checkoutSection').querySelector('form').submit();
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
